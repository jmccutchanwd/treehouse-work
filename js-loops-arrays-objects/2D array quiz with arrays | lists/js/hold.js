function printList( list ) {
  var listHTML = '<ul>';
  for (var i = 0; i < list.length; i++) {
    listHTML += '<li>' + list[i] + '</li>';
    listHTML += '</ul>';
    printList(listHTML);
  }
}