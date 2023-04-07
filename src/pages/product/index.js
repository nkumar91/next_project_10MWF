import Header from "@/components/layout/Header";
import ProductList from "@/components/product/ProductList";
import Head from "next/head";
import Image from "next/image";

export default function Abc(){
    return(
        <>
        <Head>
            <title>Product page</title>
        </Head>
        <Header />
        <h1>Product Home</h1>
        <Image src={"/images/next.svg"} width={200} height={200}></Image>
        <ProductList />
        </>
    )
}