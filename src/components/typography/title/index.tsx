import { CSSProperties } from "react"

type TProps = Readonly<{
  children?: React.ReactNode, 
  value?: string, 
  styles?: CSSProperties 
}>

export default function TypographyTitle(props: TProps) {
  if (props.value) {
    return (
      <h1>{props.value}</h1>
    )
  }

  return (
    <h1>
      {props.children}
    </h1>
  )
}