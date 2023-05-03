import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default ()=>{
    const { data, error } = useSWR(`http://localhost:3002/crud/listEmployee`,fetcher)
    return(
        <>
        <h1>Hello</h1>
        {
              data && data.map((ele,index)=>
                <p key = {index}>{ele.empName}</p>
                )
        }

        </>
    )
}