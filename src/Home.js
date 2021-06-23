import React from 'react';
import './Home.css';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';

function Home() {
    return (
        <div className="Background">
          <div className="Header_Container">
            <div className="Main_Heading">
              Candider
            </div>
            <div className="Sub_Heading">
              Real
              <div className="Header_Dot"></div>
              Honest
              <div className="Header_Dot"></div>
              Candid
            </div>
            <div className="Search_Container">
              <div className="Search_Link">
                <a href="/" >
                  <SearchIcon className="Search_Icon" fontSize="small"/>
                  <div className="Search_Text">
                    Search & ask
                  </div>
                </a>
              </div>
              <a href="/" className="Add_Icon" >
                <AddIcon fontSize="small"/>
              </a>
            </div>
          </div>
        </div>
    )
}

export default Home
