const validateEmail = function(email){
    const regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return regex.test(email);
}

Template.register.events({
    'submit .form-register': function(event) {
        const username = (event.target.username.value);
        const email = (event.target.email.value);
        const password = (event.target.password.value);
        const password2 = (event.target.password2.value);

        const valid = validateEmail(email);
        if (valid) {
            if (password === password2) {
                Accounts.createUser({username: username, email: email, password: password}, (error) => {
                    if (error) {
                        console.log(error);
                    } else {
                        Meteor.call('addUserRole', (error) => {
                            if (error) {
                                console.log(error);
                            } else {
                                Router.go('/');
                            }
                        });
                    }
                });
            }
        } else {
            console.log('email wrong');
        }
    }
});
