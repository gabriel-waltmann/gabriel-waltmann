import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import { Button, Divider, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Logo from '../Logo';
import { useState } from 'react';

const navItems = [
  {name: 'Sobrem mim ', link: '#about'}, 
  {name: 'Tecnologias ', link: '#techs'}, 
  {name: 'Projetos ', link: '#projects'}, 
  {name: 'Contato ', link: '#contact'},
];

interface Props {
  window?: () => Window;
  children?: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide 
    appear={false} 
    direction="down" 
    in={!trigger}
    >
      {children ? children : <span></span>}
    </Slide>
  );
}

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const MenuToggle = () =>  setMobileOpen((prevState) => !prevState)

  function MenuItem({name, href}: {name: string, href: string}) {
    return(
      <ListItem key={name} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} href={href}>
              <ListItemText primary={name} />
            </ListItemButton>
      </ListItem>
    )
  }

  const Menu = (
    <Box onClick={MenuToggle} sx={{ textAlign: 'center' }}>
      <Logo/>
      <Divider />
      <List>
        {navItems.map((item) => (
          <MenuItem name={item.name} href={item.link}/>
        ))}
      </List>
    </Box>
  );

  const container = window ? () => window().document.body : undefined;

  return (
    <Box id='header' >
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar component="nav" >
          <Toolbar className='toolbar'>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={MenuToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              &lt;Gabriel	&frasl;&gt;
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item.name} href={item.link} sx={{ color: '#fff' }}>
                  {item.name}
                </Button>
              ))}
            </Box>
            <Logo/>
          </Toolbar>
        </AppBar>

      </HideOnScroll>
      <Toolbar />
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={MenuToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {Menu}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        
      </Box>
    </Box>
  );
}