import { Box } from "@mui/material";

export default function TabContainer(props: Readonly<{children: React.ReactNode}>) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
      {props.children}
    </Box>
  )
}