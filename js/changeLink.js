/* Try the jQuery */
$(function() { // document.ready...
    $('a').each(function() {
        $(this).css("text-decoration","line-through");
        $(this).attr('href',"https://google.com");
    });
    $('img').each(function() {
        var thepath=$(this).attr('src');
        $(this).attr('src',"img/"+thepath);
    });
});