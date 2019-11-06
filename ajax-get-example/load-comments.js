const serverURL = 'http://localhost:8080';

const showComments = function(comments) {
    let $commentsContainer = $('.post-comments__comments-container');

    for (let comment of comments) {
        let $comment = $('<li>');
        let $user = $('<h4>');
        let $message = $('<p>');

        $user.text(`${comment.user} says`);
        $message.text(comment.message);

        $comment
            .addClass('post-comments__comment')
            .append($user)
            .append($message);

        $commentsContainer.append($comment);
    }
    $('.post-comments__load-button').addClass('hide');
};

const handleCommentLoadErrors = function(jqXHR, textStatus, errorThrown) {
    $('.post-comments__errors')
        .addClass('has-errors')
        .append('<span>Error could not load comments</span>');
}

const $button = $('.post-comments__load-button');

$button.on('click', function() {
    $.ajax({
        method: 'GET',
        url: `${serverURL}/ajax-get-example/comments.json`
    })
    .done(showComments)
    .fail(handleCommentLoadErrors)

});

