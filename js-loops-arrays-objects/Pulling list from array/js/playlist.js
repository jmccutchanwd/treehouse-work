var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

var carList = [
  'Mustang',
  'Camarro',
  'Fiat 500'
];

function print(message) {
  document.write(message);
}

function printList( list ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < list.length; i ++) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printList(playList);

printList(carList);

//for (var i = 0; i < playList.length; i+=1) {
//  console.log(playList[i]);
//  }

