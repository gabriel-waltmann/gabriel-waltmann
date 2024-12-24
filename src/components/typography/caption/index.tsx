import { CSSProperties } from "react"

type TProps = Readonly<{
  children?: React.ReactNode, 
  value?: string, 
  styles?: CSSProperties 
}>

export default function TypographyCaption(props: TProps) {
  if (props.value) {
    return (
      <span>{props.value}</span>
    )
  }

  return (
    <h1>
      {props.children}
    </h1>
  )
}