module.exports = {
    cart_page:[
        "CLASS=cart-blocks",
    ],
    cart_page_header:[
        "CLASS=global-module_bg-white_1MG global-module_z-999_3np global-module_relative_2Gv global-module_bb_h6i global-module_b--moon-gray_251",
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
        "CLASS=cart-summary_validation button_v2 buttonPrimary spacerBottomXs spacerTopXs",
    ],
    livraison_adress:[
        "ID=user_adress1",
        "NAME=adress1",
        "CLASS=ui-input-text ui-body-c",
    ],
    livraison_code:[
        "ID=user_cp",
        "NAME=zipCode",
        "CLASS=ui-input-text ui-body-c",
    ],
    livraison_ville:[
        "ID=user_city",
        "NAME=city",
        "CLASS=ui-input-text ui-body-c",
    ],
    livraison_phone_number:[
        "ID=user_fixe",
        "NAME=phone",
        "CLASS=ui-input-text ui-body-c",
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
        "ID=checkout_submit_btn"
    ],
    success_payment:[
        "CLASS=button expanded",
        "ID=sandbox-token-test-valid"
    ]
}