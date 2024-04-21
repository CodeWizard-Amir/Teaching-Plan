$(document).ready(function () {
    new WOW().init();
    $(".listItem>li>a").click(function(){
        $(".listItem>li>a").removeClass('active')
        $(this).addClass("active")
        let href = $(this).attr('href')
        $(".left>div").hide()
        $(`${href}`).show()
        new WOW().init();
    })
});