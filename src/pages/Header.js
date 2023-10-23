/* eslint-disable spaced-comment */
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LanguageIcon from "@mui/icons-material/Language";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
// import { IoRestaurantOutline } from "react-icons/io5";
import { useMyContext } from "../MyContext";

const HeaderStyling = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  zIndex: 996,
  position: "sticky",
  top: 0,
  minWidth: "100%",
  minHeigh: "100%",
}));

const Logo = styled(Typography)(({ theme }) => ({
  marginBottom: "-10px",
  marginTop: "-10px",
  fontWeight: 400,
  fontFamily: theme.typography.h1.fontFamily,
  fontSize: theme.typography.h1.fontSize,
  color: theme.palette.text.light,
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  marginLeft: "auto",
  color: theme.palette.text.light,
}));

const LanguageSwitcher = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.light,
  display: "flex",
  alignItems: "center",
}));

const LanguagePopover = styled(Popover)(({ theme }) => ({
  width: "150px",
}));

export default function Header({ language, setLanguage }) {
  const [languageAnchor, setLanguageAnchor] = useState(null);
  const { contacts } = useMyContext();

  const handleLanguageClick = (event) => {
    setLanguageAnchor(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchor(null);
  };

  const handleLanguageSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    handleLanguageClose();
  };

  return (
    <HeaderStyling>
      <Container>
        <Toolbar>
          <Logo component="h1">{contacts.name}</Logo>
          <MenuButton color="inherit">{/*<IoRestaurantOutline />*/}</MenuButton>
          <LanguageSwitcher color="inherit" onClick={handleLanguageClick}>
            <LanguageIcon />
          </LanguageSwitcher>
          <LanguagePopover
            open={Boolean(languageAnchor)}
            anchorEl={languageAnchor}
            onClose={handleLanguageClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={() => handleLanguageSelect("en")}>
              English
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect("de")}>
              Ελληνικά
            </MenuItem>
          </LanguagePopover>
        </Toolbar>
      </Container>
    </HeaderStyling>
  );
}
