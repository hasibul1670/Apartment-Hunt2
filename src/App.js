import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './Components/Home/HomePage/Homepage';
import Login from './Components/Login/Login';
import CreateAccount from './Components/CreateAccount/CreateAccount';
import Booking from './Components/Booking/Booking';
function App() {
  return (
<Router>
<Switch>

<Route path="/home"> <Homepage></Homepage> </Route>
<Route path="/login"> <Login></Login> </Route>
<Route path="/booking"> <Booking></Booking> </Route>
<Route path="/createaccount"> <CreateAccount></CreateAccount> </Route>


<Route path="/"> <Homepage></Homepage> </Route>
</Switch>
</Router>
   
    
  );
}

export default App;
