const axios = require("axios").default;

const GET = async (BASE_URL) => {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}`,
                headers: {},
                responseType: "stream"
            });
            console.log(response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    };

const POST = async (BASE_URL, data) => {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}`,
                headers: {},
                data: data
            });
            console.log(response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
};

module.exports = {
    GET,
    POST
};
