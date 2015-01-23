$(document).ready(function(){
  init();
});

function init() {
  $('body').append($('<div>'));
  $('div').addClass('container');
  $('.container').append($('<h1>Todo App</h1>'));
  $('.container').append($('<input></input>'));
  $('input').attr({type: 'text', placeholder:'what do you need to learn?'});
  $('.container').append($('<ul></ul>'));
  $('.container').append($('<p>'));
  $('p').attr('id', 'itemsLeft');
  $('.container').append('<button>Delete Completed</button>');
  $('button').attr('id', 'deleteAll');
  $('input').keypress(pressEnter);
  $('ul').on('click', '.delete', deleteToDo);
  $('ul').on('click', 'li', completedItem);
  $('#deleteAll').on('click', deleteCompleted);

}

function addNew(item) {
  var newToDo = $(item).val();
  $('ul').append('<li>' + newToDo + '<span class="delete">Delete</span></li>');
  $('input').val('');
  countItems();
}

function pressEnter(key) {
  if (key.which != 13) { return; }
  addNew(this);
}

function deleteToDo(item) {
  $(this).closest('li').fadeOut('slow', function(){
    $(this).remove();
  });
}

function completedItem(item) {
  $(this).toggleClass('completed');
  countItems();
}

function countItems(){
  var count = $("li:not(.completed)").length
  if(count === 1) {
    $('#itemsLeft').text(count + " item left");
  } else {
    $('#itemsLeft').text(count + " items left");
  }
}

function deleteCompleted() {
  $('.completed').fadeOut('slow',function(){
    $(this).remove();
  });
}
