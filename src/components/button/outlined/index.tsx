import { TButtonOutlinedProps, useButtonOutlined } from "@/hooks/components/button/outlined/useButtonOutlined";
import { Button } from "@mui/material";

export default function ButtonOutlined(props: TButtonOutlinedProps): JSX.Element {
  const { style, type, onClick } = useButtonOutlined(props);

  return (
    <Button variant="outlined" sx={style} type={type} onClick={onClick}>
      {props.value ?? props.children}
    </Button>
  );
}
