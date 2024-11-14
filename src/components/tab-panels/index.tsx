'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { usePathname } from 'next/navigation'

export interface TabPanelProps {
  value: number,
  label: string;
  href: string;
}

export default function TabPanels(props: Readonly<{tabs: TabPanelProps[]}>) {  
  const pathname = usePathname();
  const tab = props.tabs.find(tab => tab.href === pathname);
  const [tabValue, setTabValue] = React.useState(tab ? tab.value : 0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    const newTab = props.tabs.find(tab => tab.value === newValue);
    if (newTab) {
      setTabValue(newValue);

      setTimeout(() => {
        window.location.href = newTab.href;
      }, 120);
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={tabValue} 
          onChange={handleChange} 
          textColor="primary"
          centered
        >
          {props.tabs.map((tab) => 
            <Tab 
              label={tab.label} 
              value={tab.value} 
              key={tab.value+'tab'} 
            />
          )}
        </Tabs>
      </Box>
    </Box>
  );
}