async function foo(){
    try{
    var res=await fetch("https://animechan.vercel.app/api/random");
    var res1=await res.json();
    console.log(res1)

        var div=document.createElement("div")
        div.style.margin="100px 500px"
        div.style.textAlign="justify";
        div.innerHTML=`<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header" style="text-align:center">KBBI API</div>
        <div class="card-body">
<h5 class="card-title" style="text-align:center">Anime: ${res1.anime}</h5>
<h5 class="card-title" style="text-align:center">Character:${res1.character}</h5>
<h5 class="card-title" style="text-align:center">Quote: ${res1.quote}</h5>


</div>
</div>`
    document.body.append(div)

}
catch(error){
    console.log(error)
}
}
foo();