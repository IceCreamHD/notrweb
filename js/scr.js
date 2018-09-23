/*var promoButton = document.getElementById('vi-button-promo');
promoButton.addEventListener('click', scrollTo);

/* function scrollTo() {
var jumpTo = document.getElementById('vi-jumpto');
  jumpTo.scrollIntoView;
}

var jumpTo = document.getElementById('vi-jumpto'); */

/* function viClick() {
  window.location.href = "#vi-target-one"
} */


function viClick() {
document.getElementById('vi-target-one').scrollIntoView({
  behavior: 'smooth'
});
}

/*
var ntrLogin = document.getElementById('ntr-login');

function eraseNtrLogin() {

  var resetIdNtrLogin = document.getElementById('ntr-login');
  for (var i = 0 ; i < resetIdNtrLogin.lenght ; i++) {
    IdNtrLogin[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
}
*/

function ifHaveAccount() {
    var x = document.getElementById("ntr-login");
    var y = document.getElementById("ntr-create-account");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}
