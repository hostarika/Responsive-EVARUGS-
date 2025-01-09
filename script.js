const btn=document.getElementById("btn")
const filter=document.getElementById("filter")
const madar=document.getElementById("madar")


window.addEventListener("click",(e)=>{
    if(e.target.id=="btn" ){
        filter.style="filter: blur(18px);";
    madar.style="display:block";
    }else{
        filter.style="filter: blur(18px);";
        madar.style="display:block";
    }
    
})