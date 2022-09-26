import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import logo from "../logo2.png"
const Footer = () => {
return (
	<Box>
	<div style={{display:"flex",justifyContent:'center',marginBottom:"20px"}}><img src={logo} style={{width:"250px"}}/></div>
	<Container>
		<Row>
		<Column>
			<Heading>Career</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Vision</FooterLink>
			<FooterLink href="#">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Affiliate</FooterLink>
			<FooterLink href="#">Internships</FooterLink>
			<FooterLink href="#">Opportunites</FooterLink>
			
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">contact@coinmax-investment.com</FooterLink>
			
		</Column>
		
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
