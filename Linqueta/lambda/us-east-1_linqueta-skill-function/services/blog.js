
const axios = require('axios');
const parseStringPromise = require('xml2js').parseStringPromise;

const feed = async () => {
  return axios
    .get('https://linqueta.com/feed.xml')
    .then((response) => parseStringPromise(response.data))
    .then((data) => data)
}

module.exports = {
  feed
}