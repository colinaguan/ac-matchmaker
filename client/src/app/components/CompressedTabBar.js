// import React, {useState} from 'react';
import React from 'react';
import {Tabs, Tab} from '@mui/material';
import '../stylesheets/MyProfile.css';

/**
 * Creates reusable tab bar
 * @param {object} data tab information (title, component)
 * @param {int} tab default tab
 * @param {*} setTab function to switch tab
 * @return {HTML} Tab bar component
 */
export default function CompressedTabBar({data, tab, setTab}) {
  const handleTabs = (_, value) => {
    setTab(value);
  };

  const TabStyles = {
    height: '4rem',
    textTransform: 'none',
    fontFamily: 'Montserrat',
    fontWeight: '600',
    fontSize: '0.85rem',
    letterSpacing: '-0.015em',
    color: 'var(--text-gray)',
  };

  return (
    <div
      className='tab-container'
      style={{
        height: '3.5em',
        width: 'auto',
        paddingLeft: '3em',
        borderBottom: '0.5px solid rgba(0, 0, 0, 0.15)',
      }}
    >
      <Tabs
        value={tab}
        onChange={handleTabs}
        indicatorColor='primary'
        sx={{
          '.MuiTabs-indicator': {
            height: '4px',
            bottom: '4px',
          },
          'height': 'auto',
          'width': '100%',
        }}
      >
        {data.filter(Boolean).map((object) => (
          <Tab
            key={`tab-id-${Math.random()}`}
            label={object.name}
            sx={TabStyles}
            disableRipple
          />
        ))}
      </Tabs>
    </div>
  );
}
