import { TButtonContainedProps } from "@/hooks/components/button/contained/useButtonContained";
import { Button } from "@mui/material";

export default function ButtonContained(props: TButtonContainedProps): JSX.Element {
  return (
    <Button 
      sx={props.style} 
      variant="contained" 
      type={props.type} 
      onClick={props.onClick}
    >
      {props.value ?? props.children}
    </Button>
  );
}
