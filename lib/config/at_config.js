//////////////////////////////////
// AccountsTemplates configuration
//////////////////////////////////

//Fields
AccountsTemplates.addField({
    _id: 'username',
    type: 'text',
    displayName: 'username',
    required: true,
    minLength: 3,
    errStr: 'error.minChar'
});

AccountsTemplates.removeField('email');
AccountsTemplates.addField({
    _id: 'email',
    type: 'email',
    required: true,
    re: /.+@so(.+){2,}\.(.+){2,}/,
    errStr: 'Must be a Sols email address',
    trim: true,
    lowercase: true
});

AccountsTemplates.removeField('password');
AccountsTemplates.addField({
    _id: 'password',
    type: 'password',
    required: true,
    minLength: 6,
    errStr: 'error.minChar'
});

/*
 AccountsTemplates.addField({
 _id: 'username_and_email',
 type: 'text',
 displayName: 'Name or Email',
 placeholder: 'name or email',
 });
 */


//Routes
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp', {
  path: '/register'
});
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
//AccountsTemplates.configureRoute('changePwd');
//AccountsTemplates.configureRoute('enrollAccount');
//AccountsTemplates.configureRoute('verifyEmail');


// Options
AccountsTemplates.configure({
    enablePasswordChange: false,
    showForgotPasswordLink: true,
    confirmPassword: true,
    overrideLoginErrors: true,

    negativeFeedback: false,
    positiveFeedback: false,
    negativeValidation: true,
    positiveValidation: true,

    texts: {
        title: {
            signUp: "JOIN US WE ARE SO EXCITED"
        },
        signInLink_pre: "Please be aware that only Sols email addresses are accepted! If you already have an acccount"
    }
});

// hack to get signOut route not considered among previous paths
if (Meteor.isClient) {
    Meteor.startup(function(){
        AccountsTemplates.knownRoutes.push('/sign-out');
    });
}
