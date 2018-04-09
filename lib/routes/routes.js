Router.configure({
    layoutTemplate: 'layout'
});

//redirects user to login page if not logged in
var requireLogin = function(){
    if(!Meteor.user()){
        if(Meteor.loggingIn()){
            Router.go('dashboard');
            this.next();
        } else{
            Router.go('login');
            this.next();
        }
    }else{
        this.next();
    }
}

//Exclude only register page from that rule
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
});

Router.route('/doctors', {
    name: 'doctors',
    waitOn: function() {
        return Meteor.subscribe('doctorUsers');
    },
    data: function() {
        return Meteor.users.find({});
    }
});