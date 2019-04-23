import { api, Globals } from "./api";

export async function GetFriends(){
    const x = await api("MyFriendsController/GetFriends", { Request_From: Globals.user.Email })
    return x;
}

export async function Login(data){
    console.log(data);
    const x = await api("UserController/Login", data)
    Globals.user = x.user;
    Globals.token = x.token;
    return x;
}

export async function CreateProfile(data){
    console.log(data);
    const x = await api("ProfileController/", data)
    
    return x;
}