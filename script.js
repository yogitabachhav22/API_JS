let url = "https://kontests.net/api/v1/all"
let response = fetch(url)

response.then((v)=> {
    return(v).json()
}).then((contests) => {
console.log(contests)
ihtml = ""
for(item in contests){
    console.log(contests[item])
    ihtml += ` 
      <div class="card" style="width: 18rem;">
    <img src="img1.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${contests[item].name}</h5>
      <p class="card-text">Status is:"${contests[item].status}" And site is"${contests[item].site}" </p>
      <p class="card-text">In 24 Hrs?"${contests[item].in_24_hours}" </p>
      <p>Starts at:${contests[item].start_time}
      <P>Starts at:${contests[item].end_time}
      <a href="${contests[item].url}" class="btn btn-primary my-4">visit here</a>
    </div>
  </div> 
  `  
}
cardContainer.innerHTML= ihtml
})

let n = localStorage.getItem("note")
alert("Your note is" +n)

let a= prompt ("Enter your note")

if(a){
    localStorage.setItem("note",a)
}

let c = confirm("Do you want to delete your note?")

if (c) {
    localStorage.removeItem("note")
    alert("Note deleted Sucessfully")
}