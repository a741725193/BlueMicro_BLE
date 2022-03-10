// SPDX-FileCopyrightText: 2018-2022 BlueMicro contributors (https://github.com/jpconstantineau/BlueMicro_BLE/graphs/contributors)
//
// SPDX-License-Identifier: BSD-3-Clause

/**************************************************************************************************************************/
#include "firmware_loop.h"




/**************************************************************************************************************************/
// Keyboard Scanning
/**************************************************************************************************************************/

#if DIODE_DIRECTION == COL2ROW
#define writeRow(r) digitalWrite(r,LOW)
#define modeCol(c) pinMode(c, INPUT_PULLUP)
#ifdef NRF52840_XXAA
#define gpioIn (((uint64_t)(NRF_P1->IN)^0xffffffff)<<32)|(NRF_P0->IN)^0xffffffff
#else
#define gpioIn (NRF_GPIO->IN)^0xffffffff
#endif
#else
#define writeRow(r) digitalWrite(r,HIGH)
#define modeCol(c) pinMode(c, INPUT_PULLDOWN)
#ifdef NRF52840_XXAA
#define gpioIn (((uint64_t)NRF_P1->IN)<<32)|(NRF_P0->IN)
#else
#define gpioIn NRF_GPIO->IN
#endif
#endif
#ifdef NRF52840_XXAA
#define PINDATATYPE uint64_t
#else
#define PINDATATYPE uint32_t
#endif
/**************************************************************************************************************************/
// THIS FUNCTION TAKES CARE OF SCANNING THE MATRIX AS WELL AS DEBOUNCING THE KEY PRESSES
// IF YOU ARE USING A DIFFERENT METHOD TO READ/WRITE TO GPIOS (SUCH AS SHIFT REGISTERS OR GPIO EXPANDERS), YOU WILL
// NEED TO RE-WORK THIS ROUTINE.  IDEALLY WE SHOULD HAVE THIS AS A COMPILE-TIME OPTION TO SWITCH BETWEEN ROUTINES.
/**************************************************************************************************************************/
void scanMatrix() {
LOG_LV1("BLEMIC","scanMatrix" ); 
    keyboardstate.timestamp  = millis();   // lets call it once per scan instead of once per key in the matrix
    
    static PINDATATYPE pindata[MATRIX_ROWS][DEBOUNCETIME];

    static uint8_t head = 0; // points us to the head of the debounce array;

    for (int i = 0; i < MATRIX_COLS; ++i){
        modeCol(columns[i]);
    }

    for (int j = 0; j < MATRIX_ROWS; ++j){
        // set the current row as OUPUT and LOW
        PINDATATYPE pinreg = 0;

        pinMode(rows[j], OUTPUT);
        writeRow(rows[j]);

        nrfx_coredep_delay_us(1);   // need for the GPIO lines to settle down electrically before reading.
        pindata[j][head] = gpioIn;  // press is active high regardless of diode dir

        //debounce happens here - we want to press a button as soon as possible, and release it only when all bounce has left
        for (int d = 0; d < DEBOUNCETIME; ++d)
            pinreg |= pindata[j][d];
        
        for (int i = 0; i < MATRIX_COLS; ++i){
            int ulPin = g_ADigitalPinMap[columns[i]]; 
            if((pinreg>>ulPin)&1)  KeyScanner::press(keyboardstate.timestamp, j, i);
            else                   KeyScanner::release(keyboardstate.timestamp, j, i);
        }

        pinMode(rows[j], INPUT);                                                   // 'disables' the row that was just scanned
    }
    for (int i = 0; i < MATRIX_COLS; ++i) {                             //Scanning done, disabling all columns
        pinMode(columns[i], INPUT);                                     
    }

    head++;
    if(head >= DEBOUNCETIME) head = 0; // reset head to 0 when we reach the end of our buffer
}


/**************************************************************************************************************************/
// THIS IS THE DEFAULT process_user_macros FUNCTION WHICH IS OVERRIDEN BY USER ONE.
/**************************************************************************************************************************/
#if USER_MACRO_FUNCTION == 1  
    void process_user_macros(uint16_t macroid)
    {
        switch ((macroid))
        {
            case MC(KC_A):
            addStringToQueue( "Macro Example 1");
            break;
        }
    }
#endif

void UpdateQueue()
{
  #ifdef ENABLE_COMBOS
     stringbuffer.insert(stringbuffer.end(), combos.keycodebuffertosend.rbegin(),combos.keycodebuffertosend.rend());
     combos.keycodebuffertosend.clear();
  #endif

}

/**************************************************************************************************************************/
// macro string queue management
/**************************************************************************************************************************/
void addStringToQueue(const char* str)
{
  auto it = stringbuffer.begin();
  char ch;
  while( (ch = *str++) != 0 )
  {
    uint8_t modifier = ( hid_ascii_to_keycode[(uint8_t)ch][0] ) ? KEYBOARD_MODIFIER_LEFTSHIFT : 0;
    uint8_t keycode = hid_ascii_to_keycode[(uint8_t)ch][1];
    uint16_t keyreport = MOD( modifier << 8 , keycode);
    it = stringbuffer.insert(it, keyreport);
  }

}
/**************************************************************************************************************************/
/**************************************************************************************************************************/
void addKeycodeToQueue(const uint16_t keycode)
{
  auto it = stringbuffer.begin();
  auto hidKeycode = static_cast<uint8_t>(keycode & 0x00FF);

        if (hidKeycode >= KC_A && hidKeycode <= KC_EXSEL)  // only insert keycodes if they are valid keyboard codes...
        {
            it = stringbuffer.insert(it, keycode);
        }
  }

void addKeycodeToQueue(const uint16_t keycode, const uint8_t modifier)
{
  auto it = stringbuffer.begin();
  auto hidKeycode = static_cast<uint8_t>(keycode & 0x00FF);
     //  auto extraModifiers = static_cast<uint8_t>((keycode & 0xFF00) >> 8);

        if (hidKeycode >= KC_A && hidKeycode <= KC_EXSEL)  // only insert keycodes if they are valid keyboard codes...
        {
                uint16_t keyreport = MOD( modifier << 8 , hidKeycode);
                it = stringbuffer.insert(it, keyreport);
        }
  }  
/**************************************************************************************************************************/
/**************************************************************************************************************************/
void process_keyboard_function(uint16_t keycode)
{
 // send command to command queue
}

/**************************************************************************************************************************/
/**************************************************************************************************************************/
void process_user_special_keys()
{
// send KS(KC_ESC) as command
}

/**************************************************************************************************************************/
// Communication with computer and other boards
/**************************************************************************************************************************/
void sendKeyPresses() {

   KeyScanner::getReport();                                         // get state data - Data is in KeyScanner::currentReport 

  if (KeyScanner::special_key > 0){
      process_user_special_keys();
      KeyScanner::special_key = 0;
  }

  if (KeyScanner::macro > 0){
      process_user_macros(KeyScanner::macro);
      KeyScanner::macro = 0;
      
  } 
  UpdateQueue();
  if (!stringbuffer.empty()) // if the macro buffer isn't empty, send the first character of the buffer... which is located at the back of the queue
  {  
    HIDKeyboard reportarray = {0, {0, 0 ,0, 0, 0, 0}};
    uint16_t keyreport = stringbuffer.back();
    stringbuffer.pop_back();
    
    reportarray.modifier = static_cast<uint8_t>((keyreport & 0xFF00) >> 8);// mods
    reportarray.keycode[0] = static_cast<uint8_t>(keyreport & 0x00FF);

    auto buffer_iterator = reportbuffer.begin();
    buffer_iterator = reportbuffer.insert(buffer_iterator, reportarray);

      uint16_t lookahead_keyreport = stringbuffer.back();
      if (lookahead_keyreport == keyreport) // if the next key is the same, make sure to send a key release before sending it again... but keep the mods.
      {
        reportarray.modifier = static_cast<uint8_t>((keyreport & 0xFF00) >> 8);// mods;
        reportarray.keycode[0] = 0;
        buffer_iterator = reportbuffer.begin();
        buffer_iterator = reportbuffer.insert(buffer_iterator, reportarray);
      }
  }  


 
  if (!reportbuffer.empty()) // if the report buffer isn't empty, send the first character of the buffer... which is located at the end of the queue
  {  
    HIDKeyboard reportarray  = reportbuffer.back();
    reportbuffer.pop_back();
    bluemicro_hid.keyboardReport(0, reportarray.keycode);
    
    
    if (reportbuffer.empty()) // make sure to send an empty report when done...
    { 
        bluemicro_hid.keyboardRelease();
    }
   // KeyScanner::processingmacros=0;
  }
  else if ((KeyScanner::reportChanged))  //any new key presses anywhere?
  {     

      bluemicro_hid.keyboardReport(0, KeyScanner::currentReport.keycode);
                                                                      
    //    LOG_LV1("MXSCAN","SEND: %i %i %i %i %i %i %i %i %i " ,keyboardstate.timestamp,KeyScanner::currentReport.modifier, KeyScanner::currentReport.keycode[0],KeyScanner::currentReport.keycode[1],KeyScanner::currentReport.keycode[2], KeyScanner::currentReport.keycode[3],KeyScanner::currentReport.keycode[4], KeyScanner::currentReport.keycode[5],KeyScanner::currentReport.layer);        
  } else if (KeyScanner::specialfunction > 0)
  {
    process_keyboard_function(KeyScanner::specialfunction);
    KeyScanner::specialfunction = 0; 
  } else if (KeyScanner::consumer > 0)
  {
    // send consumeer code
    KeyScanner::consumer = 0; 
  } else if (KeyScanner::mouse > 0)
  {
    // send mouse code
    KeyScanner::mouse = 0; 
  }
  

  #if BLE_PERIPHERAL ==1   | BLE_CENTRAL ==1                            /**************************************************/
    if(KeyScanner::layerChanged || (keyboardstate.timestamp-keyboardstate.lastupdatetime > 1000))     //layer comms
    {   
        keyboardstate.lastupdatetime = keyboardstate.timestamp;
        sendlayer(KeyScanner::localLayer);
        LOG_LV1("MXSCAN","Layer %i  %i" ,keyboardstate.timestamp,KeyScanner::localLayer);
        KeyScanner::layerChanged = false;                                      // mark layer as "not changed" since last update
    } 
  #endif                                                                /**************************************************/
}


void checkforsleep()
{
    
    switch (keyboardstate.connectionState)
    {
      case CONNECTION_USB:
        // never sleep in this case
      break;

      case CONNECTION_BLE:
      //  gotoSleep(timesincelastkeypress, true);
      break;

      case CONNECTION_NONE:
     //   gotoSleep(timesincelastkeypress, false);
      break;
    }
  
}

void checkforunpair()
{
  if (keyboardstate.needUnpair)
  {
      ADDCOMMAND(commandQueue, (KINT(6)) );
  }
}

void unpaircommand()
{
   // bt_disconnect();
    char filename[33] = { 0 };
    sprintf(filename, "/adafruit/bond_prph/%04x", keyboardconfig.BLEProfileEdiv[keyboardconfig.BLEProfile]);
    InternalFS.remove(filename);

    sprintf(filename, "/adafruit/bond_prph/%02X%02X%02X%02X%02X%02X", keyboardconfig.BLEProfileAddr[keyboardconfig.BLEProfile][0],
                                                                      keyboardconfig.BLEProfileAddr[keyboardconfig.BLEProfile][1],
                                                                      keyboardconfig.BLEProfileAddr[keyboardconfig.BLEProfile][2],
                                                                      keyboardconfig.BLEProfileAddr[keyboardconfig.BLEProfile][3],
                                                                      keyboardconfig.BLEProfileAddr[keyboardconfig.BLEProfile][4],
                                                                      keyboardconfig.BLEProfileAddr[keyboardconfig.BLEProfile][5]);
     InternalFS.remove(filename);

    keyboardconfig.BLEProfileEdiv[keyboardconfig.BLEProfile] = 0xFFFF;
    memset(keyboardconfig.BLEProfileAddr[keyboardconfig.BLEProfile], 0, 6);
    strcpy(keyboardconfig.BLEProfileName[keyboardconfig.BLEProfile], "unpaired");
    keyboardstate.save2flash = true;
    keyboardstate.needReset = true;
}

void checkforsave2flash()
{
  if (keyboardstate.save2flash)
  { 
    ADDCOMMAND(commandQueue, (KINT(8)) );
    keyboardstate.save2flash = false;
  }

}

void checkforformat()
{
  if (keyboardstate.needFSReset)
  {
    
    ADDCOMMAND(commandQueue, (KINT(10)) );
    keyboardstate.needReset = true;
  }
}

void checkforreboot()
{
    if (keyboardstate.needReset) 
        ADDCOMMAND(commandQueue, (KINT(12)) );

}
  


void updatebattery()
{
      batterymonitor.updateBattery(); 
      keyboardstate.batterytimer = keyboardstate.timestamp;
      keyboardstate.batt_type = batterymonitor.batt_type;
      keyboardstate.vbat_mv = batterymonitor.vbat_mv;
      keyboardstate.vbat_per = batterymonitor.vbat_per;
      keyboardstate.vbat_vdd = batterymonitor.vbat_vdd;
}

void updateleds()
{
    keyboardstate.statusledtimer = keyboardstate.timestamp;
    statusLEDs.update();
}


void addloopcommands(void)
{
    SETUPCOMMAND(commandList, (KINT(0)) , updateWDT());
    SETUPCOMMAND(commandList, (KINT(1)) , scanMatrix());
    SETUPCOMMAND(commandList, (KINT(2)) , sendKeyPresses() );
    SETUPCOMMAND(commandList, (KINT(3)) , bluemicro_hid.processQueues(CONNECTION_MODE_AUTO) );
    SETUPCOMMAND(commandList, (KINT(4)) , checkforsleep() );
    SETUPCOMMAND(commandList, (KINT(5)) , checkforunpair() );
    SETUPCOMMAND(commandList, (KINT(6)) , unpaircommand() );
    SETUPCOMMAND(commandList, (KINT(7)) , checkforsave2flash() );
    SETUPCOMMAND(commandList, (KINT(8)) , saveConfig() );
    SETUPCOMMAND(commandList, (KINT(9)) , checkforformat() );
    SETUPCOMMAND(commandList, (KINT(10)), InternalFS.format() );
    SETUPCOMMAND(commandList, (KINT(11)), checkforreboot() );
    SETUPCOMMAND(commandList, (KINT(12)), NVIC_SystemReset() );   // this reboots the keyboard.

    ADDCOMMAND(loopQueue, (KINT(0)) );

        ADDCOMMAND(loopQueue, (KINT(1)) );

        ADDCOMMAND(loopQueue, (KINT(2)) );   

    ADDCOMMAND(loopQueue, (KINT(3)) );

        ADDCOMMAND(loopQueue, (KINT(4)) ); 


    ADDCOMMAND(loopQueue, (KINT(5)) ); 
    ADDCOMMAND(loopQueue, (KINT(7)) ); 
    ADDCOMMAND(loopQueue, (KINT(9)) ); 
    ADDCOMMAND(loopQueue, (KINT(11)) ); 

    SETUPCOMMAND(commandList, (KINT(20)) , updatebattery() );
    SETUPCOMMAND(commandList, (KINT(21)) , updateleds() );

    ADDCOMMAND(loopQueue, (KINT(20)) );
    ADDCOMMAND(loopQueue, (KINT(21)) );

    SETUPCOMMAND(commandList, (KINT(254)), RUNCOMMANDS(commandQueue, commandList) );  // second to command is to run the command queue
    SETUPCOMMAND(commandList, (KINT(255)), commandQueue.clear());  // last command to run is to clear the command queue
    ADDCOMMAND(loopQueue, (KINT(254)) );
    ADDCOMMAND(loopQueue, (KINT(255)) ); 

}