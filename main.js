 let form = document.querySelector("form")
 let select =document.querySelector("select")

 let   textarea =document.querySelector("textarea")
 let button =document.querySelector("button")
 let ul =document.querySelector("ul")

const saveReview=(e)=>{
    e.preventDefault();
   let li= document.createElement("li")
   li.className="list-group-item rounded-0"
   let ratingText= document.createElement("h1")
   ratingText.className="display-5"
   ratingText.innerText=`Rating:${select.value}`
   li.appendChild(ratingText)
   reviewText= document.createElement("h1")
   reviewText.className="display-5"
   reviewText.innerText=`Review:${textarea.value}`;
   li.appendChild(reviewText)
   ul.appendChild(li)
   form.reset();

   

   let dltbtn= document.createElement("button")
   dltbtn.className="btn btn-danger btn-sm rounded-0 float-end"
   dltbtn.innerText="Delete"
   li.appendChild(dltbtn)
   ul.appendChild(li)

}
form.addEventListener("submit" ,saveReview)


const deleteli=(e)=>{
    if(e.target.className.includes("btn-danger")){
        let li=e.target.parentElement;
        ul.removeChild(li)
    }
}
ul.addEventListener("click",deleteli)