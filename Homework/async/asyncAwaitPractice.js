async function getRandomNumber(){
    let promise = new Promise(res => {setTimeout(res(Math.floor(Math.random() * 100)), 50);})
        
    
    return promise;
    
}

async function getResult(){
    let result = await getRandomNumber();
    console.log(result);
}

getResult();

async function remoteData(city){
    let promise = await fetch(city);

    if(promise.ok){
        let json = await promise.json();
        var data = json;
        console.log("Here is your city's long and lat: ");
        console.log("Longitude: " + data['longt']);
        console.log("Latitude: " + data['latt']);
    }else{
        throw new Error (promise.status);
    }
}

remoteData('https://geocode.xyz/seattle?json=1').catch(alert);
remoteData('https://geocode.xyz/LOS%20ANGELES?json=1').catch(alert);