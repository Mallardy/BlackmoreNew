$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(25).fadeIn(100);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(25).fadeOut(100);
});


$("#mainbtn").click(function(){
    $("#mainpanel").fadeIn(200);
    $("#aboutpanel").hide();
    $("#personalpanel").hide();
    $("#corppanel").hide();
    $("#contactpanel").hide();
});

$("#aboutbtn").click(function(){
    $("#aboutpanel").fadeIn(200);
    $("#mainpanel").hide();
    $("#personalpanel").hide();
    $("#corppanel").hide();
    $("#contactpanel").hide();
});

$("#personalbtn").click(function(){
    $("#personalpanel").fadeIn(200);
    $("#mainpanel").hide();
    $("#aboutpanel").hide();
    $("#corppanel").hide();
    $("#contactpanel").hide();
});

$("#personalbtn2").click(function(){
    $("#personalpanel").fadeIn(200);
    $("#mainpanel").hide();
    $("#aboutpanel").hide();
    $("#corppanel").hide();
    $("#contactpanel").hide();
});

$("#corpbtn").click(function(){
    $("#corppanel").fadeIn(200);
    $("#mainpanel").hide();
    $("#personalpanel").hide();
    $("#aboutpanel").hide();
    $("#contactpanel").hide();
});

$("#corpbtn2").click(function(){
    $("#corppanel").fadeIn(200);
    $("#mainpanel").hide();
    $("#personalpanel").hide();
    $("#aboutpanel").hide();
    $("#contactpanel").hide();
});

$(".contactbtn").click(function(){
    $("#contactpanel").fadeIn(200);
    initMap();
    $("#mainpanel").hide();
    $("#personalpanel").hide();
    $("#corppanel").hide();
    $("#aboutpanel").hide();
});

function initMap() {
    var uluru = {lat: 51.031196, lng: -114.061604};
        var map = new google.maps.Map(document.getElementById('map'), {
          	zoom: 12,
          	center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
		});
}