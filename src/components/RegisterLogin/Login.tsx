import React from 'react'
import {useForm} from 'react-hook-form'
import { useMutation,useQueryClient} from 'react-query'
import * as apiClient from '../api-client.ts'
import {useAppContext} from '../context/Appcontext.tsx'
import {Link,useNavigate} from 'react-router-dom'

export type SignFormdata={
    email:string,
    password:string,
}

export default function Login({ toggleView }) {
    const {showToast}= useAppContext()
    const queryClient=useQueryClient()
    const Navigate=useNavigate()
    const {handleSubmit} =useForm<SignFormdata>();
    const mutation = useMutation(apiClient.SignIn,{
      onSuccess: async ()=>{
        showToast({message:"Sign in Sucessful",type:"SUCESS"})
        await queryClient.invalidateQueries("validateToken")
        Navigate("/dashboard")
        
      },
      onError:(error:Error)=>{
        //show the toast
        showToast({message:error.message,type:"ERROR"})

        
  
      }
    })
    const onSubmit = (data:SignFormdata) => {
      mutation.mutate(data);
    };
    return (
        <div className='user-login-container'>
            <div className="user-login-landing">
                <form onSubmit={handleSubmit(onSubmit)} className="login-main">
                    <h1>Parent Sign In</h1>
                    <h3>This is a sample subheading for login.</h3>
                    <div className="login-form">
                        <div className="label-input">
                            <label>Email</label>
                            <input id="useridlogin" type="email" />
                        </div>
                        <div className="label-input">
                            <label>Password</label>
                            <input id="useridlogin" type="text" />
                        </div>
                        <Link to="/dashboard"><button className='login-button'>Sign In</button></Link>

                    </div>
                </form>
            </div>
        </div>
    )
}
