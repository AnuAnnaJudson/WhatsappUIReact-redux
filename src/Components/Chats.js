import React from "react";
import { Grid, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

export const Chats = () => {
  const chat=useSelector(state => state.filteredData);
  const dispatch = useDispatch();
  const { name } = useParams();
  const [nameValue,setNameValue]=useState("")
  let newChat={}
  useEffect(() => {
    if(name!==nameValue){
      dispatch({ type: "updateChat", payload: name });
      setNameValue(name)
    }
  }, [name]);
 
  if(chat[0]){
    newChat=chat[0]
  }else{
    newChat={}
  }
  const {received,sent}=newChat;


  return (
    <>
      {console.log("ithanu chat", newChat)}
      <Grid container xs={12} style={{ display: "inline-flex" }}>
        <Grid item xs={6}>
          <Box
            style={{
              backgroundColor: "white",
              padding: "10px",
              marginTop: "100px",
              borderRadius: "10px",
              display: "inline-flex",
            }}
          >
            {received}
          </Box>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
      {sent?sent.map(((msgs)=>(<Grid container justifyContent={"space-between"}>
        <Grid item></Grid>

        <Grid item>
          <Box
            style={{
              backgroundColor: "#E3F6CB",
              padding: "10px",
              borderRadius: "10px",
              display: "inline-flex",
              marginTop:"2px"
            }}
          >
            {msgs}
          </Box>
        </Grid>
      </Grid>))):<h2>error</h2>}
    </>
  );
};
