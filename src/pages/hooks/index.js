import { useEffect, useReducer, useState } from "react"

const initData = {
    counter1:10,
    counter2:50,
    list:[]
}
function reducer(state,action){
    if(action.type == "first"){
        return {
            ...state,counter1:state.counter1+1
        }
    }
    else if(action.type == "second"){
        return {
            ...state,counter2:state.counter2+1
        }
    }
    else if(action.type == "list"){
        return {
            ...state,list:action.data
        }
    }
}
export default function Home(){
const [state,dispatch] = useReducer(reducer,initData);

useEffect(()=>{
      getDataApi()
},[])

const getDataApi = async ()=>{
    const res = await fetch(`http://localhost:3002/api/users`)
    dispatch({type:"list",data:res.data})
}
    return(
        <>
            <button onClick={()=>dispatch({type:"first"})}>Counter 1 Click</button>
            <h1>counter1 {state.counter1}</h1>
            <button onClick={()=>dispatch({type:"second"})}>Counter 2 Click</button>
            <h1>counter2 {state.counter2}</h1>
          

        </>
    )
}