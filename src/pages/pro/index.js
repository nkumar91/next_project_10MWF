import useMyFetch from "@/customhooks/useMyFetch"
export default ()=>{
    const [data] = useMyFetch('http://localhost:3002/crud/listEmployee')
 
    return(
        <>
        <h1>Hello</h1>

        {
          
            data && data.map(ele=>
                <p>{ele.empName}</p>
                )
        }
        </>
    )
}