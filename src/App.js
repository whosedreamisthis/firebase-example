import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import "./firebase.utils.js";
import { signInWithGoogle, signOutOfGoogle } from "./firebase.utils.js";
function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <div className="App">
      <button
        onClick={async (e) => {
          if (isSignedIn) {
            await signOutOfGoogle();
            setIsSignedIn(false);
          } else {
            const { user } = await signInWithGoogle();
            setIsSignedIn(true);
          }
        }}
      >
        {isSignedIn ? "Sign Out" : "Sign In"}
      </button>
    </div>
  );
}

export default App;
