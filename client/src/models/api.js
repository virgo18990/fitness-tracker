const API_ROOT = process.env.API_ROOT || "http://localhost:8081/";

export const Globals = {
    user: null
}

export function login(){
    Globals.user = { email: "john@gmail.com" }
}

/*export function api(url){
    return fetch(API_ROOT + url).then(x=> x.json());
}*/

export function api(url, data){
    if(!data){
        return fetch(API_ROOT + url).then(x=> x.json());
    }else{
        return fetch(API_ROOT + url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
        .then(response => response.json()); // parses JSON response into native Javascript objects
    }
}