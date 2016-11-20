// Problem: looks bad in mobile
// SOLUTION: hide text links, swap out with
// something better.


//Create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);
               
//Cycle over menu links
$("#menu a").each(function(){
    var $anchor = $(this);
    //Create an option
    var $option = $("<option></option>");
    //Display selected when on that page
    if ($anchor.parent().hasClass("selected")) {
      $option.prop("selected", true);
    }
    //Option's value is HREF 
    $option.val($anchor.attr("href"));
    //Option's text is text of link
    $option.text($anchor.text());
    //Append option to select
    $select.append($option);
});

$select.change(function(){
    // Goto select location
    window.location = $select.val();
});

////Createbutton 
//var $button = $("<button>Go</button>");
//$("#menu").append($button);
////Bind click to button
//$button.click(function(){
//  // Goto select location
//  window.location = $select.val();
//});







