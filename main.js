const filterBox = document.querySelectorAll(".box");

document.querySelector("nav").addEventListener("click", (event)=>{
    if(event.target.tagName !== 'LI'){
        return false;
    }

    var filterClass = event.target.dataset["f"];

    filterBox.forEach((elem)=>{
        elem.classList.remove("hide");
        if(!elem.classList.contains(filterClass) && filterClass !== "All"){
            elem.classList.add("hide");
        }
    })
})