//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

var $password = $("#password");
var $confirm = $("#confirm_password");
var $username = $("#username");

//Hide hints
$("form span").hide();

function isPassWordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirm.val();
}

function isUserNameValid() {
  return $username.val().length > 0;
}

function canSubmit() {
  return isPassWordValid() && arePasswordsMatching() && isUserNameValid();
}

function passwordEvent() {
  //Find if valid (8 or less)
    if(isPassWordValid()) {
      //Hide hint if valid
      $password.next().hide();
    } else {
      //else show hint
      $password.next().show();
    }
}

function confirmPasswordEvent(){
  //Find out if password and confirmation match
    if(arePasswordsMatching()){
        //Hide if matched
        $confirm.next().hide();
      } else {
        //else show hint
        $confirm.next().show();
      }
};

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

$username.focus(isUserNameValid).keyup(isUserNameValid);

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
  

//When event happens on confirmation
$confirm.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
  
enableSubmitEvent();







