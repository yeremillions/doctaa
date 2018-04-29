Template.queryList.helpers({
    queries: function () {
        var queries = Queries.find({}, {sort: {createdAt: -1}});
        return queries;
    }
});