var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var quotes = [["quote zero", "author zero"], ["quote one", "author one"], ["quote two", "author two"]];

$(document).ready(function() {
  $("#gen_new_quote").on("click", function(event){
    var new_color = colors[Math.floor(Math.random() * colors.length)];
    var new_quote = quotes[Math.floor(Math.random() * quotes.length)];
    $('body').css("background-color", new_color);
    $('#gen_new_quote').css("background-color", new_color);
    $('#quote_text').html(new_quote[0]);
    $('#author_text').html(new_quote[1]);
  });


});
