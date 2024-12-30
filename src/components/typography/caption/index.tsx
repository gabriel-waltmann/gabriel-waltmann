import { CSSProperties } from "react"

type TProps = Readonly<{
  children?: React.ReactNode, 
  value?: string, 
  styles?: CSSProperties 
}>

export default function TypographyCaption(props: TProps) {
  const style: CSSProperties = { ...props.styles, fontSize: "16px" };

  return (
    <span style={style}>{props.value ?? props.children}</span>
  )
}