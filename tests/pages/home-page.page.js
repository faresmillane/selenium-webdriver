module.exports = {
    urls: {
        home_page: '/',
    },
    locators: {
        home_page_header:[
            "ID=header",
            "SELECTOR=#header",
            "XPATH=//*[@id='header']"
        ],
        home_page_body:[
            "ID=jahiaContent",
            "SELECTOR=#jahiaContent",
            "XPATH=//*[@id='jahiaContent']"
        ],
        se_connecter:[
            "ID=",
            "SELECTOR=#header > div > div > header > div.mt2.mb2.z-10 > nav > div:nth-child(6) > a > span.navItemButton-module_label_ZAB.helper_hide-BelowDesktop.nowrap.truncate",
            "XPATH=//*[@id='header']/div/div/header/div[2]/nav/div[6]/a/span[2]"
        ],
        cookies_accept:[
            "ID='didomi-notice'",
            "XPATH=//*[@id='didomi-notice']/span/div/div[2]/div[1]/span"
        ],
        bad_credentials:[
            "ID=n_1651225008752",
            "SELECTOR=#n_1651225008752",
            "XPATH=//*[@id='n_1651225008752']"
        ]
    }
}