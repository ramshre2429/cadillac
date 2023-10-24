const URL = "https://restcountries.com/v3.1/all"
const req = new XMLHttpRequest();
req.addEventListener("load", function(){
    const obj = JSON.parse(this.response)
    for(let val of obj)
        {
            console.log(val.name, val.region, val.subregion, val.population)
            
        }
    
});
req.open("GET", URL);
req.send()
