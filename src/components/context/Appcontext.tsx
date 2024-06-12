import React,{createContext,useContext,ReactNode,useState} from 'react'
import {useQuery} from 'react-query'
import Toast from '../Toast.tsx'
import * as apiClient from '../api-client.ts'
//Define the types of ToastMessage
type ToastMessage={
    message:string;
    type:"SUCESS" | "ERROR";
}
type AppContextType={
    showToast:(toastMessage:ToastMessage)=>void;
    isLoggedIn:boolean;
}

//Craete the Initial Context
const AppContext=createContext<AppContextType | undefined>(undefined)


export const AppContextProvider=({children}:{children:ReactNode})=>{
    const [toast,setToast]=useState<ToastMessage |undefined>(undefined)
    const {isError} = useQuery('validateToken',apiClient.validateToken,{
        retry:false,
    })
    const showToast=(toastmessage:ToastMessage)=>{
        setToast(toastmessage)
    }
    return (
        <AppContext.Provider value={{ showToast, isLoggedIn:!isError }}>
          {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(undefined)} />}
          {children}
        </AppContext.Provider>
      );

}
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error('useAppContext must be used within an AppContextProvider');
    }
    return context;
  };
  