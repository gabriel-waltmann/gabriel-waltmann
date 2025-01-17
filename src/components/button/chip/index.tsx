import ButtonPrimary from "@/components/button/primary";
import useButtonChip, { TButtonChipProps } from "@/hooks/components/button/chip/useButtonChip";

export default function ButtonChip(props: TButtonChipProps): JSX.Element {
  const { 
    size, 
    IconElement, 
    buttonStyle,
  } = useButtonChip(props);

  return (
    <ButtonPrimary style={buttonStyle} onClick={props.onClick}>
      <span>{props.value}</span>

      <IconElement size={size} />
    </ButtonPrimary>
  )
}