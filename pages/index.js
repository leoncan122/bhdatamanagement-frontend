import {useEffect} from 'react'
import Head from "next/head";
import { useRouter } from 'next/router'
import Link from "next/link";
import { useUser, getSession } from '@auth0/nextjs-auth0';
import styles from "../styles/Home.module.css";

export default function Home() {
  const { user, error, isLoading } = useUser();
  /*   const {data} = getSession() */
  const loggedUserStatus = user && user["https://lanuevatest.herokuapp.com/activestatus"];
  const router = useRouter()
  
useEffect(()=>{
console.log(user)
},[user])

  return (
    <div >
      <Head>
        <title>Black Health</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="container mx-auto py-5 border-b">
          <img
            src="/main/Black_Health_logo.svg"
            alt="Black Health oraganization logo"
            width={260}
            height={180}
          />
        </div>
      </header>
      <main className='h-full'>
        <div className="container mx-auto pt-20 h-4/6 grid gap-40 justify-around content-center">
          <h1 className='font-black'>Data Management App</h1>
          {/* <img src="/main/Black_Health_logo_welcome.svg" /> */}
        <div className="text-center pt-20 flex flex-col items-center">
          <h1 className="font-black mb-5">Welcome</h1>
          <Link href={ `/dashboard`} >
            <a className='w-52'>
            <p className={`${styles.btnIndexPage} bg-black text-white flex items-center justify-between font-bold px-9 py-1  rounded-md test cursor-pointer`}>
            {/* <img src="/client/user-icon.svg" /> */}
            Login / Register</p>
          {user && <h3 className="my-5 font-black">{user.name}</h3>} 
            </a>
   
            
            </Link>
        </div>
        </div>
      </main>
    </div>
  );
}
