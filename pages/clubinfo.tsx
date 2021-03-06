import ClubManagement from '@/components/ClubManagement/ClubManagement'
import { useRouter } from 'next/router'
import { useEffect } from 'react';
const Index = () => {
const router = useRouter();
useEffect(()=>{
    console.log(router);
},[router]) 
  return(
    <>
      <ClubManagement club_id={0}></ClubManagement>
    </>
  )
  
}

export default Index
