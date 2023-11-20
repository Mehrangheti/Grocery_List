const container = document.querySelector(".container");
const icon = document.querySelector(".icon");
const allItem= document.querySelector(".allItem");
const input = document.querySelector(".user");


icon.addEventListener("click", (e)=>{
    allItem.innerHTML="";
})

input.addEventListener("keydown", (e)=>{
    if(e.key=="Enter")
     addItem();
})

function addItem(){
    var h2= document.createElement("h2");
     h2.innerHTML= " - " + input.value;

     h2.addEventListener("click", (e)=>{
        h2.style.textDecoration="line-through";
    })
    
    allItem.insertAdjacentElement("beforeend", h2);

    input.value="";
}


