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
        }
      } else if (user == User.REGISTERED) {
        return {
          login_email: process.env.REGISTRED_USER,
          login_password: process.env.REGISTRED_PASS
        }
      }
}

module.exports = {
    getUser,
};