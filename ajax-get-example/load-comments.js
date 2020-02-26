const serverURL = 'http://localhost:8080';

const showComments = function(comments) {
    // the existing container on the page
    // where we will add the newly created <li>s
    let $commentsContainer = $('.post-comments__comments-container');

    for (let comment of comments) {
        let $comment = $('<li>');
        let $user = $('<h4>');
        let $message = $('<p>');

        $user.text(`${comment.user} says:`);
        $message.text(comment.message);

        $comment
            .addClass('post-comments__comment')
            .append($user)
            .append($message);

        $commentsContainer.append($comment);
    }
    $('.post-comments__load-comments').addClass('hide');
    $('.post-comments__success').text('Comments have been loaded.');
};

const handleLoadCommentsErrors = function(jqXHR, textStatus, errorThrown) {
    $('.post-comments__errors')
        .addClass('has-errors')
        .append('<span>Error: could not load comments</span>');
};

$('.post-comments__load-comments').on('click', function() {
    $.ajax({
        method: 'GET',
        url: `${serverURL}/comments.json`
    })
    .done(showComments)
    .fail(handleLoadCommentsErrors);
});
