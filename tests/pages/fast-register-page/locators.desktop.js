module.exports = {
    fast_register_page:[
        "SELECTOR=#jahiaContent > div.Header-club-BG.bg-pan-right.w-100.flex.justify-center > div > div > div",
        "CLASS=Header-club-content h-100",
        "ID=fast-register-form-container",
    ],
    fast_page_header:[
        "ID=header",
        "SELECTOR=#header",
        "XPATH=//*[@id='header']"
    ],
    inscription:[
        "XPATH=//*[@id='jahiaContent']/div[2]/div/div/div/div[3]/div/a[1]/p",
        "CLASS=Club-header-cta Inscription f14 pointer db tc center pv0-ns ",
    ],
    connexion:[
        "XPATH=//*[@id='jahiaContent']/div[2]/div/div/div/div[3]/div/a[2]/p",
        "CLASS=Club-header-cta Connexion f14 pointer db tc center pv0-ns",
    ],
    signup_email:[
        "NAME=email",
        "SELECTOR=#fast-register-form-container > div > div.style_scrollable_container_icU.utils_p_16_1S5 > div > div > div > form > div > div > div > input",
        "XPATH=//*[@id='fast-register-form-container']/div/div[2]/div/div/div/form/div/div/div/input"
    ],
    continuer:[
        "CLASS=Button_rkt__btn_n-J Button_red-o_37t utils_full_width_3gi",
        "SELECTOR=#fast-register-form-container > div > div.style_scrollable_container_icU.utils_p_16_1S5 > div > div > div > form > button",
        "XPATH=//*[@id='fast-register-form-container']/div/div[2]/div/div/div/form/button"
    ],
    signup_password:[
        "NAME=password",
        "SELECTOR=#fast-register-form-container > div > div.style_scrollable_container_icU.utils_p_16_1S5 > div > div.style_form_sub_container_X6o > div > form > div.forms_group_2lP.utils_align_left_3Tz.utils_full_width_3gi > div > div > div > div > input",
        "XPATH=//*[@id='fast-register-form-container']/div/div[2]/div/div[1]/div/form/div[1]/div/div/div/div/input"
    ],
    sinscrire:[
        "CLASS=Button_rkt__btn_n-J Button_red_3z8 utils_full_width_3gi",
        "SELECTOR=#fast-register-form-container > div > div.style_scrollable_container_icU.utils_p_16_1S5 > div > div.style_form_sub_container_X6o > div > form > button",
        "XPATH=//*[@id='fast-register-form-container']/div/div[2]/div/div[1]/div/form/button"
    ],
    club_r_popin:[
        "CLASS=style_fastRegisterContainer_1ft",
        "SELECTOR=#clubRWelcomePopin > div > div > div > div.style_body_aSw > div",
        "XPATH=//*[@id='clubRWelcomePopin']/div/div/div/div[2]/div"
    ],
    login_email:[
        "ID=e_mail",
        "SELECTOR=#e_mail",
        "XPATH=//*[@id='e_mail']"
    ],
    login_password:[
        "ID=password",
        "SELECTOR=#password",
        "XPATH=//*[@id='password']"
    ],
    bad_credentials:[
        "ID=leadCol",
        "SELECTOR=#leadCol",
        "XPATH=//*[@id='leadCol']"
    ],
}