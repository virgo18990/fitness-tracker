import { api, Globals } from "./api";

export async function GetFriends(){
    const x = await api("MyFriendsController/GetFriends", { Request_From: Globals.user.email })
    return x;
}