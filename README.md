# IOT-ESP32-project

This is an IOT project of wifi control of different type of components (LEDs, fans etc) throught an ESP32 board  with local server on computer.

Wifi communication protocol between an ESP32 and a local server.

Command of 4 LEDs states through botons on an HTML file.

Hardware:

    Computer
    ESP connected to electrical network
    4 LEDS connected to pins 17,18,19,21 (check "include.h" in server folder for changes)

Architecture of the server:

    Backend server: index.js (the one to run in your terminal)
    Frontend: script.js
    UI: index.html
    Real time request framework: Jquery

Architecture of ESP32 program:

    time sample of GET request execution: 500 ms

-To run the server: Install Node previously, run the server in the right folder with "node index" command and then go to http://localhost:3000.

-To run the ESP program: Install previously the ESP32 firmware in Arduino IDE and select "ESP dev module" board, and the right port the ESP32 is connected to, then just run it on the board.

Quick changes to make the code adaptable: change the IP address the ESP is connecting to because it depends on the Wifi your connected to (may be a phone or a rooter etc), you will find it in the header file called "wifi.h".
