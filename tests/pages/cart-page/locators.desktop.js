module.exports = {
    cart_page:[
        "ID=cart_notification_container",
        "SELECTOR=#cart_notification_container",
        "//*[@id='cart_notification_container']"
    ],
    cart_page_header:[
        "CLASS=global-module_bg-white_1MG global-module_z-999_3np global-module_relative_2Gv global-module_bb_h6i global-module_b--moon-gray_251",
    ],
    cart_right_panel:[
        "id=panel_right",
    ],
    choisir_mode_livraison:[
        "CLASS=button_v2 buttonPrimary",
        "XPATH=//*[@id='cart-snackbar']/a",
        "SELECTOR=#cart-snackbar > a"
    ],
    chrono_poste_livraison:[
        "CLASS=ui-icon ui-icon-radio-off ui-icon-shadow",
        "LEVEL=0",
        "XPATH=//*[@id='content']/section/form/div[1]/div/div[3]/div/label/span/span[1]/div",
        "SELECTOR=#content > section > form > div.cart-blocks > div > div:nth-child(3) > div > label > span > span.ui-btn-text > div"
    ],
    passer_etape_suivante:[
        "CLASS=button_v2 buttonPrimary width_100 spacerTopS hasTooltipPop",
    ],
    livraison_adress:[
        "ID=address1",
        "NAME=address1",
        "CLASS=labelText",
    ],
    livraison_code:[
        "ID=zip",
        "NAME=zip",
        "CLASS=inputText",
    ],
    livraison_ville:[
        "ID=city",
        "NAME=city",
        "CLASS=inputText",
    ],
    livraison_phone_number:[
        "ID=phone_2",
        "NAME=phone_2",
        "CLASS=inputText",
    ],
    passer_au_payment:[
        "CLASS=button_v2 buttonPrimary"
    ],
    card_number:[
        "XPATH=//div[@data-processout-input='cc-number']//iframe",
    ],
    card_expiration_date:[
        "XPATH=//div[@data-processout-input='cc-exp']//iframe",
    ],
    card_secret:[
        "XPATH=//div[@data-processout-input='cc-cvc']//iframe",
    ],
    processout:[
        "CLASS=ui-icon ui-icon-radio-off ui-icon-shadow",
        "LEVEL=0"
    ],
    valider_payment:[
        "CLASS=button_v2 buttonPrimary submit_btn loaderButton",
        "ID=checkout_submit_btn"
    ],
    success_payment:[
        "CLASS=button expanded",
        "ID=sandbox-token-test-valid"
    ]
}