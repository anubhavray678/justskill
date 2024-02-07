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
        onClick={() => setOpen(true)}
        size="lg"
      >
        <MenuRounded />
      </IconButton>
      <Drawer open={open} onClose={() => setOpen(false)} size="lg" color="">
        <Box
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

          <ModalClose
            id="close-icon"
            sx={{
              position: "initial",
              backgroundColor: "#8C52FF",
              color: "#FFFFFF",
              borderRadius: 999,
            }}
          />
        </Box>
        <Divider sx={{ marginTop: 1 }} />

        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            fontSize: "xl",
            "& > div": { justifyContent: "start" },
          }}
        >
          <ListItemButton sx={{ fontWeight: 400, ml: 1.3 }}>
            <a href="/">Home </a>
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

          {/* <ListItemButton>Read</ListItemButton> */}
          <ListItemButton>
            <AccordionGroup>
              <Accordion sx={{ fontSize: "xl" }}>
                <AccordionSummary sx={{ fontWeight: 400 }}>
                  Read
                </AccordionSummary>
                <AccordionDetails>
                  <Button onClick={() => setOpen(false)}>
                    <Link
                      href="/cpp-fundamentals"
                      className="capitalize text-slate-800 hover:text-purple-500"
                    >
                      C++ Fundamentals
                    </Link>
                  </Button>
                </AccordionDetails>
                <AccordionDetails>
                  <Button onClick={() => setOpen(false)}>
                    <Link
                      href="/cpp-fundamentals"
                      className="capitalize text-slate-800 hover:text-purple-500"
                    >
                      Data Structures
                    </Link>
                  </Button>
                </AccordionDetails>
                <AccordionDetails>
                  <Button onClick={() => setOpen(false)}>
                    <Link
                      href="/cpp-fundamentals"
                      className="capitalize text-slate-800 hover:text-purple-500"
                    >
                      Algorithms
                    </Link>
                  </Button>
                </AccordionDetails>
              </Accordion>
            </AccordionGroup>
          </ListItemButton>
          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />

          <ListItemButton>
            <AccordionGroup>
              <Accordion sx={{ fontSize: "xl" }}>
                <AccordionSummary sx={{ fontWeight: 400 }}>
                  Practice
                </AccordionSummary>
                <AccordionDetails>
                  <Button onClick={() => setOpen(false)}>
                    <Link
                      href="/dsa-questions"
                      className="capitalize text-slate-800 hover:text-purple-500"
                    >
                      DSA Sheet
                    </Link>
                  </Button>
                </AccordionDetails>
                <AccordionDetails>
                  <Button onClick={() => setOpen(false)}>
                    <Link
                      href="/codeground"
                      className="capitalize text-slate-800 hover:text-purple-500"
                    >
                      CodeGround
                    </Link>
                  </Button>
                </AccordionDetails>
              </Accordion>
            </AccordionGroup>
          </ListItemButton>
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
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ListItemButton
            sx={{
              color: "#000",
              backgroundColor: "rgba(191, 193, 193, 0.121)",
              justifyContent: "center",
              width: "70%",
              borderRadius: 5,
              height: "50px",
            }}
          >
            Sign In
          </ListItemButton>
        </Box> */}
      </Drawer>
    </React.Fragment>
  );
}
