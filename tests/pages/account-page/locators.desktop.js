module.exports = {
    mon_compte:[
        "ID=my_account_nav",
        "SELECTOR=#my_account_nav",
        "//*[@id='my_account_nav']"
    ],
    account_page_header:[
        "ID=header",
        "SELECTOR=#header",
        "XPATH=//*[@id='header']"
    ],
    stock_number: [
        "NAME=quantite",
        "SELECTOR=#submit_ng > form > div > table:nth-child(1) > tbody > tr:nth-child(16) > td:nth-child(2) > input[type=text]",
        "XPATH=//*[@id='submit_ng']/form/div/table[1]/tbody/tr[15]/td[2]/input"
    ],
    registrer_les_modifications:[
        "ID=submitbtn",
        "SELECTOR=#submitbtn",
        "XPATH=//*[@id='submitbtn']"
    ]
}