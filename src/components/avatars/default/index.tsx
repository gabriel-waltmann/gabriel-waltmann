import { TAvatarProps, useAvatarDefault } from "./useAvatarDefault";

export default function AvatarDefault(props: TAvatarProps) {
  const { figureStyle } = useAvatarDefault(props);

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
