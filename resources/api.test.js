const axios = require("axios").default;
require('dotenv').config();

const json = {
    "channel": "buyerapp",
    "buyerId": "119527492", 
    "itmSourceCode": "10",
    "advertId": "6066662470", 
    "buyerCountryId": "249"
    }
    
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

    const POST = async () => {
        try {
            const response = await axios({
                    method: 'post',
                    url: `${process.env.WS_URL}/buy-apps/cart/add`,
                    headers: { 'User-Agent': 'Axios - console app' },
                    params:{
                        'version': 2,
                        'channelType': 'BUYER_SMARTPHONE_APP',
                        'channel': 'buyerapp'
                    },
                    data: json
                }).then(response => {
                console.log(response.data);
            });
            return response;
        } catch (error) {
           console.log(error);
        };
    };

//GET();
POST();