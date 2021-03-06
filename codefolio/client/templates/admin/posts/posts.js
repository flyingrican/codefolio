Template.add_post.events({
    'submit .add_post_form': function(event){
        event.preventDefault();
        var title = event.target.title.value;
        var body = event.target.body.value;

        //Insert Posts
        Posts.insert({
            title: title,
            body: body
        });

        FlashMessages.sendSuccess("Post Added!");
        Router.go('/admin/posts');
    }
});

Template.edit_post.events({
    'submit .edit_post_form': function(event){
        event.preventDefault();
        var title = event.target.title.value;
        var body = event.target.body.value;

        //Update Post
        Posts.update({
            _id: this._id
        },{
            $set: {
                title: title,
                body: body
            }
        });

        FlashMessages.sendSuccess("Post Updated!");
        Router.go('/admin/posts');
    }
});

Template.list_posts.events({
    'click .delete_post': function(event){
        if(confirm("Are you sure?")){
            Posts.remove(this._id);
            FlashMessages.sendSuccess("Post Deleted!");
        }
    }
});
