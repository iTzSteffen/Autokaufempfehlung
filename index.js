const express = require('express')
const bodyParser = require('body-parser')
const PythonShell = require('python-shell')

const app = express()
const port = 5000
app.use(bodyParser.json())

app.post('/create_car_prediction', (req, res) => {
  console.log(req.body)
  console.log("Geschlecht: " + req.body.conversation.memory.geschlecht.value)
  console.log("Alter: " + req.body.conversation.memory.alter.value)
  console.log("Beziehungsstatus: " + req.body.conversation.memory.beziehungsstatus.value)
  console.log("Kinder: " + req.body.conversation.memory.kinder.value)
  console.log("Bildungsstand: " + req.body.conversation.memory.bildungsstand.value)
  console.log("Beruf: " + req.body.conversation.memory.beruf.value)
  console.log("Hobby: " + req.body.conversation.memory.hobby.value)
  console.log("Grund: " + req.body.conversation.memory.grund.value)
  console.log("Jahreskilometer: " + req.body.conversation.memory.jahreskm.value)
  console.log("Budget: " + req.body.conversation.memory.budget.value)

  var obj = new Object();
  obj.geschlecht = req.body.conversation.memory.geschlecht.value;
  obj.alter = req.body.conversation.memory.alter.value;
  obj.beziehungsstatus = req.body.conversation.memory.beziehungsstatus.value;
  obj.hobby = req.body.conversation.memory.hobby.value;
  obj.budget = req.body.conversation.memory.budget.value;
  obj.beruf = req.body.conversation.memory.beruf.value;
  obj.grund = req.body.conversation.memory.grund.value;
  obj.jahreskm = req.body.conversation.memory.jahreskm.value;
  obj.bildungsstand = req.body.conversation.memory.bildungsstand.value;
  obj.kinder = req.body.conversation.memory.kinder.value;

  //Geschlecht
  switch (obj.geschlecht) {
    case 'männlich':
      obj.geschlecht = 0;
      break;
    case 'weiblich':
      obj.geschlecht = 1;
      break;
    default:}

  //Familie
  switch (obj.beziehungsstatus) {
    case 'single':
      obj.beziehungsstatus = 0;
      break;
    case 'verheiratet':
      obj.beziehungsstatus = 1;
      break;
    case 'geschieden':
      obj.beziehungsstatus = 2;
      break;
    case 'verwitwet':
      obj.beziehungsstatus = 3;
      break;
    default:}

  //Hobby
  switch (obj.hobby) {
    case 'fußball':
      obj.hobby = 0;
      break;
    case 'joggen':
      obj.hobby = 1;
      break;
    case 'downhill':
      obj.hobby = 2;
      break;
    case 'klavier spielen':
      obj.hobby = 3;
      break;
    case 'gitarre spielem':
      obj.hobby = 4;
      break;
    case 'freunde treffen':
      obj.hobby = 5;
      break;
    case 'alkohol':
      obj.hobby = 6;
      break;
    case 'kochen':
      obj.hobby = 7;
      break;
    case 'bilder machen':
      obj.hobby = 8;
      break;
    case 'fitness':
      obj.hobby = 9;
      break;
    case 'jagen':
      obj.hobby = 10;
      break;
    case 'reisen':
      obj.hobby = 11;
      break;
    case 'schreiben':
      obj.hobby = 12;
      break;
    case 'essen':
      obj.hobby = 13;
      break;
    case 'filme schauen':
      obj.hobby = 14;
      break;
    case 'wandern':
      obj.hobby = 15;
      break;
    case 'kreuzworträtsel':
      obj.hobby = 16;
      break;
    case 'shoppen':
      obj.hobby = 17;
      break;
    case 'netflix chill':
      obj.hobby = 18;
      break;
    case 'zeichnen':
      obj.hobby = 19;
      break;
    case 'fahrrad':
      obj.hobby = 20;
      break;
    case 'programmieren':
      obj.hobby = 21;
      break;
    case 'klettern':
      obj.hobby = 22;
      break;
    case 'singen':
      obj.hobby = 23;
      break;
    case 'tanzen':
      obj.hobby = 24;
      break;
    case 'musik':
      obj.hobby = 25;
      break;
    case 'lesen':
      obj.hobby = 26;
      break;
    case 'tennis':
      obj.hobby = 27;
      break;
    case 'schach':
      obj.hobby = 28;
      break;
    case 'handball':
      obj.hobby = 29;
      break;
    default:}

  //Grund
  switch (obj.grund) {
    case 'pendeln':
      obj.grund = 0;
      break;
    case 'lebenshaltung':
      obj.grund = 1;
      break;
    case 'freizeit':
      obj.grund = 2;
      break;
    default:""}

  //Bildungsstand
  switch (obj.bildungsstand) {
    case 'hauptschule':
      obj.bildungsstand = 0;
      break;
    case 'realschule':
      obj.bildungsstand = 1;
      break;
    case 'abitur':
      obj.bildungsstand = 2;
      break;
    case 'bachelor':
      obj.bildungsstand = 3;
      break;
    case 'master':
      obj.bildungsstand = 4;
      break;
    case 'doktor':
      obj.bildungsstand = 5;
      break;
    default:""}

  //Beruf
  switch (obj.beruf) {
    case 'student':
      obj.beruf = 0;
      break;
    case 'altenpfleger':
      obj.beruf = 1;
      break;
    case 'bankkaufmann':
      obj.beruf = 2;
      break;
    case 'steuerberater':
      obj.beruf = 3;
      break;
    case 'hausmeister':
      obj.beruf = 4;
      break;
    case 'kfz-mechaniker':
      obj.beruf = 5;
      break;
    case 'arzthelfer':
      obj.beruf = 6;
      break;
    case 'pilot':
      obj.beruf = 7;
      break;
    case 'friseur':
      obj.beruf = 8;
      break;
    case 'spezialarbeiter':
      obj.beruf = 9;
      break;
    case 'rentner':
      obj.beruf = 10;
      break;
    case 'ingenieur':
      obj.beruf = 11;
      break;
    case 'betriebswirt':
      obj.beruf = 12;
      break;
    case 'sekretär':
      obj.beruf = 13;
      break;
    case 'fahrlehrer':
      obj.beruf = 14;
      break;
    case 'versicherungskaufmann':
      obj.beruf = 15;
      break;
    case 'buchhalter':
      obj.beruf = 16;
      break;
    case 'notar':
      obj.beruf = 17;
      break;
    case 'speditionskaufmann':
      obj.beruf = 18;
      break;
    case 'programmierer':
      obj.beruf = 19;
      break;
    case 'architekt':
      obj.beruf = 20;
      break;
    case 'einzelhandelskaufmann':
      obj.beruf = 21;
      break;
    case 'elektroinstallateur':
      obj.beruf = 22;
      break;
    case 'lehrer':
      obj.beruf = 23;
      break;
    case 'kassierer':
      obj.beruf = 24;
      break;
    case 'krankenschwester':
      obj.beruf = 25;
      break;
    case 'hotelfachmann':
      obj.beruf = 26;
      break;
    case 'bäcker':
      obj.beruf = 27;
      break;
    case 'unternehmensberater':
      obj.beruf = 28;
      break;
    case 'koch':
      obj.beruf = 29;
      break;
    case 'personalsachbearbeiter':
      obj.beruf = 30;
      break;
    case 'rechtsanwalt':
      obj.beruf = 31;
      break;
    case 'mediengestalter':
      obj.beruf = 32;
      break;
    case 'psychologe':
      obj.beruf = 33;
      break;
    case 'industriekaufmann':
      obj.beruf = 34;
      break;
    case 'elektroniker':
      obj.beruf = 35;
      break;
    case 'key account manager':
      obj.beruf = 36;
      break;
    case 'großhandelskaufmann':
      obj.beruf = 37;
      break;
    case 'kellner':
      obj.beruf = 38;
      break;
    case 'controller':
      obj.beruf = 39;
      break;
    case 'bürokaufmann':
      obj.beruf = 40;
      break;
    case 'informatiker':
      obj.beruf = 41;
      break;
    case 'systemadministrator':
      obj.beruf = 42;
      break;
    case 'gas und wasserinstallateur':
      obj.beruf = 43;
      break;
    case 'schmied':
      obj.beruf = 44;
      break;
    case 'arzt':
      obj.beruf = 45;
      break;
    case 'lackierer':
      obj.beruf = 46;
      break;
    case 'lagearbeiter':
      obj.beruf = 47;
      break;
    case 'grafikdesigner':
      obj.beruf = 48;
      break;
    default:""}


  var jsonString = JSON.stringify(obj);

  console.log(obj);

  const fs = require('fs')

  fs.writeFile('data/userinput.json', jsonString, (err) => {
    if (err) {
      console.error(err)
      return
    }
    //file written successfully
  })

  var request = require('request');
  var responseLars;

//Http Call POST - ich schick was hin
  request.post(
      'http://localhost:8080/',
      { json: {
          geschlecht: obj.geschlecht,
          alter: obj.alter,
       } },
      function (error, response, body) {
          if (!error && response.statusCode == 200) {
              console.log(body);
              responseLars = body;
              res.send({
                replies: [{
                  type: 'text',
                  content: responseLars,
                }],
                conversation: {
                  memory: { key: 'value' }
                }
              })
          }
      }
  );


})

//app.get('/', (req, res) => res.send('Hello world!'))

app.post('/errors', (req, res) => {
  console.log(req.body)
  res.send()
})

app.listen(port, () => {
  console.log('Server is running on port 5000')
})
