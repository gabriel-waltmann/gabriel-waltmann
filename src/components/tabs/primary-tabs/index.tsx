import IndexLayout from "@/layouts";
import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";

type TabPanelProps = Readonly<{
  children?: React.ReactNode;
  index: number;
  value: number;
}>
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export interface TPrimaryTab {
  label: string,
  value: number,
  component: React.ReactNode
}
type TProps = Readonly<{
  tabs: TPrimaryTab[],
  tab: number
}>;

export default function PrimaryTabs(props: TProps) {
  const [value, setValue] = useState(0);
  const [tabs, setTabs] = useState<TPrimaryTab[]>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    setTabs(props.tabs)
  }, [])

  return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="basic tabs example">
            {props.tabs.map((tab) => <Tab key={tab.value} label={tab.label} {...a11yProps(tab.value)} />)}
          </Tabs>
        </Box>
        {props.tabs.map((tab) => (
          <CustomTabPanel value={value} index={tab.value} key={tab.value}>
            {tab.component}
          </CustomTabPanel>
        ))}
      </Box>
  )
}