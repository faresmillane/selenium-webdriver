const api = require('../resources/library/api');

  const get = async (url) => {
        await api.GET(url);
    }

  const post = async () => {
    await api.POST(url, data);
  }

  module.exports = {
    get,
    post
};