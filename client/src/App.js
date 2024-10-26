import {Helmet} from 'react-helmet'
import './App.css';
import Sidebar from './Sidebar';
import { createGlobalStyle } from 'styled-components';
import { useState } from "react";
import Zitate from './Zitate';
import Abimotto from './Abimotto';
import Pausenverkauf from './Pausenverkauf';
import MenuToggle from './MenuToggle';


const GlobalStyles = createGlobalStyle`
  html {
    --sidebar-background: #161A2D;
  }
`;

function App() {
  const [sidebarIndex, setSidebarIndex] = useState(0);
  const [sidebarState, setSidebarState] = useState(false);

  let page;
  switch (sidebarIndex) {
    case 0:
      page = <Zitate />
      break;
    case 1:
      page = <Abimotto />
      break;
    case 2:
      page = <Pausenverkauf />
      break;
    default:
      break;
  }

  let pageShadow;
  if (sidebarState) {
    pageShadow = <div className='page-shadow' onClick={() => {if (sidebarState) setSidebarState(false)}}></div>
  }

  return (
    <>
      <Helmet>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
      </Helmet>
      <GlobalStyles />
      <div className="App">
      <Sidebar linkIndex={sidebarIndex} setLinkIndex={setSidebarIndex} sidebarState={sidebarState} setSidebarState={setSidebarState}></Sidebar>
      {pageShadow}
      <MenuToggle sidebarState={sidebarState} setSidebarState={setSidebarState}/>
      <div className="mainContent">
        {page}
      </div>
      </div>
    </>
  );
}

export default App;
