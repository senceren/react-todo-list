import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [sayi, setSayi] = useState(0); // durumu değiştiren metot ve sayi ataması yapılyor.
  const numberChanged = function (e) {
    setSayi(e.target.value);  // fonk içindeki e değeri bu eventin tetiklendiği element 
  };

  return (
    <>
      <Head>
        <title>To-Do List</title>
        <meta name="description" content="A sample to do list project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>To-Do List</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sapiente, illo ea tempora molestiae enim. Ab, commodi omnis porro, autem quibusdam eaque at architecto ipsa blanditiis alias optio hic quo!</p>
        <p>{2 * 2}</p>
        <p>{new Date().toDateString()}</p>
        <input type="number" onChange={numberChanged} />
        <p>Girilen değer: {sayi} </p>
        <p>Girilen sayı bir {sayi % 2 == 0 ? <strong>çift</strong> : <strong>tek</strong>} sayidir.</p>
      </main>
    </>
  )
}
