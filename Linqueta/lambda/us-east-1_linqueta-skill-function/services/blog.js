
const axios = require('axios');
const parseStringPromise = require('xml2js').parseStringPromise;

const feed = async () => {
  return axios
    .get('https://linqueta.com/feed.xml')
    .then((response) => parseStringPromise(response.data))
    .then((data) => data.rss)
}

const last = async () => {
  const data = await feed();
  return data.channel[0].item[0];
}

module.exports = {
  feed,
  last
}