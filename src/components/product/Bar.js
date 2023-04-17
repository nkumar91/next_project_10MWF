import Link from "next/link";

export default function Bar({abc}){
    return(
        <>
        <h1>Bar components</h1>

        <ul>
           {
            abc.map(ele=>
                <li><Link href={ele._id}>{ele.empName} </Link> {ele._id}</li>
                )
           }
        </ul>
        </>
    )
}