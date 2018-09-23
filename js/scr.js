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
