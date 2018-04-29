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
        url: '/doctors'
    },
    {
        title: 'Chat With Doctor',
        url: '/consult'
    },
    {
        title: 'Prescriptions',
        url: '/prescriptions'
    },
    {
        title: 'Lab Tests',
        url: '/tests'
    }

];
Template.dashboardList.helpers({
    items: itemData
});