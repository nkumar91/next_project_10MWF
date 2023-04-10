import { useRouter } from "next/router"

export default ()=>{
    const {id} = useRouter().query
    return(
        <h1>ABC Index Page {id?.[0]}</h1>
    )
}