
Meteor.methods({

    setFavourite: function (userId) {
        var query = {};

        query[ alreadyFavourited(userId) ? '$pull' : '$push' ] = {
            'profile.favouriteDoctors': userId
        }; //check to see if doctor is already in favourite list. if doctor is, we remove doctor; if it isn't, add doctor

        Meteor.users.update(this.userId, query); //we save current changes to the collection
    },

    createConsultation: function(identity, doctorId) {
        //Set identity rules. If Identity is 'd', the other participant must be a patient. Chat cannot be valide with patient and patient or doctor with doctor
        //var otherIdentity = (identity === 'd') ? 'p' : 'd';

        var otherIdentity = 'd';

        var consultation = {
            presence: ''
        };

        consultation[identity] = this.userId;
        consultation[otherIdentity] = doctorId;

        consultation.needsConfirmation = doctorId;

        Consultations.insert(consultation, function (err, id) {
            if (err) throw err;

        Conversations.insert({
            consult: id,
            users: [this.userId, doctorId],
            message: [{
                name: 'DocApp',
                text: 'Consultation Initiated ' + (new Date).toString()
            }]
        });
    }.bind(this));
    }
});

Meteor.users.after.insert(function (userId, doc) {
    Roles.addUsersToRoles(doc._id, ['patient']);
});

