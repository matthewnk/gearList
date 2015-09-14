$(function() {

  // SETUP
  var $list, $newItemForm, $newItemButton;
  var item = '';                                 // item is an empty string
  $list = $('.gearList ul');                     // Cache the unordered list
  $newItemForm = $('#newItemForm');              // Cache form to add new items
  $newItemButton = $('#newItemButton');          // Cache button to show form



  // SETUP FORM FOR NEW ITEMS
  $newItemButton.show();                         // Show the button
  $newItemForm.hide();                           // Hide the form
  $('#showForm').on('click', function() {        // When click on add item button
    $newItemButton.hide();                       // Hide the button
    $newItemForm.show();                         // Show the form
  });

  // ADDING A NEW LIST
  $newItemForm.on('submit', function(e) {       // When a new item is submitted
    e.preventDefault();                         // Prevent form being submitted
    var text = $('input:text').val();           // Get value of text input
    var pageUrl = window.location.hostname   //get current page url
    var url = pageUrl + text + '.html';       //url
    // url += $('#userList').val();
    $list.append('<li class=user-' + text + 'List>' + text.link(url) + '</li>'); // Add item to end of the list
    // window.location = url;
    $('input:text').val('');                    // Empty the text input
  });


  // CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT
  $list.on('click', 'li', function() {

    // $("#userList").click(function() {
        window.location = "file:///Users/MNK/Documents/PCS/gearList/" + $("#text").val();
    // });

  });                          
});