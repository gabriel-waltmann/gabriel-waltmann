import { Button } from "@mui/material"

type TProps = Readonly<{ 
  value?: string,
  children?: React.ReactNode
  onClick?: () => void,
  type?: "submit" | "button" | "reset"
 }>

export default function PrimaryButton(props: TProps): JSX.Element {
  return (
    <Button variant="contained" type={props.type} onClick={props.onClick}>
      {props.value ?? props.children}
    </Button>
  )
}