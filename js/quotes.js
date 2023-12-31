// Quotes and code are borrowed and edited from programthink - 编程随想

fetch('/js/quotes.json')
    .then((response) => 
    response.json())
    .then((quotes) => {
      var arrMaxim = quotes.slice();
      var sMaxim = arrMaxim[Math.floor(Math.random() * arrMaxim.length)];
      var element = document.getElementById("quote");
      element.textContent = sMaxim;
    });