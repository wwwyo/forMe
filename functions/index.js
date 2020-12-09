const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

const sendResponse = (response, statusCode, body) => {
  response.send({
    statusCode,
    body: JSON.stringify(body)
  })
}

exports.addDataset = functions.https.onRequest(async (req, res) => {
  const dataset = req.body
  for (const key of Object.keys(dataset)) {
    const data = dataset[key]
    await db.collection('genres').doc(key).set(data)
  }
  sendResponse(res, 200, {message: 'Successfully added dataset!'})
  
})