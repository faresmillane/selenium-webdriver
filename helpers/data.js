const faker = require('faker');
const rakuten_faker = require('./../resources/data/faker');
const { User } = require("./../resources/data/types");

const getUser = async (user) => {
    if (user == User.UNKNOW) {
        const id = rakuten_faker.randomId();
        return {
          login_email: await rakuten_faker.randomMail(id),
          login_password: await rakuten_faker.randomPassword(),
        };
      } else if (user == User.NEW){
        const id = rakuten_faker.randomId();
        const email = await rakuten_faker.randomMail(id);
        return {
          signup_email: email,
          signup_email_confirm: email,
          signup_password: "Rakuten2020",
          gender: await rakuten_faker.randomGender(),
          first_name: await faker.name.firstName(),
          last_name: await faker.name.lastName(),
          day_of_birth: faker.datatype.number({ min:1, max:30 }),
          month_of_birth: faker.datatype.number({ min:1, max:12 }),
          year_of_birth: faker.datatype.number({ min:1950, max:2004 }),
          livraison_adress: '05 rue des champs',
          livraison_code: 78260,
          livraison_ville: 'BEJAIA',
          livraison_phone_number: '0658230122',
          card_number: "4242424242424242",
          card_expiration_date: "1226",
          card_secret: "123"
        }
      } else if (user == User.REGISTERED) {
        return {
          login_email: process.env.REGISTRED_USER,
          login_password: process.env.REGISTRED_PASS,
          card_number: "4242424242424242",
          card_expiration_date: "1226",
          card_secret: "123"
        }
      } else if (user == User.SELLER) {
        return {
          login_email: 'Boulanger',
          login_password: process.env.REGISTRED_PASS,
          stock_number: '99999'
        }
      }
}

module.exports = {
    getUser,
};