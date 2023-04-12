import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import MenuIcon from '@mui/icons-material/Menu';
import Typography from "@mui/material/Typography";

const HeaderMenu = ({ variant, ...props }) => {
  const [open, setOpen] = useState(false);

  return (
    <Grid container justifyContent="flex-start" alignItems="center">
   
        <Drawer className="header__menu"
          variant={variant}
          {...props}
          open={open}
          onClose={() => setOpen(false)}
        >

            <Box className="header__menutop">
              <Card className="header__avatar">
                <Box>
                    <Avatar className="header__imgavatar" variant="rounded" src="img/avavtar.png" />
                    <Typography className="header__name">Đức đẹp trai</Typography>
                    
                   
                
                </Box>
                
                
                </Card>
          <List className="header__menulist">


            <ListItem className="header__menuitem" onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItem
                  component={Link}
                 
                  to="/"
                >
                  <HomeIcon/> Profile của tôi
                </ListItem>
              </ListItemIcon>
            </ListItem>
            <ListItem className="header__menuitem" onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItem
                  component={Link}
                 
                  to="/about"
                >
                  <InfoIcon/>
                 Tin nhắn
                </ListItem>
              </ListItemIcon>
            </ListItem>
            <ListItem className="header__menuitem" onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItem
                  component={Link}
                 
                  to="/contact"
                >
                  <ContactsIcon/> Lịch
                </ListItem>
              </ListItemIcon>
            </ListItem>

            <ListItem className="header__menuitem" onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItem
                  component={Link}
                 
                  to="/"
                >
                  <HomeIcon/> Đã lưu
                </ListItem>
              </ListItemIcon>
            </ListItem>
            <ListItem className="header__menuitem" onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItem
                  component={Link}
                 
                  to="/about"
                >
                  <InfoIcon/>
                 Liên hệ với chúng tôi
                </ListItem>
              </ListItemIcon>
            </ListItem>
            <ListItem className="header__menuitem" onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItem
                  component={Link}
                 
                  to="/contact"
                >
                  <ContactsIcon/> Cài đặt
                </ListItem>
              </ListItemIcon>
            </ListItem>

            <ListItem className="header__menuitem" onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItem
                  component={Link}
                 
                  to="/about"
                >
                  <InfoIcon/>
                 Trợ giúp & FAQs
                </ListItem>
              </ListItemIcon>
            </ListItem>
            <ListItem className="header__menuitem" onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItem
                  component={Link}
                 
                  to="/contact"
                >
                  <ContactsIcon/> Đăng xuất
                </ListItem>
              </ListItemIcon>
            </ListItem>
          </List>
          </Box>
          <Box className="header__menubottom">
          <Button variant="contained" startIcon={<DeleteIcon />}>
          Upgrade Pro
          </Button>
          </Box>
      
        </Drawer>
     

    
        <Button className="header__menuclick" onClick={() => setOpen(!open)}>
           <span> {open ? "Hide" : "Show"}</span> <MenuIcon />
        </Button>
    
    </Grid>
  );
};

export default HeaderMenu;