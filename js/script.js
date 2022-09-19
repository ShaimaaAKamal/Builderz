let header=document.querySelector("header");
let homeCarsoul=document.querySelectorAll("homeCarsouel")
let nav=document.querySelector("header nav");
let navOffset=nav.offsetTop;


window.addEventListener('scroll' , (e) =>{
    if(this.scrollY >= navOffset){
        nav.classList.add("position-fixed","top-0","widthInherit");
    }
    else{
        nav.classList.remove("position-fixed","top-0","widthInherit");
    }
    window.localStorage.setItem('scrollValue',this.scrollY);
})


window.addEventListener('load' , (e) =>{
    let scrollValue= window.localStorage.getItem('scrollValue');
    if(scrollValue >= navOffset){
        nav.classList.add("position-fixed","top-0","widthInherit");
    }
})



var typed = new Typed('#typed',{
    strings:["15","20 ","25","30","37","40","47","53","59","62","68","70","78","82","89","91","96","100","103","109"],
    showCursor: false,
    backDelay: 2

  
  });

  var typed1 = new Typed('#typed2',{
    strings:["115","120 ","125","230","237","240","253","270","282","389","391","396","400","450","486"],
    showCursor: false,
    backDelay: 2

   
  });

  var typed3 = new Typed('#typed3',{
    strings:["115","120 ","125","230","237","240","253","270","282","389","391","396","400","450","486","500","550","600","638","700","745","789"],
    showCursor: false,
    backDelay: 2
  });

  var typed4 = new Typed('#typed4',{
    strings:["115","120 ","125","230","237","240","253","270","282","389","391","396","400","450","486","500","550","600","638","700","745","789","800","820","855","890"],
    showCursor: false,
    backDelay: 2
  });