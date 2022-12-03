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
  const myArray = ['_mr_gender', '_mrs_gender'];
  return myArray[Math.floor(Math.random() * myArray.length)];
};

const randomProduct = () => {
  const myArray = [
    'galaxy', 
    'iphone', 
    'samsung', 
    'lg', 
    'Xiaomi',
    'playstation 5',
    'switch',
    'ps5',
    'pack office'
  ];
  return myArray[Math.floor(Math.random() * myArray.length)];
};

const randomNav = () => {
  const myArray = [
    'Tel-PDA_Telephones-mobiles', 
    'Maison_mobilier_tables-consoles', 
    'Hifi_appareils-photo',
    'Loisirs_activite-loisirs',
    'Electromenager_lave-linge',
    'Jeux-Video-et-Consoles_Consoles',
    'Jeux-Video-et-Consoles_Jeux-Video',
    'Informatique_Ordinateur-de-bureau',
    'Informatique_Ordinateur-portable'
  ];
  return myArray[Math.floor(Math.random() * myArray.length)];
};

const randomEvent = () => {
  const myArray = [
    'club-r-everywhere',
  ];
  return myArray[Math.floor(Math.random() * myArray.length)];
};

const randomBoutique = () => {
  const myArray = [
//    'boulanger',
    'AGAN_FR',
  ];
  return myArray[Math.floor(Math.random() * myArray.length)];
};

const dbbRandomMail = (id) => {
  return `${id}@gmail.com`;
};

const randomPartner = () => {
  const myArray = [
    'ouigo',
    'nike',
    'monoprix',
    'castorama',
    'conforama',
    'hm',
    'hotelscomfrance'
  ];
  return myArray[Math.floor(Math.random() * myArray.length)];
};

const registredUser = () => {
  return {
    email: "rakuten.quality@gmail.com",
    password: "Rakuten2020"
  };
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
    randomGender,
    randomEvent,
    randomBoutique,
    randomPartner,
    registredUser
};

module.exports = rakuten;
