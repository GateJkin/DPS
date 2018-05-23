
function offClick() {
  document.addEventListener('click', function(e, element = this) {
    if(element.contains(e)) {
      window.alert("Dentro1");
    }
    else {
      window.alert("Fora1");
    }
  });
}
