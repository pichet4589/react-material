import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Contents from "./Contents";

const Img = "/image/logo.png";

function Layout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid item xs={24}>
        <Navbar>head</Navbar>

        <Sider>
          <img src={Img} />
        </Sider>

        <Contents />
      </Grid>
    </Box>
  );
}

export default Layout;

const Navbar = styled("div")(({ theme }) => ({
  textAlign: "center",
  height: "60px",
  background: "#134B8A",
  borderRadius: "0px",
}));

const Sider = styled("div")(({ theme }) => ({
  textAlign: "center",
  height: "1456px",
  width: "90px",
  borderRadius: "0 50px 50px 0",
  position: "absolute",
  top: "0px",
  backgroundColor: "#fff ",
  boxShadow: "0 10px 10px RGBA(0,0,0,0.25)",
  paddingTop: "20px",
}));
