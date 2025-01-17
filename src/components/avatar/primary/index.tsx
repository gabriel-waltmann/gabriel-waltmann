import { TAvatarProps, useAvatarPrimary } from "@/hooks/components/avatar/primary/useAvatarPrimary";

export default function AvatarPrimary(props: TAvatarProps) {
  const { figureStyle } = useAvatarPrimary(props);

  return (
    <figure style={figureStyle}>
      <img
        src={props.src}
        height="100%"
        width="100%"
        alt="Gabriel Waltmann's profile"
      />
    </figure>
  );
}
