import {
  AppBar,
  Box,
  Button,
  Link,
  Stack,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import Logo from "../../assets/logo.jpg";
import SideDrawer from "../Button/SideDrawer";
import { ListMenu } from "../../data/List";
import { useStyles } from "./NavbarStyles";
import PersonIcon from "@mui/icons-material/Person";
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const classes = useStyles();
  return (
    <Box>
      <Stack>
        {/* ---------------Navbar-------------------- */}
        <AppBar className={classes.app} position="fixed">
          <Toolbar>
            <Stack marginLeft="-25px">
              <img
                src={Logo}
                alt="logo"
                height="75px"
                width="223px"
              />
            </Stack>

            {/* -------------------Navbar List----------------------- */}
            <Stack
              direction="row"
              spacing={6}
              className={classes.list}
            >
              {ListMenu.map((list) => (
                <Link href="#" className={classes.btn} key={list}>
                  {list}
                </Link>
              ))}
            </Stack>

            {/* ------------------------Login Button--------------------------- */}
            <Stack marginLeft={10}>
              <Button
                onClick={() => setIsDrawerOpen(true)}
                variant="contained"
                className={classes.btn2}
                size="medium"
                startIcon={<PersonIcon />}
              >
                Login
              </Button>
              <SideDrawer
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
              />
            </Stack>
          </Toolbar>
        </AppBar>
      </Stack>
    </Box>
  );
};

export default Navbar;
