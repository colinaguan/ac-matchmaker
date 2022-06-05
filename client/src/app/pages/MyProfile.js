import * as React from 'react';
import {useLocation} from 'react-router-dom';
import TabBar from '../components/_OLD_TabBar';
import Profile from '../components/Profile';
import Opportunities from '../components/_OLD_Opportunities';
import Calendar from '../components/_OLD_Calendar';

/**
 * creates the profile page
 * @return {HTML} my profile page
 */
export default function MyProfile() {
  const location = useLocation();
  const [tab, setTab] = React.useState(0);

  React.useEffect(() => {
    if (location.state != null) {
      console.log(location.state);
      setTab(location.state.tab);
    }
  }, [location.key, location.state]);

  const data = [
    {name: 'Profile', component: <Profile />},
    {name: 'Opportunities', component: <Opportunities />},
    {name: 'Calendar', component: <Calendar />},
  ];

  return (
    <div className='MyProfile'>
      <TabBar data={data} tab={tab} setTab={setTab}/>
    </div>
  );
}
