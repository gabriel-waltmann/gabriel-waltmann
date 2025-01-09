import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export interface TPrimaryTab {
  label: string;
  value: number;
}
type TProps = Readonly<{
  tabs: TPrimaryTab[];
  tab: number;
  onChange: (tab: number) => void;
}>;

export default function PrimaryTabs(props: TProps) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(props.tab);
  }, [props.tab]);

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {props.tabs.map((tab) => (
          <Tab
            onClick={() => props.onChange(tab.value)}
            key={tab.value}
            label={tab.label}
            {...a11yProps(tab.value)}
          />
        ))}
      </Tabs>
    </Box>
  );
}
