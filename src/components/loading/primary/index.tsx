import { TLoadingPrimaryProps, useLoadingPrimary } from "@/hooks/components/loading/primary/useLoadingPrimary";
import { ArrowCounterClockwise } from "@phosphor-icons/react";

export default function LoadingPrimary(props: TLoadingPrimaryProps): JSX.Element {
  const { rotateStyle, iconStyle, divStyle } = useLoadingPrimary(props);

  return (
    <div style={divStyle}>
      <style>{rotateStyle}</style>

      <ArrowCounterClockwise style={iconStyle} size={props.size ?? 32} />
    </div>
  )
}