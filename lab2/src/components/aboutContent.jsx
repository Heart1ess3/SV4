import React from "react";
import { Box, Typography, Container, Paper, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText, Chip } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AboutPage = () => {
  return (
    <Box sx={pageStyle}>
      <Container component="main" sx={mainStyle}>
        <Paper elevation={3} sx={sectionStyle}>
          <Typography variant="h2" sx={{ ...headingStyle, fontSize: '24px' }}>
            About Our Store
          </Typography>
          <Typography>
            Welcome to <strong>Our Store</strong>, where quality meets affordability! Founded in 2010, we have 
            grown to be a trusted name in the retail industry, offering a diverse range of products, from stylish 
            clothing to cutting-edge electronics. Our mission is to provide you with an enjoyable shopping experience 
            that keeps you coming back for more.
          </Typography>
        </Paper>

        <Paper elevation={3} sx={sectionStyle}>
          <Typography variant="h2" sx={{ ...headingStyle, fontSize: '24px' }}>
            Our Mission
          </Typography>
          <Typography>
            Our mission is simple: to bring you the best products at the best prices, coupled with 
            exceptional customer service. We continuously strive to enhance our offerings, ensuring that you find 
            exactly what you're looking for every time you visit us.
          </Typography>
        </Paper>

        <Paper elevation={3} sx={sectionStyle}>
          <Typography variant="h2" sx={{ ...headingStyle, fontSize: '24px' }}>
            Meet Our Team
          </Typography>
          <List>
            {teamMembers.map(member => (
              <ListItem key={member.name}>
                <ListItemText
                  primary={member.name}
                  secondary={member.role}
                />
                <Chip label={member.expertise} color="primary" />
              </ListItem>
            ))}
          </List>
        </Paper>

        <Paper elevation={3} sx={sectionStyle}>
          <Typography variant="h2" sx={{ ...headingStyle, fontSize: '24px' }}>
            Customer Feedback
          </Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>What Our Customers Say</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                {customerFeedback.map((feedback, index) => (
                  <ListItem key={index}>
                    <Typography>"{feedback.comment}" - <strong>{feedback.name}</strong></Typography>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>
        </Paper>
      </Container>
    </Box>
  );
};

export default AboutPage;

const pageStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#f0f4f8",
};

const mainStyle = {
  flex: 1,
  py: 3,
};

const sectionStyle = {
  marginBottom: 2,
  padding: 2,
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  boxShadow: 3,
};

const headingStyle = {
  color: "#007bff",
  borderBottom: "2px solid #007bff",
  paddingBottom: "10px",
  marginBottom: "15px",
};

const teamMembers = [
  { name: "Alice Johnson", role: "Customer Service Manager", expertise: "Customer Support" },
  { name: "Mark Smith", role: "Product Selection Specialist", expertise: "Product Knowledge" },
  { name: "Lisa Ray", role: "Marketing Coordinator", expertise: "Marketing Strategies" },
];

const customerFeedback = [
  { comment: "Shopping at Our Store has been a fantastic experience! The variety of products is incredible.", name: "Sarah J." },
  { comment: "Great prices and friendly staff! I highly recommend it to everyone.", name: "John D." },
  { comment: "I love the selection of electronics and the quick delivery options!", name: "Emily W." },
];

