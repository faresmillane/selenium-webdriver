module.exports = {
    urls: {
        login_page: '/connect?action=login&c=80',
    },
    locators: {
        login_page:[
            "ID=location",
            "SELECTOR=#location",
            "XPATH=//*[@id='location']"
        ],
        login_email:[
            "ID=auth_user_identifier",
            "SELECTOR=#auth_user_identifier",
            "XPATH=//*[@id='auth_user_identifier']"
        ],
        login_password:[
            "ID=userpassword",
            "SELECTOR=#userpassword",
            "XPATH=//*[@id='userpassword']"
        ],
        me_connecter:[
            "ID=sbtn_login",
            "SELECTOR=#sbtn_login",
            "XPATH=//*[@id='sbtn_login']"
        ],
        continuer:[
            "ID=sbtn_register",
            "SELECTOR=#sbtn_register",
            "XPATH=//*[@id='sbtn_register']"
        ],
        signup_email:[
            "ID=e_mail",
            "SELECTOR=#e_mail",
            "XPATH=//*[@id='e_mail']"
        ],
        signup_email_confirm:[
            "ID=e_mail2",
            "SELECTOR=#e_mail2",
            "XPATH=//*[@id='e_mail2']"
        ],
        signup_password:[
            "ID=password",
            "SELECTOR=#password",
            "XPATH=//*[@id='password']"
        ],
        mrs_gender:[
            "radio_1",
        ],
        mr_gender:[
            "radio_2",
        ],
        first_name:[
            "ID=first_name",
            "SELECTOR=#first_name",
            "XPATH=//*[@id='first_name']"
        ],
        last_name:[
            "ID=last_name",
            "SELECTOR=#last_name",
            "XPATH=//*[@id='last_name']"
        ],
        day_of_birth:[
            "ID=birth_day",
            "SELECTOR=#birth_day",
            "XPATH=//*[@id='birth_day']"
        ],
        month_of_birth:[
            "ID=birth_month",
            "SELECTOR=#birth_month",
            "XPATH=//*[@id='birth_month']"
        ],
        year_of_birth:[
            "ID=birth_year",
            "SELECTOR=#birth_year",
            "XPATH=//*[@id='birth_year']"
        ],
        creer_compte:[
            "submit_btn2"
        ],
    }
}