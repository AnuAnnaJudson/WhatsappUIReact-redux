import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileSharpIcon from "@mui/icons-material/AttachFileSharp";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

export default function BottomAppBar(props) {
  const { drawerWidth } = props;
  return (
    <React.Fragment style={{ backgroundColor: "black" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#EDEDED",
        }}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <InsertEmoticonIcon style={{ color: "#696969" }} />
            <AttachFileSharpIcon
              style={{ color: "#696969", fontStyle: "oblique" }}
            />
          </IconButton>

          <Grid
            style={{
              backgroundColor: "white",
              padding: "8px",
              borderRadius: "50px",
              width: "100%",
            }}
          >
            <TextField
              variant="standard"
              fullWidth="true"
              color="info"
              style={{
                borderRadius: "10px",
                backgroundColor: "white",
                border: "0 none",
              }}
              placeholder="Type spmething here..."
              
              
            />
          </Grid>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <KeyboardVoiceIcon style={{ color: "#696969" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
