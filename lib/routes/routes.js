Router.configure({
    layoutTemplate: 'layout'
});

//redirects user to login page if not logged in
var requireLogin = function(){
    if(!Meteor.user()){
        if(Meteor.loggingIn()){
            Router.go('home');
            this.next();
        } else{
            Router.go('login');
            this.next();
        }
    }else{
        this.next();
    }
}

Router.onBeforeAction(requireLogin, {
    except: ['register']
});

Router.map(function () {
    //Home Route
    this.route('dashboard',
        {path: '/',
        template:'dashboard'});

    // register path
    this.route('register');

    // login path
    this.route('login');

    //My Questions Route
    this.route('myquestions');

    //Consult a Doctor Route
    this.route('consult');

    //Health Condition Route
    this.route('condition');

    //User Uploaded Condition Route
    this.route('myimages');

    //Questions Route
    this.route('questions');

    //Comments Route
    this.route('comments');

    //Doctors List Route
    this.route('doctors');
});
