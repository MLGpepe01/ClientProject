// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */
$(document).ready(function() {

  //input id="srch-term"
  // $.ajax({
  //     url: "https://jobs.github.com/positions.json?description=python&location=sf&full_time=true",
  //     method: "GET",
  //     success: function(response) {
           
  //         $('body').html();
           
  //     },
  //   }); 
     
     
     
  function InternshipURLWithSearchTerm(searchTerm) {
    // write a function that will return a url for the Internship API with
    // the searchTerm provided in the parameters
    var newUrl = 'https://jobs.github.com/positions.json?description='+ searchTerm+' &location=sf&full_time=true' ;

    return newUrl;

  }

  function displayResult(response) {
    // write a function that will append an <img> to the body with the
    // URL provided in the parameters
    $('.gallery').html('<h1>'+ response[0].title + '</h1>');
    console.log(response[0].title);
     console.log(response[0].company);
  }
  

  function callInternshipAPIWithSearchTerm(searchTerm) {
    $.ajax({
      url: InternshipURLWithSearchTerm(searchTerm),
      method: "GET",
      dataType: "jsonp",
      success: function(response) {
        // var random = Math.floor(Math.random() * 20);
        // var url = response.data[random].images.original.url;
     //   console.log(response);
        displayResult(response);
      },
    });
}

  //Add a click handler below to call the function when the button is clicked

  $("button").click(function() {
    var input = $("input").val(); 
    callInternshipAPIWithSearchTerm(input);
    //callInternshipAPIWithSearchTerm(input); 
  });


});

























/*

function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        x.previousElementSibling.className += " w3-theme-d1";
    } else { 
        x.className = x.className.replace("w3-show", "");
        x.previousElementSibling.className = 
        x.previousElementSibling.className.replace(" w3-theme-d1", "");
    }
}

// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}*/
