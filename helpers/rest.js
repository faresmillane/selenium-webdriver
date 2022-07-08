const api = require('../resources/library/api');
const config = require(`../tests/api`);
let ws;

  const init = async (api) => {
    ws = config[api];
  };

  const get = async (url) => {
        await api.GET(url);
    }

  const post = async () => {
    const response = await api.POST(ws.route, ws.headers, ws.params, ws.body);
    return response;
  }

  module.exports = {
    get,
    post,
    init
};