import { CSSProperties } from "react"

type TProps = Readonly<{
  children?: React.ReactNode, 
  value?: string, 
  styles?: CSSProperties 
}>

export default function TypographySubtitle(props: TProps) {
  if (props.value) {
    return (
      <h4>{props.value}</h4>
    )
  }

  return (
    <h1>
      {props.children}
    </h1>
  )
}