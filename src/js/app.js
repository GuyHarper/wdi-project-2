const $addCommentButton = $('.add-comment-button');
const $commentInput = $('.comment-input');
let commentId = null;

$addCommentButton.on('click',(e) => {
  const arrayOfClasses = $(e.target).attr('class').split(' ');
  arrayOfClasses.forEach(function($class) {
    if($class.match(/entry-id-*/)) {
      commentId = $class;
      console.log(commentId);
    }
  });
  $(e.target).addClass('hidden');
  const $commentForm = $(`.comment-form.${commentId}`);
  $commentForm.removeClass('hidden');
  $commentInput.focus();
});

$commentInput.on('blur',() => {
  if($commentInput.val() === '') {
    const $commentForm = $(`.comment-form.${commentId}`);
    $commentForm.addClass('hidden');
    $addCommentButton.removeClass('hidden');
  }
});
