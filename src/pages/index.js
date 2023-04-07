import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import Header from '@/components/layout/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Fee() {
  const [data,setData] = useState(20) 
  const display = async ()=>{
    setData(40)
  }
  return (
    <>
     <Header />
     <h1 className={styles.kk}>Hello {data}</h1>
     <button onClick={display}>click</button>
    </>
  )
}
