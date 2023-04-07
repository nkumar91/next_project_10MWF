import { useRouter } from "next/router"

export default ()=>{
    const {title} = useRouter().query
   // console.log(title)
    return(
        <>
        <p>hello world {title?.[0]}</p>
        </>
    )
}