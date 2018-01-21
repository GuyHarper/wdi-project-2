const $addCommentButton = $('.add-comment-button');
const $commentInput = $('.comment-input');
const $entryInput = $('.entry-input');
const $addEntryButton = $('.add-entry-button');
const $newEntryInput = $('#new-entry');
const $entryCheckbox = $(':checkbox');
const $listNameInput = $('.list-name-input');
const $listNameForm = $('.list-name-form');
const $checkboxDiv = $('.checkbox-div');
const $modalButton = $('.modal-button');
const $modal = $('.modal');
const $burgerButton = $('.navbar-burger');
const $navbarMenu = $('.navbar-menu');

let inputContents = null;

$modalButton.on('click',() => {
  $modal.toggleClass('is-active');
});

$checkboxDiv.on('click',(e) => {
  const $parentDiv = $(e.target).parent();
  $(e.target).remove();
  $parentDiv.html('<i class="fa fa-check-square-o" aria-hidden="true"></i>');
  $parentDiv.parent('form').submit();
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
  $(e.target).parent('form').submit();
});

$newEntryInput.on('focus',() => {
  $addEntryButton.removeClass('hidden');
});

$newEntryInput.on('blur',() => {
  if($newEntryInput.val() === '') {
    $addEntryButton.addClass('hidden');
  }
});

$entryInput.on('focus',(e) => {
  inputContents = $(e.target).val();
});

$entryInput.on('blur',(e) => {
  if($(e.target).val() !== '' && inputContents !== $(e.target).val()) {
    $(e.target).parents('form').submit();
  }
});

$addCommentButton.on('click',(e) => {
  const $card = $(e.target).parents('.card');
  const $commentForm = $card.eq(0).find('.comment-form');
  $commentForm.removeClass('hidden');
  $commentInput.focus();
  $(e.target).addClass('hidden');
});

$commentInput.on('blur',(e) => {
  if(!$(e.target).val()) {
    const $card = $(e.target).parents('.card');
    const $commentForm = $card.eq(0).find('.comment-form');
    $commentForm.addClass('hidden');
    $addCommentButton.removeClass('hidden');
  }
});

$burgerButton.on('click', () => {
  $burgerButton.toggleClass('is-active');
  $navbarMenu.toggleClass('is-active');
});
