import './App.css';
import Home from './Screens/Home';
import Navbar from './Components/Navbar/Navbar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import { useEffect, useState } from 'react';
import MobileNavbar from './Components/Navbar/MobileNavbar';
import AllTournaments from './Screens/AllTournaments';
import AllGames from './Screens/AllGames';
import SignUp from './Screens/SignUp';
import Login from './Screens/Login';
import Settings from './Screens/Settings';
import Matches from './Screens/Matches';
import { useHistory } from 'react-router-dom';
import MainPro from './Screens/Profile Page/MainPro';
import IndividualGame from './Screens/IndividualGame';


function App() {
  const [width, setwidth] = useState(window.innerWidth)
  const history = useHistory();
  useEffect(() => {
      const widthHandler = () => {
        setwidth(window.innerWidth)
      }
      window.onresize=widthHandler
  }, [width])

  
  console.log(width)
  return (
      <Router>
        {
          width> '800' ?
          <Navbar></Navbar>
          :
          <MobileNavbar></MobileNavbar>
          
        }
        <Switch>
          <Route exact path='/' component={Home} /> 
          {/* <Login ></Login> */}
          <Route path='/tournament'  ><AllTournaments width={width}></AllTournaments></Route>
          <Route path='/games'  ><AllGames width={width}></AllGames></Route>
          <Route path='/signup'  ><SignUp width={width}></SignUp></Route>
          <Route path='/login'  component={Login} />
          <Route path='/settings'  ><Settings width={width}></Settings></Route>
          <Route path='/matches'  ><Matches width={width}></Matches></Route>
          <Route path='/profile/:id'  > <MainPro /> </Route>
          {/* <Route path='/indigame'  ><IndividualGame width={width}></IndividualGame></Route> */}
          <Route path='/:game/:ind'  ><IndividualGame width={width}></IndividualGame></Route>
          {/* <Route exact path="/:game/:ind" component={Indgames} /> */}
        </Switch>
        <Footer></Footer>
      </Router>
  );
}

export default App;
