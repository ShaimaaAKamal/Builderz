let header=document.querySelector("header")
let nav=document.querySelector("header nav")
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