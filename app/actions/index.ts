'use server'

import {signIn, signOut} from "@/auth"
import { redirect } from "next/navigation";
export async function googleLogin(formData: FormData){
    const action = formData.get('action') as string | null;

    if(action){
        
       const result = await signIn(action, {redirect: true});
       console.log(result)
       if(result){
        redirect("/")
       }
    } else{
        console.log("Action is Null")
    }
}


export async function signOutUser (){
    await signOut()
}