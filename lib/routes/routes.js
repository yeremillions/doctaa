Router.configure({
    layoutTemplate: 'layout'
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

var mustBeSignedIn = function() {
    if (!(Meteor.user() || Meteor.loggingIn())) {
        Router.go('login');
    } else {
        this.next();
    }
};

var goToDashboard = function() {
    if (Meteor.user()) {
        Router.go('dashboard');
    } else {
        this.next();
    }
};

Router.onBeforeAction(mustBeSignedIn, {except: ['login', 'register']});
Router.onBeforeAction(goToDashboard, {only: ['dashboard']});