import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";

const DrawerNavigate = ({ variant, ...props }) => {
  const [open, setOpen] = useState(false);

  return (
    <Grid container justifyContent="flex-start" alignItems="center">
   
        <Drawer
          variant={variant}
          {...props}
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              backgroundColor: "#3749ad",
              width: 500,
            },
          }}
        >
          <List>
            <ListItem button onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItem
                  component={Link}
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: "bolder",
                  }}
                  to="/"
                >
                  <HomeIcon sx={{ color: "white" }} /> Home
                </ListItem>
              </ListItemIcon>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItem
                  component={Link}
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: "bolder",
                  }}
                  to="/about"
                >
                  <InfoIcon sx={{ color: "white" }} />
                  About Us
                </ListItem>
              </ListItemIcon>
            </ListItem>
            <ListItem button onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItem
                  component={Link}
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontWeight: "bolder",
                  }}
                  to="/contact"
                >
                  <ContactsIcon sx={{ color: "white" }} /> Contact Us
                </ListItem>
              </ListItemIcon>
            </ListItem>
          </List>
        </Drawer>
     

    
        <Button onClick={() => setOpen(!open)}>
           <span> {open ? "Hide" : "Show"}</span> Drawer
        </Button>
    
    </Grid>
  );
};

export default DrawerNavigate;