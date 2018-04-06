Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function () {
    //Home Route
    this.route('home', {path: '/'});

    //Login Route
    this.route('login');

    //Dashboard
    this.route('dashboard');

    //My Questions Route
    this.route('myquestions');

    //Consult a Doctor Route
    this.route('consult');

    //Health Condition Route
    this.route('condition');

    //User Uploaded Condition Route
    this.route('myimages');

    //Register and account registration
    this.route('register');

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
Router.onBeforeAction(goToDashboard, {only: ['home']});