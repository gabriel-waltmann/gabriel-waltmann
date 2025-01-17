import { CSSProperties } from "react";

export type TLoadingPrimaryProps = Readonly<{
  size?: number,
  style?: CSSProperties
}>

export function useLoadingPrimary(props: TLoadingPrimaryProps) {
  const rotateStyle = `
    @keyframes infiniteRotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-360deg);
      }
    }
  `;

  const iconStyle: CSSProperties = {
    animation: 'infiniteRotate .8s linear infinite',
  };

  const divStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    ...props.style,
  }

  return {
    rotateStyle,
    iconStyle,
    divStyle,
  };
}