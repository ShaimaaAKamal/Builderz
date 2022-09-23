$(".owl-carsouel").owlCarousel({
    margin:20,
    autoplay:true,
    autoplayHoverPause:true,
    smartSpeed: 1500,
    loop: true,
    dots:false,
    nav:true,
    navText : ["<i class='fa fa-chevron-left bg-site border-0 me-1 p-2 lh-1'></i>","<i class='fa fa-chevron-right bg-site border-0 ms-1 p-2 lh-1'></i>"],
    responsive: {
        0:{
            items:1
        },
        768:{
            items:2     

        }
    }
});

