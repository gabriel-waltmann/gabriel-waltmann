import { TButtonContainedProps, useButtonContained } from "@/hooks/components/button/contained/useButtonContained";
import { Button } from "@mui/material";

export default function ButtonContained(props: TButtonContainedProps): JSX.Element {
  const { onClick, style } = useButtonContained(props);

  return (
    <Button
      sx={style} 
      variant="contained" 
      type={props.type} 
      onClick={onClick}
    >
      {props.value ?? props.children}
    </Button>
  );
}
