import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import TextField from "@mui/material/TextField";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Brightness1Icon from "@mui/icons-material/Brightness1";
import SearchIcon from "@mui/icons-material/Search";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import JsonFile from "./json/example_data.json";

const mockSelect = [
  { key: 1, data: "Restaurant" },
  { key: 2, data: "Bakery" },
  { key: 3, data: "Cafe" },
];
const today = new Date().toLocaleString("en-us", {
  weekday: "long",
});

function Contents() {
  const [textSearch, setTextSearch] = useState("");
  const [textSelect, setTextSelect] = useState("");

  const onShowDetails = (item) => {
    console.log("event", item.target.value);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setTextSelect(value);
    value.toLocaleLowerCase().includes(textSearch.toLocaleLowerCase());
  };

  return (
    <ContentStyle>
      <HeadStyle>
        <Box>
          <Typography
            sx={{ fontSize: 24, textAlign: "left" }}
            color="text.secondary"
            gutterBottom
          >
            Place List
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <FormControl size="small" sx={{ m: 1 }}>
            <InputLabel id="demo-simple-select-label">Select Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={textSelect}
              label="Select Type"
              onChange={handleChange}
              sx={{ width: "200px", borderRadius: "50px", background: "#fff" }}
            >
              <MenuItem value={"Restaurant"}>Restaurant</MenuItem>
              <MenuItem value={"Begery"}>Begery</MenuItem>
              <MenuItem value={"Cafe"}>Cafe</MenuItem>
            </Select>
          </FormControl>

          {textSelect}
          <FormControl
            variant="outlined"
            size="small"
            sx={{ m: 1, width: "25ch", borderRadius: "50px" }}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Search name
            </InputLabel>
            <OutlinedInput
              sx={{ borderRadius: "50px", background: "#fff" }}
              label="Search name"
              id="outlined-adornment-password"
              onChange={(e) => setTextSearch(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </HeadStyle>
      <BodyStyle>
        {JsonFile.filter((item) => {
          if (textSearch === "") {
            return item;
          } else if (
            item.name
              .toLocaleLowerCase()
              .includes(textSearch.toLocaleLowerCase())
          ) {
            return item;
          }
        }).map((item, i) => {
          return (
            <div
              onClick={onShowDetails}
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "1rem",
                cursor: "pointer",
              }}
            >
              <Card
                sx={{
                  width: 400,
                  height: 225,
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <img
                        src={item?.profile_image_url}
                        style={{ width: 60, height: 60 }}
                      />
                    </Box>
                    <Box sx={{ width: "100%", paddingLeft: "1rem" }}>
                      <Typography
                        sx={{ fontSize: 18, textAlign: "left" }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {item?.name}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <Typography
                          component={"span"}
                          variant={"body2"}
                          style={{
                            fontSize: 14,
                          }}
                          color="text.secondary"
                          gutterBottom
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <CalendarMonthIcon />
                            {/* {console.log("today", today)}
                            {item.operation_time.map((item2, i) => {
                              console.log("today", today);
                              if (item2.day === today) {
                                return {  item2 };
                              } else {
                                // console.log("false");
                              }
                             
                            })} */}
                          </div>
                        </Typography>
                        <Typography
                          component={"span"}
                          variant={"body2"}
                          sx={{ fontSize: 16, color: "#134B8A" }}
                          color="text.secondary"
                          gutterBottom
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Brightness1Icon />
                            <div> {item?.rating}</div>
                          </div>
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <ImageList cols={3}>
                      {item?.images.map((item, i) => {
                        return (
                          <ImageListItem key={i}>
                            <img
                              src={`${item}`}
                              alt={item.title}
                              loading="lazy"
                              style={{ width: 120, height: 120 }}
                            />
                          </ImageListItem>
                        );
                      })}
                    </ImageList>
                  </Box>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </BodyStyle>
    </ContentStyle>
  );
}

export default Contents;

const ContentStyle = styled("div")(() => ({
  textAlign: "center",
  height: "auto",
  backgroundColor: "#e0e0e0",
}));

const HeadStyle = styled(Paper)(() => ({
  display: "flex",
  justifyContent: "space-between",
  height: "auto",
  backgroundColor: "#e0e0e0",
  padding: "1rem",
  borderRadius: "0px",
  marginLeft: "90px",
  maginTop: "60px",
}));

const BodyStyle = styled("div")(() => ({
  backgroundColor: "#e0e0e0",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  borderRadius: "0px",
  marginLeft: "90px",
  maginTop: "60px",
}));
