'use client';
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { authHandle } from '@/store/authHandle/authHandle';




export default function MainPage() {
  // const router = useRouter();
  // const isAuth = authHandle();
 
  //    useEffect(() => {
  //        if (isAuth === 'false') {
  //            router.push('/homePage');
  //        }
  //    }, [isAuth, router]);
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome to the Main Page</h1>
      <p className="mt-4">This is the main page accessible to authenticated users.</p>
    </div>
  );

}
