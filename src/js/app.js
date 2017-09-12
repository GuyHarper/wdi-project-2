const $addCommentButton = $('.add-comment-button');
const $commentInput = $('.comment-input');
const $input = $('.input');
const $addEntryButton = $('.add-entry-button');
const $newEntryInput = $('#new-entry');
const $entryCheckbox = $(':checkbox');
const $listNameInput = $('.list-name-input');
const $listNameForm = $('.list-name-form');
const $checkboxDiv = $('.checkbox-div');

let entryId = null;
let inputContents = null;

$checkboxDiv.on('click',(e) => {
  const arrayOfClasses = $(e.target).attr('class').split(' ');
  const $parent = $(e.target).parent();
  $(e.target).remove();
  $parent.html('<i class="fa fa-check-square-o" aria-hidden="true"></i>');
  arrayOfClasses.forEach(function($class) {
    if($class.match(/entry-id-*/)) {
      entryId = $class;
    }
    console.log(entryId);
    const $entryForm = $(`.entry-active-update-form.${entryId}`);
    $entryForm.submit();
  });
});

$listNameInput.on('focus',(e) => {
  inputContents = $(e.target).val();
});

$listNameInput.on('blur',(e) => {
  if(inputContents !== $(e.target).val() || !$(e.target).val()) {
    if(!$(e.target).val()) {
      $(e.target).val('My list');
    }
    $listNameForm.submit();
  }
});

$entryCheckbox.change((e) => {
  const arrayOfClasses = $(e.target).attr('class').split(' ');
  arrayOfClasses.forEach(function($class) {
    if($class.match(/entry-id-*/)) {
      entryId = $class;
    }
    const $entryForm = $(`.entry-update-form.${entryId}`);
    $entryForm.submit();
  });
});

$newEntryInput.on('focus',() => {
  $addEntryButton.removeClass('hidden');
});

$newEntryInput.on('blur',() => {
  if($newEntryInput.val() === '') {
    $addEntryButton.addClass('hidden');
  }
});

$input.on('focus',(e) => {
  inputContents = $(e.target).val();
});

$input.on('blur',(e) => {
  if($(e.target).val() !== '' && inputContents !== $(e.target).val()) {
    const arrayOfClasses = $(e.target).attr('class').split(' ');
    arrayOfClasses.forEach(function($class) {
      if($class.match(/entry-id-*/)) {
        entryId = $class;
      }
      const $entryForm = $(`.entry-update-form.${entryId}`);
      $entryForm.submit();
    });
  }
});

$addCommentButton.on('click',(e) => {
  const arrayOfClasses = $(e.target).attr('class').split(' ');
  arrayOfClasses.forEach(function($class) {
    if($class.match(/entry-id-*/)) {
      entryId = $class;
    }
  });
  $(e.target).addClass('hidden');
  const $commentForm = $(`.comment-form.${entryId}`);
  $commentForm.removeClass('hidden');
  $commentInput.focus();
});

$commentInput.on('blur',() => {
  if($commentInput.val() === '') {
    const $commentForm = $(`.comment-form.${entryId}`);
    $commentForm.addClass('hidden');
    $addCommentButton.removeClass('hidden');
  }
});
