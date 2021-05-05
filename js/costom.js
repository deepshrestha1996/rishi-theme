//////////////scroll to top function///////////////////
var scrollBtn = document.getElementById("scroll-btn");
var rootElement = document.documentElement

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

function goToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

document.getElementById("scroll-btn").addEventListener("click", goToTop, true);

///////////////////////////////service-section-2-carousel/////////////////////////

$('.service-section-2-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 1170,
            settings: 'unslick'
        }
    ]
});

$(window).on('resize', function () {
    $('.service-section-2-carousel').slick('resize');
});


///////////////////////////////////featured-on-section-carousel//////////////////////

$('.featured-on-icons-container').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 1170,
            settings: 'unslick'
        }
    ]
});
$(window).on('resize', function () {
    $('.featured-on-icons-container').slick('resize');
})



//////////////////////////////////testimonials carousel//////////////////////////
var $slider = $('.quotes-carousel');

if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = document.createElement('div');
    sliderCounter.classList.add('slide-count-wrapper');

    var updateSliderCounter = function (slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).text(currentSlide + "/" + slidesCount)
    };
    $slider.on('init', function (event, slick) {
        $slider.append(sliderCounter);
        updateSliderCounter(slick);
    });
    $slider.on("afterChange", function (event, slick, currentSlide) {

        updateSliderCounter(slick, currentSlide);
    });
    $slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<div class="slick-costom-arrow slick-costom-arrow-right"><img src="./images/icons/sharp-right.svg"></div>',
        prevArrow: '<div class="slick-costom-arrow slick-costom-arrow-left"><img src="./images/icons/sharp-left.svg"></div>'
    });
}


////////////////////counter section js////////////////////
var a = 0;
$(window).scroll(function () {

    var oTop = $('.counter-item').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.increment-counter').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }

});


/////////////////////isotope js//////////////////
$('.portfolio-container').isotope({

    itemSelector: ".portfolio-box-item-wrapper",
});

$('.portfolio-navbar').on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $(".portfolio-container").isotope({ filter: filterValue });
    $(".portfolio-navbar li").removeClass("portfolio-navbar-active");
    $(this).addClass("portfolio-navbar-active");
});


//////////////////////blogpost-carousel//////////////////
$('.blog-post-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    dots: false,
    responsive: [
        {
            breakpoint: 1170,
            settings: 'unslick'
        }
    ]
});

$(window).on('resize', function () {
    $('.blog-post-carousel').slick('resize');
});

//////////////////////