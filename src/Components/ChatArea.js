import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import { Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const ChatArea = (props) => {
  const { handleDrawerToggle,nameValue } = props;
  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      {/* avatr and chat body */}
      {console.log("entha varathe",nameValue.image)}
      <Grid container display={"flex"} justifyContent={"space-between"}>
        <Grid>
          <IconButton>
            <Avatar src={nameValue.image}/>
            <Typography>
              <Box
                style={{
                  color: "black",
                  padding: "10px",
                }}
              >
                {nameValue.name}
              </Box>
            </Typography>
          </IconButton>
        </Grid>
        <Grid>
          <IconButton style={{ padding: "15px" }}>
            <SearchIcon style={{ marginRight: "10px" }} />
            <MoreVertIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Toolbar>
  );
};
