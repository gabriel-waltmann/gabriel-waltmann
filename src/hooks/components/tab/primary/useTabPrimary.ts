import { TabPrimaryEntity } from "@/entities/components/tab/TabPrimaryEntity";
import { useEffect, useState } from "react";

export type TTabPrimaryProps = Readonly<{
  tabs: TabPrimaryEntity[];
  tab: number;
  onChange: (tab: number) => void;
}>

export function useTabPrimary(props: TTabPrimaryProps) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  useEffect(() => {
    setValue(props.tab);
  }, [props.tab]);

  return {
    value,
    handleChange,
    a11yProps
  };
}