import React, { useContext } from 'react';
import { Context } from '../Store';
import firebase from '../../fireCinnection';
import { useRouter } from 'next/router';


const IsLogeed = () => {
   const router = useRouter();
   const [state] = useContext(Context);
   function handleClick() {
      firebase.logout();
      localStorage.clear();
      router.push("/login");
   }

   return (
      <>
         {state && (
            <a onClick={handleClick}>Sair</a>
         )}
      </>
   )

}

export default IsLogeed;