import React from 'react';
import Navigation from "./components/navigation";
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import PageRenderer from "./pagerenderer";

function App() {




    const user={
        firstName:"Djafer",
        lastName:"Abdelhadi"
    };
  return (
      <div className="App"   >

          <Router>
              <Navigation user={user}/>


              <Switch >
                     <Route path={"/:page"} component={PageRenderer}/>
                     <Route path={"/"} render={()=><Redirect to={"/home"}/>}/>
                     <Route component={()=>404}/>
              </Switch>

          </Router>

      </div>


  );
}

export default App;
