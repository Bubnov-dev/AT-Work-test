$(document).ready(function () {
    let photos = $(".slider__item");
    let choices = $(".slider__choice-item");

    let endDate = new Date(2021, 11, 31, 15, 0, 0)
    let nowDate = new Date
    let dt = new Date(endDate - nowDate);

    
    let timerSecs = Math.floor(dt / 1000 );
    let days, hours, minutes, seconds;
    
    int = setInterval(function() { 
        if (timerSecs > 0) {
            nowDate = new Date
            dt = new Date(endDate - nowDate);
        
            
            timerSecs--
            days = Math.floor(dt / 1000 / 60 / 60 / 24);
            dt -= days*24*60*60*1000;
            hours = Math.floor(dt / 1000 / 60 / 60);
            dt -= hours * 60 * 60 * 1000;
            minutes = Math.floor(dt / 1000 / 60);
            dt -= minutes * 60 * 1000;
            seconds = Math.floor(dt / 1000 );
            
            $("#days").text(days);
            $("#hours").text(hours);
            $("#minutes").text(minutes);
            $("#seconds").text(seconds);
        } 
      }, 1000);

    if ($(window).width() > '1200'){
        for (let i=0; i< choices.length; i++){
            if (choices[i].classList.contains("slider__choice-item--selected")){
                photos.removeClass("slider__item--selected");
                photos[i].classList.add("slider__item--selected");
            }
        }



        choices.each(choicePhoto)

        function choicePhoto() {
            $(this).on("click", function () {
                choices.removeClass("slider__choice-item--selected")
                $(this).addClass("slider__choice-item--selected");
                
                for (let i=0; i< choices.length; i++){
                    if (choices[i].classList.contains("slider__choice-item--selected")){
                        photos.removeClass("slider__item--selected");
                        photos[i].classList.add("slider__item--selected");
                    }
                }
            })
        }
    }
    else {

        $(".slider__mobile-all").html($(".slider__item").length);

        $(".slider__photos").slick({
            slidesToShow: 1,
            variableWidth: false,
            arrows: false
        });

        $(".slider__photos").on("afterChange", function () {
            for(let i = 0; i< $(".slick-slide").length; i++){
                if ($(".slick-slide")[i].classList.contains("slick-active")){
                    $(".slider__mobile-number-current").html(i);
                }
            }
        })
    }


})