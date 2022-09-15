var element_to_watch = document.querySelectorAll(".watch");
var callB = function(items){
    items.forEach((item)=> {
        if(item.isIntersecting){
            item.target.classList.add("in-page")
        }else{
            item.target.classList.remove("in-page")
        }
    });
}
var observer = new IntersectionObserver(callB, { threshold: 0.6 });
element_to_watch.forEach((element)=>{
    observer.observe(element);
});