import React from "react";
import { styled } from "@mui/material/styles";
import { Paper, Typography } from "@mui/material";

const StyledMenuItem = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  padding: theme.spacing(3),
  display: "flex",
  alignItems: "center",
  boxShadow: theme.shadows[4],
  transition: "transform 0.3s",
  "&:hover": {
    transform: "scale(1.08)",
    boxShadow: theme.shadows[9],
  },
}));

const MenuImage = styled("img")(({ theme }) => ({
  width: "100%",
  minWidth: "50%",
  height: "auto",
  borderRadius: "50%",
  float: "left",
  border: `2px solid ${theme.palette.primary.red}`,
}));

const MenuContent = styled("div")(({ theme }) => ({
  marginLeft: theme.spacing(1),
  position: "relative",
}));

const MenuLink = styled(Typography)(({ theme }) => ({
  paddingRight: theme.spacing(0),
  fontSize: "22px",
  // background: theme.palette.primary.red,
  position: "relative",
  zIndex: 3,
  fontWeight: 700,
  color: theme.palette.secondary.dark,
  transition: "color 0.3s",
  "&:hover": {
    color: theme.palette.primary.red,
  },
}));

const MenuPrice = styled("span")(({ theme }) => ({
  // background: theme.palette.primary.red,
  position: "relative",
  fontSize: "22px",
  zIndex: 3,
  padding: theme.spacing(0, 2),
  fontWeight: 600,
  color: theme.palette.secondary.dark,
}));

const MenuIngredients = styled("div")(({ theme }) => ({
  fontStyle: "italic",
  marginLeft: theme.spacing(2),
  fontSize: "16px",
  color: `rgba(0, 0, 0, 0.7)`,
  marginTop: theme.spacing(1),
}));

function MenuItemComponent({ item }) {
  return (
    <StyledMenuItem>
      <MenuImage src={item.image} alt={item.title} />
      <MenuContent>
        <MenuLink href="#">{item.title}</MenuLink>
        <MenuPrice>€{item.price}</MenuPrice>
        <MenuIngredients>{item.ingredients}</MenuIngredients>
      </MenuContent>
    </StyledMenuItem>
  );
}

export default MenuItemComponent;
