import { TTabPrimaryProps, useTabPrimary } from "@/hooks/components/tab/primary/useTabPrimary";
import { Box, Tab, Tabs } from "@mui/material";

export default function TabPrimary(props: TTabPrimaryProps): JSX.Element {
  const { value, handleChange, a11yProps } = useTabPrimary(props);

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
