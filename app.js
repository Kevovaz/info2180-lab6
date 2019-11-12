window.onload = function() {

  var searchBtn = document.querySelector('#searchButton');
  var httpRequest;

  searchBtn.addEventListener('click', function(element) {
    element.preventDefault();

    httpRequest = new XMLHttpRequest();

    var input=document.getElementById("searchBar").value;
    var url = "superheroes.php?query="+input;
    httpRequest.onreadystatechange = loadSuperheroes;
    httpRequest.open('GET', url);
    httpRequest.send();
  });

  function loadSuperheroes() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var response = httpRequest.responseText;
        var result = document.querySelector('#result');
        result.innerHTML = response;
      } else {
        alert('There was an issue resolving the request.');
      }
    }
  }

};