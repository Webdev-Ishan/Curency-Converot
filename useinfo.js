import { useState,useEffect } from "react";
// we imported the required hooks from react which willl be required to create our own custom hook

function useinfo(currency){
//create the state for ui updation
    const [data,setdata]=useState({});

    //create the useeffect to handle the side effects or apiu calling
    useEffect( ()=>{
        async function fetchdata() {
            
        
        try{
            const response= await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
            const datajson= await response.json();
            // this next line will go the json format rersponse and will locate to the key e.g. usd,inr etc and update
            // all the info regarding it to the data state so it may be assigned to the UI
            setdata(datajson[currency]);
            
                }
                catch{
                    // if the error occurs then we will return the error message
                    console.log('error has occured')
                }
            }
                fetchdata(); 
            
    },[currency])
    // warap it in the try and catch

   return data;
}
export default useinfo;