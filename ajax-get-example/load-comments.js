const serverURL = 'http://localhost:8080'

const showComments = function(comments) {
    let $commentsContainer = $('.post-comments__comments-container');

    // build the <li> for each comment
    // and append it to the $commentsContainer
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

    $('.post-comments__success').text('Comments have been loaded.');
    $('.post-comments__load').addClass('hide');

}

const handleCommentLoadErrors = function() {
    $('.post-comments__errors')
        .addClass('has-errors')
        .html('<span>Error: could not load comments</span>');
}

const $button = $('.post-comments__load-button');

$button.on('click', function() {
    $.ajax({
        method: 'GET',
        url: `${serverURL}/comments.json`
    })
    .done(showComments)
    .fail(handleCommentLoadErrors)
});

