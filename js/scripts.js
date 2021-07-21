function newItem(){

//1. Adding a new item to the list of items: 
   let inputValue = $('#input').val();
   let li = $('<li></li>');
   li.append(inputValue);


   if (inputValue === '') {
     alert("You must write something!");
   } else {
      $('#list').append(li);
   }

  function crossOut() {
      li.toggleClass("strike");
  }

 //2. Crossing out an item from the list of items:
  li.on('dblclick', crossOut);
 //3(i). Adding the delete button "X": 
  let crossOutButton = $('<crossOutButton></crossOutButton>')
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  function deleteListItem() {
    li.addClass('delete');
  }

  crossOutButton.on('click', deleteListItem);

 // 4. Reordering the items: 
   $('#list').sortable();
}

