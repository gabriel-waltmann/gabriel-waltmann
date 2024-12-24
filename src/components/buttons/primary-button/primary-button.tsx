import { CSSProperties } from "react"

const buttonStyle: CSSProperties = {
  paddingRight: "1rem",
  paddingLeft: "1rem",
  backgroundColor: "#121212",
  color: "#fff",
  borderRadius: "24px",
  fontSize: "1rem",
  fontWeight: "bold",
  border: "none"
}

type TProps = Readonly<{ value: string }>
export default function PrimaryButton(props: TProps) {
  return (
    <button style={buttonStyle}>{props.value}</button>
  )
}