var itemData = [
    {
        title: 'Ask a Free Question',
        url: '/questions'
    },
    {
        title: 'My Questions',
        url: '/myquestions'
    },
    {
        title: 'Favourite a Doctor',
        url: 'http://meteor.com'
    },
    {
        title: 'Chat With Doctor',
        url: 'http://themeteorbook.com'
    },
    {
        title: 'Prescriptions',
        url: 'http://themeteorbook.com'
    },
    {
        title: 'Lab Tests',
        url: 'http://themeteorbook.com'
    }

];
Template.dashboardList.helpers({
    items: itemData
});