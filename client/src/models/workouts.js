import { api, Globals } from "./api";

export async function GetWorkoutType(bodypart){
    const x = await api("WorkoutsController/GetWorkoutType", { BodyPart: bodypart, Email: Globals.user.Email })
    return x;
}

export async function GetWorkoutSubType(workouttype){
    const x = await api("WorkoutsController/GetWorkoutSubType", { WorkoutType: workouttype, Email: Globals.user.Email })
    return x;
}

export async function GetWorkoutName(workouttype,workoutsubtype){
    const x = await api("WorkoutsController/GetWorkoutName", { WorkoutType:workouttype, WorkoutSubType: workoutsubtype, Email: Globals.user.Email })
    return x;
}

export async function GetSetsReps(workoutname){
    const x = await api("WorkoutsController/GetSetsReps", { WorkoutName: workoutname, Email: Globals.user.Email })
    return x;
}

export async function RecordProgress(data, sets, reps){
    console.log({Data:data});
    const x = await api("TrackProgressController/RecordProgress", { data, sets, reps, Email: Globals.user.Email })
    return x;
}