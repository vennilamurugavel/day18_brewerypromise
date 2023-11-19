function brewery(){
    let obdbid = document.getElementById('obdbid').value;

 let  promise=new Promise((resolve,reject)=>{
var request=new XMLHttpRequest();
request.open('GET',`https://api.openbrewerydb.org/v1/breweries/${obdbid}`);
request.send();
request.onload=function(){
if(request.status==200){
    var data=JSON.parse(request.response)
    resolve(data);
    promise.then((data)=>{console.log(data)}).catch((err)=>{console.log(err)});
    let display=document.getElementById("details");

display.innerHTML=`<div class="hov" style="width: 20rem;font-size:20px">Brewery<div class="card" >
<div class="card-body">
<p class="card-text">name:${data.name}</p> 
<p class="card-text">brewery_type: ${data.brewery_type}</p>
<p class="card-text">Brewery Address: ${data.address_1} </p>
<p class="card-text">phone: ${data.phone} </p>
<p class="card-text">street: ${data.street} </p>
</div>
</div>
</div>`
}
else
{
    reject("some error")
}
}

})
  }
brewery();
