import React, { useState, useEffect } from 'react'
import './MobileMenu.css'
import { ArrowDropDown } from '@material-ui/icons'
import { Link } from 'react-router-dom'
function MobileMenu({menuOn, off}) {
    const [LoggedIn, setLoggedIn] = useState(false);
    // eslint-disable-next-line
    const [name, setname] = useState("");
    const [id, setid] = useState("");
    function signout() {
        localStorage.removeItem("token");
        window.location.href = "/";
      }

    useEffect(() => {
        const callAPI = async () => {
                 var tok = localStorage.getItem("token");
                 console.log("token check in navbar",tok)
                 if(tok){
                     setLoggedIn(true)
                     var name = localStorage.getItem("name");
                     setname(name);
                     var id = localStorage.getItem("userdata")
                    setid(id);
                 }}
                 callAPI()
     }, [])
    return (<>

        {
            LoggedIn?

            <div className='menu-cont' style={menuOn?{display:'flex'}:{display:'none'}}>
            <div className='ico-title'>
                <img src='/icons/search.png' height='20px' alt='icon'></img>
                <div className='title'>Find players/Teams</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/home.png' height='20px' alt='icon'></img>
                <div className='title'>Home</div>
            </div>
            <Link onClick={off} className='ico-title' to='/tournament'>
                <img src='/icons/trophy.png' height='20px' alt='icon'></img>
                <div className='title'>Tournaments</div>
            </Link>
            <Link onClick={off} className='ico-title' to='/games'>
                <img src='/icons/trophy.png' height='20px' alt='icon'></img>
                <div className='title'>Games</div>
            </Link>
            <div className='ico-title'>
                <img src='/icons/Calendar.png' height='20px' alt='icon'></img>
                <div className='title'>Timed Events</div>
            </div>
            <div className='ico-title'>
                <img  src='/icons/avatar.png' alt='avatar' height='20px'></img>
                <div>
                <div className='title'>
                    <Link to={`/profile/${id}`}>   View Profile </Link> </div>
                </div>
            </div>
            <div className='ico-title'>
                <img src='/icons/dollar.png' height='20px' alt='icon'></img>
                <div className='title'>Cash Matches</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/chart.png' height='20px' alt='icon'></img>
                <div className='title'>Leaderboards</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/news.png' height='20px' alt='icon'></img>
                <div className='title'>News</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/profits.png' height='12px' alt='icon'></img>
                <div className='title'>Stats Tracker</div>
            </div>
            <Link onClick={off} to='/settings' className='ico-title'>
                <img src='/icons/profits.png' height='12px' alt='icon'></img>
                <div className='title'>Settings</div>
            </Link>
            <div className='ico-title'>
                <img src='/icons/Help.png' height='20px' alt='icon'></img>
                <div className='title'>FAQ</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/Help.png' height='20px' alt='icon'></img>
                <div className='title' onClick={() => signout()}>Signout</div>
            </div>
            <div className='lang' style={{paddingLeft:'20px', marginTop:'15vh'}}>
                <button>
                    <img src='/icons/flag.png' alt='flag'></img>
                    <div>English</div>
                    <ArrowDropDown></ArrowDropDown>
                </button>
            </div>
        </div>
            :

            <div className='menu-cont' style={menuOn?{display:'flex'}:{display:'none'}}>
            <div className='ico-title'>
                <img src='/icons/search.png' height='20px' alt='icon'></img>
                <div className='title'>Find players/Teams</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/home.png' height='20px' alt='icon'></img>
                <div className='title'>Home</div>
            </div>
            <Link onClick={off} className='ico-title' to='/tournament'>
                <img src='/icons/trophy.png' height='20px' alt='icon'></img>
                <div className='title'>Tournaments</div>
            </Link>
            <Link onClick={off} className='ico-title' to='/games'>
                <img src='/icons/trophy.png' height='20px' alt='icon'></img>
                <div className='title'>Games</div>
            </Link>
            <div className='ico-title'>
                <img src='/icons/Calendar.png' height='20px' alt='icon'></img>
                <div className='title'>Timed Events</div>
            </div>
            {/* <div className='ico-title'>
                <img  src='/icons/avatar.png' alt='avatar' height='20px'></img>
                <div>
                <div className='title'>
                    <Link to="/profile">   View Profile </Link> </div>
                </div>
            </div> */}
            <div className='ico-title'>
                <img src='/icons/dollar.png' height='20px' alt='icon'></img>
                <div className='title'>Cash Matches</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/chart.png' height='20px' alt='icon'></img>
                <div className='title'>Leaderboards</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/news.png' height='20px' alt='icon'></img>
                <div className='title'>News</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/profits.png' height='12px' alt='icon'></img>
                <div className='title'>Stats Tracker</div>
            </div>
            {/* <Link onClick={off} to='/settings' className='ico-title'>
                <img src='/icons/profits.png' height='12px' alt='icon'></img>
                <div className='title'>Settings</div>
            </Link> */}
            <div className='ico-title'>
                <img src='/icons/Help.png' height='20px' alt='icon'></img>
                <div className='title'>FAQ</div>
            </div>
            <div className='lang' style={{paddingLeft:'20px', marginTop:'15vh'}}>
                <button>
                    <img src='/icons/flag.png' alt='flag'></img>
                    <div>English</div>
                    <ArrowDropDown></ArrowDropDown>
                </button>
            </div>
        </div>
            

        }
{/* 
        <div className='menu-cont' style={menuOn?{display:'flex'}:{display:'none'}}>
            <div className='ico-title'>
                <img src='/icons/search.png' height='20px' alt='icon'></img>
                <div className='title'>Find players/Teams</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/home.png' height='20px' alt='icon'></img>
                <div className='title'>Home</div>
            </div>
            <Link onClick={off} className='ico-title' to='/tournament'>
                <img src='/icons/trophy.png' height='20px' alt='icon'></img>
                <div className='title'>Tournaments</div>
            </Link>
            <div className='ico-title'>
                <img src='/icons/Calendar.png' height='20px' alt='icon'></img>
                <div className='title'>Timed Events</div>
            </div>
            <div className='ico-title'>
                <img  src='/icons/avatar.png' alt='avatar' height='20px'></img>
                <div>
                <div className='title'>
                    <Link to="/profile">   View Profile </Link> </div>
                </div>
            </div>
            <div className='ico-title'>
                <img src='/icons/dollar.png' height='20px' alt='icon'></img>
                <div className='title'>Cash Matches</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/chart.png' height='20px' alt='icon'></img>
                <div className='title'>Leaderboards</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/news.png' height='20px' alt='icon'></img>
                <div className='title'>News</div>
            </div>
            <div className='ico-title'>
                <img src='/icons/profits.png' height='12px' alt='icon'></img>
                <div className='title'>Stats Tracker</div>
            </div>
            <Link onClick={off} to='/settings' className='ico-title'>
                <img src='/icons/profits.png' height='12px' alt='icon'></img>
                <div className='title'>Settings</div>
            </Link>
            <div className='ico-title'>
                <img src='/icons/Help.png' height='20px' alt='icon'></img>
                <div className='title'>FAQ</div>
            </div>
            <div className='lang' style={{paddingLeft:'20px', marginTop:'15vh'}}>
                <button>
                    <img src='/icons/flag.png' alt='flag'></img>
                    <div>English</div>
                    <ArrowDropDown></ArrowDropDown>
                </button>
            </div>
        </div> */}

        </>
    )
}

export default MobileMenu
