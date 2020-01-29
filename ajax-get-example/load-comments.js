
const showComments = function(comments) {
    let $commentsContainer = $('<ul>');

    $commentsContainer.addClass('post-comments__comments-container');

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

    $('.post-comments').append($commentsContainer);
    $('.post-comments__load-button').toggleClass('hide');
    $('.post-comments__hide-comments').toggleClass('hide');
    $('.post-comments__success').text('Comments have been loaded');
};

const handleCommentLoadErrors = function(jqXHR, textStatus, errorThrown) {
    $('.post-comments__errors')
        .addClass('has-errors')
        .append('<span>Error: could not load comments</span>');
};

$('.post-comments__load-button').on('click', function() {
    $.ajax({
        method: 'GET',
        url: 'http://localhost:8080/comments.json'
    })
    .done(showComments)
    .fail(handleCommentLoadErrors);
});

$('.post-comments__hide-comments').on('click', function() {
    let $this = $(this);
    let $commentsContainer = $('.post-comments__comments-container');

    if ($commentsContainer.is(':visible')) {
        $this.text('Show all comments');
        $commentsContainer.addClass('hide');
    } else {
        $this.text('Hide all comments');
        $commentsContainer.removeClass('hide');
    }

});






