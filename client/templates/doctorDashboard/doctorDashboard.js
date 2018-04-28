var doctorItemData = [
    {
        title: 'Answer Questions',
        url: '/questions'
    },
    {
        title: 'Chats',
        url: '/myquestions'
    },
    {
        title: 'Request a Test',
        url: 'http://themeteorbook.com'
    },
    {
        title: 'Make a Prescription',
        url: 'http://themeteorbook.com'
    },
    {
        title: 'Update Profile',
        url: 'http://themeteorbook.com'
    }

];
Template.doctorDashboardList.helpers({
    doctorItems: doctorItemData
});