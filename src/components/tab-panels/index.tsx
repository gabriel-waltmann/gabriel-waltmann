'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import LinkTab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { usePathname } from 'next/navigation'

export interface TabPanelProps {
  label: string;
  href: string;
}

export default function TabPanels(props: {tabs: TabPanelProps[]}) {  
  const pathname = usePathname();

  const tab = props.tabs.findIndex(tab => tab.href === pathname);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue)
}

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={tab} 
          onChange={handleChange} 
          textColor="primary"
          centered
        >
          {props.tabs.map((tab, index) => 
            <LinkTab label={tab.label} href={tab.href} key={index+'tab'} />
          )}
        </Tabs>
      </Box>
    </Box>
  );
}