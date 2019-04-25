import { api, Globals } from "./api";

export async function GetFriends(){
    const x = await api("MyFriendsController/GetFriends", { Email: Globals.user.Email })
    return x;
}

export async function PendingRequests(){
    const x = await api("MyFriendsController/PendingRequests", { Email: Globals.user.Email })
    return x;
}

export async function AcceptFriendRequest(Request_From){
    const x = await api("MyFriendsController/AcceptFriendRequest", { Request_From: Request_From, Email: Globals.user.Email })
    return x;
}

export async function RejectFriendRequest(Request_From){
    const x = await api("MyFriendsController/RejectFriendRequest", { Request_From: Request_From, Email: Globals.user.Email })
    return x;
}

export async function SearchFriend(data){
    const x = await api("MyFriendsController/SearchFriend", {data})
    return x;
}

export async function Login(data){
    //console.log({Globals: Globals});
    //console.log(data);
    const x = await api("UserController/Login", data)
    Globals.user = x.user;
    Globals.token = x.token;
    return x;
}

export async function CreateProfile(data){
    //console.log({profiledata:data});
    //console.log({GlobalsInCreateProfile: Globals});
    console.log({userdetails:Globals.user});
    console.log(Globals.user.Email);
    const x = await api("ProfileController/", {data: data, email: Globals.user.Email})
    
    return x;
}