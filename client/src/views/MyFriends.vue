<template>
<div>

    <h1 v-if="Globals.user">{{Globals.user.name}} Friends Page</h1>
    <ul>
        

        <li v-for="friend in friends" :key="friend.Request_From">
            {{friend.Request_To}}
        </li>
    </ul>
</div>
</template>

<script>
import { Globals } from "@/models/api.js";
import { GetFriends } from "@/models/users.js";

export default {
    data: ()=> ({
        Globals: Globals,
        friends: []
    }),
    async mounted(){
        this.friends = await GetFriends();
    }
}
</script>

<style>
</style>