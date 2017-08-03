
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');
    var address = $('#street').val() + ', ' + $('#city').val();

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // Load street view
    var imgSrc = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '>';

    $body.append("<img class='bgimg' src='" + imgSrc + "'>");

    $greeting.text("So, you want to live at " + address + "?");

    return false;
}

$('#form-container').submit(loadData);
