import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BasicModal from './modal';
import { motion } from "framer-motion";
// STYLING SECTION


//END OF STYLING SECTION


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
  delay: number;
}

const drawerWidth = 240;
// const navItems = ['Home', 'Exchange', 'Features', 'FAQ'];
const navItems: NavigationItem[] = [
  { name: 'Home', href: '#home-section', current: false, delay: 1 },
  { name: 'Exchange', href: '#exchange-section', current: false, delay: 2  },
  { name: 'Features', href: '#features-section', current: false , delay: 3 },
  { name: 'FAQ', href: '#faq-section', current: false, delay: 4  },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{
      textAlign: 'center',
      height: "100%",
      color: "white",
      backgroundImage: "linear-gradient(90deg,  #1ee8b6 0%, #050A0A 97.15%)",
      backgroundColor: "#252525",
      backgroundBlendMode: "overlay",
      opacity: "1.9",
      boxShadow: "0 15px 30px rgba(0, 0, 0, 0.12)",
      transition: "0.4s linear",
      zIndex: "40",
    }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        CryptoMania
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton href={item.href} sx={{ textAlign: 'center' }} className={classNames(
                item.current ? 'bg-gray-900' : ' text-white hover:text-offwhite hover-underline',
                'rounded-md font-normal')} >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
           <BasicModal/>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{
        width: "100%",
        backgroundImage: "linear-gradient(90deg, #1ee8b6 0%, #050A0A 97.15%)",
        backgroundColor: "#252525",
        backgroundBlendMode: "overlay",
        opacity: "1.9",
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.12)",
        transition: "0.4s linear",
        zIndex: "40",

      }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           <motion.div initial={{x: -200}} animate={{x: 0}} transition={{duration: 2}}> CryptoMania </motion.div>
          </Typography>
         
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item, i) => (
              <motion.div className="inline-block" initial={{x: "100vw"}} animate={{x: 0}} transition={{duration: 2, delay: (i*0.5)}} key={item.name}><Button key={item.name} href={item.href} className={classNames(
                item.current ? 'bg-gray-900' : ' text-white hover:text-offwhite hover-underline',
                'rounded-md font-normal'
              )} sx={{ color: '#fff' }}>
                {item.name}
              </Button> </motion.div>
            ))}
           <motion.div className='inline-block' initial={{x:"100vw"}} animate={{x: 0}} transition={{duration:2, delay:2}} ><BasicModal/></motion.div> 
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />

      </Box>
    </Box >
  );
}