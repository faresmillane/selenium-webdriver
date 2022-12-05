const faker = require('faker');
const rakuten_faker = require('./../resources/data/faker');
const { User } = require("./../resources/data/types");
const users = require('../resources/data/users.data');

const getUser = async (user) => {
    if (user == User.unknow) {
        const id = rakuten_faker.randomId();
        return {
          my_login_email: await rakuten_faker.randomMail(id),
          my_login_password: await rakuten_faker.randomPassword(),
        };
      } else if (user == User.new){
        const id = rakuten_faker.randomId();
        const email = await rakuten_faker.randomMail(id);
        return {
          my_signup_email: email,
          my_signup_email_confirm: email,
          my_signup_password: await rakuten_faker.registredUser().password,
          my_gender: await rakuten_faker.randomGender(),
          my_first_name: await faker.name.firstName(),
          my_last_name: await faker.name.lastName(),
          my_day_of_birth: faker.datatype.number({ min:1, max:30 }),
          my_month_of_birth: faker.datatype.number({ min:1, max:12 }),
          my_year_of_birth: faker.datatype.number({ min:1950, max:2004 }),
        }
      } else if (user == User.registered) {
        return {
          my_login_email: await rakuten_faker.registredUser().email,
          my_login_password: await rakuten_faker.registredUser().password
        }
      } else if (user.includes('connected')) {
        const subUser = user.replace('_connected', '')
        return {
          my_login_email: `rakuten.quality+${process.env.DRIVER}.${subUser}@gmail.com`,
          my_login_password: await rakuten_faker.registredUser().password,
          my_card_number: "4242424242424242",
          my_card_expiration_date: "1226",
          my_card_secret: "123"
        }
      } else if (user == User.otp) {
        return {
          my_login_email: users[process.env.DRIVER].otp.email,
          my_login_password: await rakuten_faker.registredUser().password,
        }
      }
}

const randomProduct = async () => {
    return rakuten_faker.randomProduct();
}


module.exports = {
    getUser,
    randomProduct,
};