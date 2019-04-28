import { api, Globals } from "./api";

export async function GetWorkoutType(bodypart){
    const x = await api("WorkoutsController/GetWorkoutType", { BodyPart: bodypart, Email: Globals.user.Email })
    return x;
}

export async function GetWorkoutSubType(workouttype){
    const x = await api("WorkoutsController/GetWorkoutSubType", { WorkoutType: workouttype, Email: Globals.user.Email })
    return x;
}

export async function GetWorkoutName(workoutsubtype){
    const x = await api("WorkoutsController/GetWorkoutName", { WorkoutSubType: workoutsubtype, Email: Globals.user.Email })
    return x;
}

export async function GetSetsReps(workoutname){
    const x = await api("WorkoutsController/GetSetsReps", { WorkoutName: workoutname, Email: Globals.user.Email })
    return x;
}