

$('body').append($('<div>'));
$('div').addClass('container');
$('.container').append($('<h1>Todo App</h1>'));
$('.container').append($('<input></input>'));
$('input').attr({type: 'text', placeholder:'what do you need to learn?'});
$('.container').append($('<ul></ul>'));
$('.container').append($('<p>'));
$('p').attr('id', 'itemsLeft');

$('.container').append($('<button id="deleteAll">Delete Completed</button>'));


$('input').keypress( function(event) {
  if ( event.which == 13 ) {
    event.preventDefault();
    var item = $(this).val();
    $('ul').append($('<li>' + item + '<span class="delete">Delete</span></li>'));
    $('input').val('');
    countItems();
  }
});

function countItems(){
  var count = $('ul > li').size() - $('.completed').size();
  if(count === 1)
    $('#itemsLeft').text(count + " item left");
  else
    $('#itemsLeft').text(count + " items left");
}

$('ul').on('click', '.delete', function(){
  $(this).closest('li').fadeOut('slow');
});


$('ul').on('click', 'li', function(){
  $(this).addClass('completed');
  countItems();

});

$('#deleteAll').on('click', function(){
  $('.completed').fadeOut('slow');
});
