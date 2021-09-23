async function getRandomNumber(){
    let promise = new Promise(res => {setTimeout(res(Math.floor(Math.random() * 100)), 500);})
        
    return promise;
    
}

async function getResult(){
    let result = await getRandomNumber();
    console.log(result);
}

getResult();

async function remoteData(city){
    let promise = await fetch(`https://geocode.xyz/${city}?json=1`);

    if(promise.ok){
        let json = await promise.json();
        console.log(`Here is ${city}'s long and lat: `);
        console.log("Longitude: " + json['longt']);
        console.log("Latitude: " + json['latt']);
    }else{
        throw new Error (promise.status);
    }
}

remoteData('seattle').catch(alert);
remoteData('LOS%20ANGELES').catch(alert);