import { api, Globals } from "./api";

export async function GetWorkoutType(){
    const x = await api("WorkoutsController/GetWorkoutType", { Email: Globals.user.Email })
    return x;
}

export async function GetWorkoutSubType(workouttype){
    const x = await api("WorkoutsController/GetWorkoutSubType", { WorkoutType: workouttype, Email: Globals.user.Email })
    return x;
}