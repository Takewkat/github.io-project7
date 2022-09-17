/*import React from "react";
import { useContext } from "react";

const TopBar: React.FunctionComponent = observer(() => {

  return (
    <div> 
      {user.isAuth 
        ? <div>
            <h1>Profile</h1>
            <h1>Home</h1>
            <button onClick={() => user.setIsAuth(false)}>Log out</button>
          </div>
        : <div><button onClick={() => user.setIsAuth(true)}>Log in</button></div>
      }
    </div>
  )
})

export default TopBar;*/

import React from "react";

const TopBar: React.FunctionComponent = () => {
  return (
    <div>
      1 step : TopBar
    </div>
  );
}

export default TopBar;