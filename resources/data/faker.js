const faker = require('faker');

const randomPin = (len) => {
  let charSet = '123456789';
  let randomPin = '';
  for (let i = 0; i < len; i++) {
      let random = Math.floor(Math.random() * charSet.length);
      randomPin += charSet.substring(random,random+1);
  }
  return randomPin;
};

const randomMail = (id) => `rakuten.quality+${id}@gmail.com`;

const randomBirthDate = () => {
  let start = new Date(1950, 0, 1);
  let end = new Date();
  let d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
  return [year, month, day].join('-');
};

const randomPassword = () => `${faker.lorem.word()}.@A${faker.datatype.number()}`;

const randomId = () => faker.datatype.uuid();

const randomGender = () => {
  const myArray = ['mr_gender', 'mrs_gender'];
  return myArray[Math.floor(Math.random() * myArray.length)];
};

const randomProduct = () => {
  const myArray = ['galaxy', 'iphone', 'samsung', 'lg', 'Xiomi'];
  return myArray[Math.floor(Math.random() * myArray.length)];
};

const randomNav = () => {
  const myArray = ['Tel-PDA_Telephones-mobiles', 'Maison_mobilier_tables-consoles', 'Hifi_appareils-photo'];
  return myArray[Math.floor(Math.random() * myArray.length)];
};

const dbbRandomMail = (id) => {
  return `${id}@gmail.com`;
};

const rakuten = {
    randomPin,
    randomMail,
    randomBirthDate,
    randomPassword,
    randomId,
    randomProduct,
    dbbRandomMail,
    randomNav,
    randomGender
};

module.exports = rakuten;
