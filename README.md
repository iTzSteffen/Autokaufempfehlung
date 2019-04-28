Für die Ausführung und Nutzung des Chatbots und des Neuronales Netzes sind mehrere Vorinstallationen und Konfigurationen notwendig. 

Programme
- ngrok (Download unter: https://ngrok.com/download)
- ngrok verschlüsselt den Server der index.js-Datei. Dadurch erhält man eine über das Internet erreichbare “https”-Adresse. Dies ist für die Verbindung zu dem auf SAP Conversational AI (https://cai.tools.sap/) laufenden  Bot notwendig. Der localhost wird verschlüsselt und der POST-Webhook-Call kann durchgeführt werden. Diese Adresse muss in SAP Conversational AI unter Einstellungen -> Bot Builder -> Bot webhook base URL eingetragen werden, siehe folgende Abbildung “ngrok-Adresse”.

Nach der Installation wird der ngrok-Server auf Mac durch die Eingabe ./ngrok http 5000 gestartet, hierbei ist es wichtig, das sowohl der Localhost als auch ngrok auf dem selben Port gestartet werden. Hierbei ist zu beachten, dass die Adresse nach jedem Neustart wieder aktualisiert werden muss.

- node.js (Download unter: https://nodejs.org/en/download/)
- Um den node.js-Server starten zu können müssen zuvor in dem Hauptverzeichnis des Projekts folgende Installation durchgeführt werden:
- npm install express body-parser python-shell --save

Nach den Installationen wird wird der node.js-Server mit folgender Eingabe gestartet: 
node index.js
