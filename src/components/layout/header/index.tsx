import SocialLinks, { TSocialLinks } from "@/components/social-links";
import { Avatar, Box, Typography } from "@mui/material";

const socialLinks: TSocialLinks = {
  linkedinId: process.env.PUBLIC_LINKEDIN_ID,
  instagramId: process.env.PUBLIC_INSTAGRAM_ID,
  email: process.env.PUBLIC_EMAIL
}

export default function LayoutHeader() {
  return (
    <Box component="header" sx={{ display: 'flex', gap: '1rem' }}>
      <picture>
        <Avatar
          alt="Imagem de Gabriel Waltmann"
          src="/assets/images/avatar/avatar.jpg"
          sx={{ width: '120px', height: 'auto' }}
        />  
      </picture>

      <Box component="section" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography variant="h1">
          Gabriel Waltmann
        </Typography>

        <SocialLinks socialLinks={socialLinks} />
      </Box>  
    </Box>
  )
}