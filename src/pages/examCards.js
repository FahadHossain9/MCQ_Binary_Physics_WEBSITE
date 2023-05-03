import React from 'react'
import Card from '@/components/card';
import {logout} from "../pages/database/auth_database_firebase"
import { useState } from 'react';
import { Router } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../pages/database/auth_database_firebase"
import { useRouter } from 'next/router';

function examCards() {
    const [userstate, setUserstate] = useState(true);
    const [user, loading, error] = useAuthState(auth);
    const router = useRouter();
    function logsout() {
      console.log("hello")
      if (logout()) setUserstate(!userstate);
    }
    useEffect(() => {
      if (loading) {
        load();
      } else if (!user) router.push("/login");
      
      
    }, [user, loading,userstate]);
    const load = () => {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    };
  
    const chapterNames = [
        "তথ্য ও যোগাযোগ প্রযুক্তিঃ বাংলাদেশ ও বিশ্ব প্রেক্ষিত",
        "কম্পিউটার সিস্টেম ও নেটওয়ার্ক",
        "সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস",
        "ওয়েব ডিজাইন পরিচিতি ও HTML",
        "সি-প্রোগ্রামিং",
        "ডাটাবেজ ম্যানেজমেন্ট সিস্টেম"
      ];
      return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {chapterNames.map((chapterName, index) => (
              <Card key={index} chapterName={chapterName} />
            ))}
          </div>
        </div>
        <div>
        <ul className="flex justify-center cursor-pointer">
        <li className="p-3" onClick={logsout}>Logout</li>
        <li className="p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        </li>
      </ul>
        </div>
        </>
        
      );
    };
    


export default examCards