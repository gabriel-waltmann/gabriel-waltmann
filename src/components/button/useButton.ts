export type TButtonProps = Readonly<{
  value?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
}>;

export function useButton(props: TButtonProps) {}
