import { useRef, useState } from "react"

export default ()=>{
   const myRef = useRef();
    const handleSubmit = ()=>{
        console.log(myRef.current.value)
        myRef.current.focus()
    }
    return(
        <>
        <input type="text" ref={myRef}></input>
        <button onClick={handleSubmit}>click</button>
        {/* 
        useRef,
        useReducer,
        useCallback,
        useMemo,
        useState,
        useEffect,
        useLayoutEffect,
        memo,
        props,
        useNavigate
        useContext,
        useParams
        
        */}
     
        </>
    )
}