import { api, Globals } from "./api";

export async function GetDays(){
    const x = await api("DietChartController/GetDays",{Email: Globals.user.Email})
    return x;
}

export async function ShowMealPlan(day){
    const x = await api("DietChartController/ShowMealPlan",{Day:day, Email: Globals.user.Email})
    return x;
}