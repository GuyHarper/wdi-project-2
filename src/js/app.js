const $commentInput = $('.comment-input');
let commentId = null;

$commentInput.on('focus',() => {

  const arrayOfClasses = $commentInput.attr('class').split(' ');
  arrayOfClasses.forEach(function(element) {
    if(element.match(/comment-id-*/)) {
      commentId = element;
    }
  });
  const $commentButton = $(`.comment-button.${commentId}`);
  $commentButton.removeClass('hidden');
});

$commentInput.on('blur',() => {
  if($commentInput.val() === '') {
    const $commentButton = $(`.comment-button.${commentId}`);
    $commentButton.addClass('hidden');
  }
});
