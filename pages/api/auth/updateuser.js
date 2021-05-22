let axios = require("axios").default;

let getTokenOptions = {
  method: 'POST',
  url: 'https://leonfyp.eu.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  data: {
    grant_type: 'client_credentials',
    client_id: process.env.AUTH0_CLIENT_ID,
    client_secret: process.env.AUTH0_CLIENT_SECRET,
    audience: 'https://leonfyp.eu.auth0.com/api/v2/'
  }
};



export default async function updateUser(req, res) {
  if (req.method !== 'POST') {
    res.status(400).send({ message: 'Only POST requests allowed' })
    return
  }
  axios.request(getTokenOptions).then(function (response) {

    axios.request({
      method: 'PATCH',
      url: 'https://leonfyp.eu.auth0.com/api/v2/users/' + req.body.id
      ,
      headers: {
        'content-type': "application/json",
        'Authorization': 'Bearer ' + response.data.access_token
      },
      data: { app_metadata: { commerceID: req.body.commerceID } }
    }).then(function (response) {
      console.log(response.data);
      res.send(response.data);
    }).catch(function (error) {
      console.error(error);
      res.status(error.status || 500).end(error.message);
    });
  }).catch(function (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  });

}