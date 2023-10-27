import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import FontAwesomeSvgIconDemo from "../Components/Icons";
import Avatar from "@mui/material/Avatar";
import { Grid } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import BottomAppBar from "./BottomAppBar";
import { ChatArea } from "./ChatArea";
import { Chats } from "./Chats";
import { Route, Routes,Link } from "react-router-dom";
import {data} from "../App"
import { useState } from "react"
import { SidebarSearch } from "./SidebarSearch";
const drawerWidth = 400;


function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [bgChange,setBgChange]=React.useState(false)
  const [nameValue,setNameValue]=useState("")


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleAllChanges=(text)=>{
    setBgChange(true)
    setNameValue({name:text.name,image:text.image})
  }
  

  const drawer = (
    <div >
      <Toolbar style={{ backgroundColor: "#EDEDED" }}>
        <FontAwesomeSvgIconDemo />
      </Toolbar>

      <Divider />
      <List style={{ paddingTop: "0px" }}>
        <Box style={{ backgroundColor: "#9de1fe" }}>
          <ListItem>
            <Avatar
              alt="Remy Sharp"
              src="https://thumbs.dreamstime.com/b/notification-bell-icons-copy-bells-set-minimalistic-design-incoming-messages-concept-do-not-disturbe-icon-alarm-109571779.jpg"
              sx={{ width: 56, height: 56 }}
              style={{ marginLeft: 0 }}
            />
            <Box>
              <ListItemText
                primary={"Get notified of new messages"}
                secondary={"Turn on Desktop notifications >"}
                style={{
                  marginBottom: 0,
                  fontSize: "10px",
                  padding: "8px",
                }}
              />
              <Box style={{ fontSize: "12px" }}>{}</Box>
            </Box>
          </ListItem>
        </Box>
       {/* searchBar */}
       <SidebarSearch/>
        <Divider />

        {data.map((text, index) => (
        
          <ListItem button key={text.name} component={Link} to={`/chat/${text.name}`} onClick={()=>handleAllChanges({name:text.name,image:text.img})} style={{textDecoration:"none"}}>
            <ListItemIcon>
              <Avatar
                alt="Remy Sharp"
                src={text.img}
                style={{ marginLeft: 0 }}
              />
            </ListItemIcon>

            <Grid container display={"flex"} justifyContent={"space-between"}>
              <Grid>
                <Box>
                  <ListItemText
                    primary={text.name}
                    style={{ marginBottom: 0, padding: 0 ,textDecoration:"none"}}
                  />
                  <Box style={{ fontSize: "12px" }}>
                    <DoneAllIcon fontSize="12px" />
                    {text.sent}
                  </Box>
                </Box>
              </Grid>
              <Grid>
                <p
                  style={{
                    marginLeft: "50px",
                    fontSize: "10px",
                    color: "grey",
                  }}
                >
                  {text.date}
                </p>
              </Grid>
            </Grid>
          </ListItem>

          
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    //bg image for chat
    <Box sx={{ display: "flex" }} style={bgChange?{backgroundImage:`url("https://cdn.wallpapersafari.com/54/0/HluF7g.jpg")`,height:"100pc"}:{backgroundImage:`url("img/watsappbg.png")`,position:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",width: { sm: `calc(100% - ${drawerWidth}px)` },height:"40pc",marginLeft:"17.3pc"}}> 
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#EDEDED",
        }}
      >
        {/* chat area */}
       {bgChange? <ChatArea handleDrawerToggle={handleDrawerToggle} nameValue={nameValue}/>:""}
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* chats */}
       <Routes>
        <Route path="/" element={""}/>
        <Route path="/chat" element={""}/>
        <Route path="/chat/:name" element={<Chats/>}/>
       </Routes>

       {bgChange? <Toolbar>
          <BottomAppBar drawerWidth={drawerWidth}/>
        </Toolbar>:""}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
