import React, { useState } from "react";
import SingIn from "./components/SingIn";
import SingUp from "./components/SingUp";


export default function App() {
  const [showSignIn , setShowSignIn] = useState(false);
  return(
    <div>
      {showSignIn ? (
        <SingIn onSwitch={() => setShowSignIn(false)} />
      ) : (
        <SingUp onSwitch={() => setShowSignIn(true)} />
      )}
    </div>
   
  
  )

}
