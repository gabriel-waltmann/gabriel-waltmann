import { TButtonFileProps, useButtonFile } from "@/hooks/components/button/file/useButtonFile";
import { Button } from "@mui/material";

export default function ButtonFile(props: TButtonFileProps): JSX.Element {
  const { style } = useButtonFile(props);

  return (
    <Button
      variant="contained"
      component="label"
      sx={style}
    >
      <span>{props.label ?? "ADICIONAR ARQUIVOS"}</span>

      <input
        onChange={props.onChange}
        type="file"
        hidden
      />
    </Button>
  )
}