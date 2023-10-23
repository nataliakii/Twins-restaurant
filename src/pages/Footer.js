import React from "react";
import { Container, Grid, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { useMyContext } from "../MyContext";

const Section = styled("section")(({ theme }) => ({
  padding: theme.spacing(2, 0),
  textAlign: "center",
  backgroundColor: theme.palette.secondary.light,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.h1.fontFamily,
  fontSize: "54px",
  marginBottom: theme.spacing(2),
}));

const FooterContainer = styled(Container)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
}));

const SocialLinks = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(4),
}));

const ContactInfo = styled(Grid)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: "17px",
}));

const ContactIcon = styled("span")(({ theme }) => ({
  marginRight: theme.spacing(1),
  verticalAlign: "middle",
}));

const CopyrightInfo = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(2),
  fontSize: "14px",
  opacity: 0.8,
}));

function Footer() {
  const { contacts } = useMyContext();
  const { name, slogan, tel, email, address } = contacts;

  return (
    <Section>
      <FooterContainer>
        <SectionTitle variant="h3">{name}</SectionTitle>
        <Typography variant="body1">{slogan}</Typography>
        <SocialLinks>
          <Link href="#" color="inherit" target="_blank">
            <FacebookIcon fontSize="large" />
          </Link>
          <Link href="#" color="inherit" target="_blank">
            <TwitterIcon fontSize="large" />
          </Link>
          <Link href="#" color="inherit" target="_blank">
            <InstagramIcon fontSize="large" />
          </Link>
          <Link href="#" color="inherit" target="_blank">
            <LinkedInIcon fontSize="large" />
          </Link>
          <Link href="#" color="inherit" target="_blank">
            <GitHubIcon fontSize="large" />
          </Link>
        </SocialLinks>
        <ContactInfo container spacing={2}>
          <Grid item xs={12} md={4}>
            <ContactIcon>
              <LocationOnIcon />
            </ContactIcon>
            {address}
          </Grid>
          <Grid item xs={12} md={4}>
            <ContactIcon>
              <EmailIcon />
            </ContactIcon>
            <a href={`mailto:${email}`}>{email}</a>
          </Grid>
          <Grid item xs={12} md={4}>
            <ContactIcon>
              <CallIcon />
            </ContactIcon>
            <a href={`tel:${tel}`}>{tel}</a>
          </Grid>
        </ContactInfo>
        <CopyrightInfo>
          &copy; {new Date().getFullYear()} NataliaKi. All Rights Reserved. |{" "}
          <a
            href="https://www.linkedin.com/in/natalia-kirejeva/"
            target="_blank"
            rel="noreferrer"
          >
            License Information
          </a>
        </CopyrightInfo>
      </FooterContainer>
    </Section>
  );
}

export default Footer;
