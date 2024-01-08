import React, { useState } from 'react'
import Home from '../components/Home/Home';
import Event from '../components/Home/Event';
import Promotion from '../components/Home/Promotion';
import Walllet from '../components/Home/Walllet';
import Profile from '../components/Home/Profile';
import HomeHeader from '../components/Home/HomeHeader';
import HomeFooter from '../components/Home/HomeFooter';


function HomePage() {

  const [selectedSection, setSelectedSection] = useState(0); // Default section

  const onNavigationChange = (newValue) => {
    console.log("button change" + newValue)
    setSelectedSection(newValue);
  };

  const renderSection = () => {
    console.log('hi inside render section')
    switch (selectedSection) {
      case 0:
        return <Home/>;
      case 1:
        return (
          <Event/>
        );
      case 2:
        return <Promotion />;
      case 3:
        return <Walllet />;
      case 4:
        return <Profile />;
      default:
        return null;
    }
  };

  return (
    <>
      <HomeHeader />
      {renderSection()}
      <HomeFooter onNavigationChange={onNavigationChange} />
    </>
  )
}

export default HomePage