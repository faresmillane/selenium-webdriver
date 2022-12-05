const axios = require("axios").default;

const GET = async () => {
    try {
        const response = await axios({
                method: 'get',
                url: `${process.env.WS_URL}`,
                headers: { 'User-Agent': 'Axios - console app' }
            }).then(response => {
            console.log(response.status);
        });
        return response;
    } catch (error) {
        console.log(error);
    };
};

const POST = async (route, headers, params, body) => {
    try {
        const response = await axios({
                method: 'post',
                url: `${process.env.WS_URL}${route}`,
                headers: headers,
                params: params,
                data: body
            });
        return response;
    } catch (error) {
       console.log(error);
    };
};

module.exports = {
    GET,
    POST
};
