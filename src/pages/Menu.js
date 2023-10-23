import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Grid, Typography, List, ListItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useMyContext } from "../MyContext";
import MenuItemComponent from "../components/MenuItemComponent";
import { CallWaiterButton, CallBillButton } from "../components/CallButtons";
import { menuItems, filterMenuItems } from "../assets/dataMenu";

const Section = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  padding: theme.spacing(3, 0),
  textAlign: "center",
}));

const CallButtonWrapper = styled("div")(({ theme }) => ({
  position: "sticky",
  top: 70,
  zIndex: 4,
  m: 0,
  boxShadow: theme.shadows[2],
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.dark,
  fontFamily: theme.typography.fontFamily,
  marginBottom: theme.spacing(0),
  marginTop: theme.spacing(1),
}));

const FilterList = styled(List)(({ theme }) => ({
  paddingTop: 5,
  paddingBottom: 5,
  //position: "sticky",
  //top: 220,
  zIndex: 1,
  display: "flex",
  overflowX: "auto",
  justifyContent: "center",
  margin: "10px auto",
  maxWidth: "700px",
  gridTemplateColumns: "repeat(10, 1fr)",
  [theme.breakpoints.up("md")]: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: theme.spacing(1),
  },
}));

const FilterItem = styled(ListItem)(({ theme }) => ({
  cursor: "pointer",
  whiteSpace: "nowrap",
  padding: theme.spacing(0, 2),
  fontSize: "19px",
  fontWeight: 600,
  lineHeight: 1,
  color: theme.palette.text.dark,
  marginBottom: theme.spacing(2),
  transition: "color 0.3s",
  fontFamily: theme.typography.fontFamily,
  "&:hover": {
    color: theme.palette.primary.red,
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

function Menu() {
  const [activeFilter, setActiveFilter] = useState("*");
  const [filteredMenuItems, setFilteredMenuItems] = useState([]);
  const { setZont } = useMyContext();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const zont = searchParams.get("zont");

  // Set zont to 0 if it's undefined
  const zontValue = zont || 0;

  useEffect(() => {
    setZont(zontValue);
  }, [zontValue, setZont]);

  const showCallWaiterButton = zontValue !== 0;

  const getUniqueCategories = () => {
    // Use Set to collect unique categories
    const categoriesSet = new Set(
      menuItems.map((menuItem) => menuItem.category)
    );
    // Convert Set back to an array
    const uniqueCategories = [...categoriesSet];
    return uniqueCategories;
  };

  const uniqueCategories = getUniqueCategories();

  const filterButtons = uniqueCategories.map((category, index) => (
    <FilterItem
      key={index}
      className={
        activeFilter === category ? "filter-item filter-active" : "filter-item"
      }
      onClick={() => setActiveFilter(category)}
    >
      {category}
    </FilterItem>
  ));

  useEffect(() => {
    if (activeFilter === "*") {
      setFilteredMenuItems(menuItems);
    } else {
      const filteredItems = filterMenuItems(activeFilter);
      setFilteredMenuItems(filteredItems);
    }
  }, [activeFilter]);

  return (
    <>
      <Section>
        <CallButtonWrapper>
          <CallWaiterButton showCallWaiterButton={showCallWaiterButton} />
          <CallBillButton showCallWaiterButton={showCallWaiterButton} />
        </CallButtonWrapper>
        <Container>
          <SectionTitle variant="h3">Menu</SectionTitle>
          <FilterList>{filterButtons}</FilterList>
          <Grid container spacing={4}>
            {filteredMenuItems.map((menuItem, index) => (
              <Grid item xs={12} md={6} key={index}>
                <MenuItemComponent item={menuItem} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}

export default Menu;

//function CallBillButton({ zonti, handleCallBill, showCallWaiterButton }) {
//  const t = `Table ${zonti}. Ask for a bill`;
//  return (
//    <CustomButton
//      visibility={showCallWaiterButton}
//      onClick={handleCallBill}
//      label={t}
//    />
//  );
//}
