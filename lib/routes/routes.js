Router.configure({
    layoutTemplate: 'layout'
});
// Redirect doctors to their own dashboard
var onBeforeActions = {
    isDoctor: function () {
        //If logged in
        if(Meteor.user()){
            //Check if doctor
            if(Meteor.user().roles == 'doctor'){
                Router.go('/doctorDashboard');
            }else {
                this.next();
            }
        }else {
            this.next();
        }
    }
}

//This redirect only applies when doctors go to dashboard
Router.onBeforeAction(onBeforeActions.isDoctor,{
    only: ['dashboard']
})

//Map Router Functions for different Pages
Router.map(function () {
    //Home Route
    this.route('dashboard', {path: '/'});

    //Doctors Dashboard Route
    this.route('doctorDashboard');

    //Login Route
    this.route('login');

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

    //Prescriptions Route
    this.route('prescriptions');

    //Tests Route
    this.route('tests');

    //Queries Route
    this.route('queries');

    //Comments Route
    this.route('comments');

    //Doctors List Route
    this.route('doctors');
});

Router.onBeforeAction(function () {
    if  (!Meteor.userId() && !Meteor.loggingIn()) {
        this.redirect('login');
        this.stop();
    } else {
        this.next();
    }
},{except: ['login', 'register'] });