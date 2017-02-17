import * as google from 'googleapis'

const auth = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, 'http://localhost')
auth.setCredentials({
  access_token: process.env.ACCESS_TOKEN,
  refresh_token: process.env.REFRESH_TOKEN,
  token_type: 'Bearer',
  expiry_date: 1485178226618
})

const spreadsheets = google.sheets({version: 'v4', auth }).spreadsheets

console.log('so some work...')

