import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Drawer from "@mui/joy/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import ModalClose from "@mui/joy/ModalClose";
import { MenuRounded } from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo/logo.png";
import Divider from "@mui/material/Divider";

import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";

export default function MenuBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <IconButton
        variant=""
        color="neutral"
        onClick={() => setOpen(!open)}
        size="lg"
      >
        {open ? (
          <ModalClose
            onClick={() => setOpen(false)}
            style={{
              backgroundColor: "#f2f2f2",
              borderRadius: "50%",
            }}
          />
        ) : (
          <MenuRounded />
        )}
      </IconButton>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        size="lg"
        style={{ marginTop: "100px" }}
      >
        {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: 2,
            mt: 1,
            mr: 2,
            justifyItems: "space-between",
            justifyContent: "space-between",
          }}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="" className="Applogo" />
            <span className="font-extrabold text-purple-500 text-2xl font-serif">
              Just<span className="text-yellow-500 font-extrabold">Skills</span>
            </span>
          </Link>

          
        </Box> */}
        {/* <Divider sx={{ marginTop: 1 }} /> */}

        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "xl",
            "& > div": { justifyContent: "start" },
          }}
        >
          <ListItemButton
            sx={{
              fontWeight: 400,
              ml: 1.3,
            }}
          >
            <a href="/">Home </a>
            <ModalClose
              id="close-icon"
              sx={{
                position: "initial",
                backgroundColor: "#f2f2f2",
                color: "#FFFFFF",
                borderRadius: 999,
                position: "absolute",
                top: 0,
                right: 5,
              }}
            />
          </ListItemButton>
          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />

          <Link href={"/courses"}>
            <ListItemButton
              sx={{ fontWeight: 400, ml: 1.3 }}
              onClick={() => setOpen(false)}
            >
              Course
            </ListItemButton>
          </Link>
          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
          <Link href={"/about"}>
            <ListItemButton
              sx={{ ml: 1.3, fontWeight: 400 }}
              onClick={() => setOpen(false)}
            >
              About
            </ListItemButton>
          </Link>
          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />

          <Link href={"/read"}>
            <ListItemButton
              sx={{ ml: 1.3, fontWeight: 400 }}
              onClick={() => setOpen(false)}
            >
              Read
            </ListItemButton>
          </Link>

          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />

          <Link href={"/contact"}>
            <ListItemButton
              sx={{ ml: 1.3, fontWeight: 400 }}
              onClick={() => setOpen(false)}
            >
              Contact
            </ListItemButton>
          </Link>
          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />

          <Link href={"https://study.justskills.in/"} target="blank">
            <ListItemButton
              sx={{ ml: 1.3, fontWeight: 400 }}
              onClick={() => setOpen(false)}
            >
              Study
            </ListItemButton>
          </Link>
          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
        </List>
      </Drawer>
    </React.Fragment>
  );
}
