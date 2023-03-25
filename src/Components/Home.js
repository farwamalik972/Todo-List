import React from 'react'
import { Toolbar, Tab, Tabs, Typography, Button, } from '@mui/material'
import { Box, height, } from '@mui/system'
import img1 from '../imges/bus.jpeg'
import logo from '../imges/logo.jpg'
import card1 from '../imges/upimg-1.jpg'
import card2 from '../imges/up-2.jpg'
import card3 from '../imges/up-3.jpg'
import img3 from '../imges/about.jpg'
import img4 from '../imges/profile.jpg'
const Nav = {
  margin: 'auto'
}
const navContent = {
  fontSize: 20,
  color: '#00095E',
  marginTop: 20,
}
const navlogo = {
  marginTop: 20,
}
const NavBtn = {
  backgroundColor: "#ffc800",
  fontSize: 20,
  padding: 10,
  marginTop: 20,
}
const heading = {
  textAlign: 'center',
  marginTop: 70,
  color: ' #00095E',
}
const para = {
  textAlign: 'center',
  color: '#00095E',
  fontWeight: 400,
  fontSize: 28,
  marginTop: 30,
}
const homeBtn = {
  backgroundColor: '#00095E',
  fontSize: 22,
  padding: 20,
}
const banerBtn = {
  textAlign: 'center',
  fontSize: 22,
  marginTop: 30,
}
const BusImg = {
  textAlign: 'center',
  marginTop: 150,
  position: 'relative',
  bottom: -250,
}
const upHeading = {
  color: '#00095E',
  textAlign: 'center',
  marginTop: 20,
}
const cardimg = {
  padding: '20px 25px',
  width: '33%',
}
const event = {
  marginTop: 70
}
const aboutSection = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}
const aboutImg = {
  width: '100%',
  marginTop: "30px"
}
const sectionWidth = {
  width: '47%'
}
const aboutHeading = {
  color: '#00095E',
}
const aboutP = {
  fontSize: '28px',
  color: 'blue',
}
const aboutContent = {
  color: '#677F8B',
  lineHieght: '1.8',
  fontSize: '25px',
}
const CustomerHeading = {
  textAlign: 'center',
  color: 'white',
  marginTop: '30px'
}
const CustomerPara = {
  textAlign: 'center',
  color: 'white',
  fontSize: '25px',
  lineHieght: '1.8px',
  marginTop: '50px'
}
const customerProfile = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: 40,
}
const dpContent = {
  color: 'white',
  padding: '2px 25px'
}
const FaqSection={
  color:'blue',
  textAlign:'center',
  fontSize:'28px',
  marginTop:'30px',
}
const FaqHeading={
  color:'#00095E',
  textAlign:'center',
  padding:'20px'
}
function Home() {
  return (
    <div>
      <Toolbar>
        <div style={navlogo}>
          <img src={logo}></img>
        </div>
        <Tabs style={Nav} >
          <Tab style={navContent} label='Home' />
          <Tab style={navContent} label='About' />
          <Tab style={navContent} label='Blog' />
          <Tab style={navContent} label='Event' />
          <Tab style={navContent} label='Contact' />
        </Tabs>
        <Box>
          <Button style={NavBtn} variant='contained' >+10 69 (678) 6543</Button>
        </Box>
      </Toolbar><br></br>
      <Typography style={heading} variant='h1'>"Lifelong memories just a"</Typography>
      <Typography style={para}>Let’s start your journey with us, your dream will come true</Typography>
      <div style={banerBtn}>
        <Button style={homeBtn} variant='contained'>Explore Destinations</Button>
      </div>
      <div className='bg'>
        <div style={BusImg}>
          <img src={img1} alt=""/>
        </div>
      </div>
      <Typography style={para}>Check Our Best Promotional Tour</Typography><br></br>
      <Typography style={upHeading} variant='h2'>Upcoming Events</Typography>
      <div style={event}>
        <img style={cardimg} src={card1} />
        <img style={cardimg} src={card2} />
        <img style={cardimg} src={card3} />
      </div>
      <div style={aboutSection} >
        <div style={sectionWidth} >
          <img style={aboutImg} src={img3} />
        </div>
        <div style={sectionWidth}>
          <Typography style={aboutP}>About us</Typography>
          <Typography style={aboutHeading} variant='h2'>Get ready for real time adventure</Typography>
          <Typography style={aboutContent} >Let’s start your journey with us, your dream will come true.<br></br> Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore<br></br> magna aliqua. Ut enim ad minim veniam quis nostrud<br></br> exercitation.</Typography>
          <Button style={NavBtn} variant='contained'>Book Your Destination</Button>
          
        </div>
      </div>
      <div className='section-3'>
        <Typography style={CustomerHeading} variant='h2'>What Customer Say</Typography>
        <Typography style={CustomerPara} >Let’s start your journey with us, your dream will come true. Lorem ipsum<br></br> dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt<br></br> ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</Typography>
        <div style={customerProfile}>
          <img src={img4} />
          <Typography style={dpContent} variant='h5'>Mark Anthony<br></br>CEO of Colorlib</Typography>
        </div>
      </div>
       <div>
          <Typography style={FaqSection} >FAQ</Typography>
          <Typography style={FaqHeading} variant='h3'>Full range of travel service</Typography>
       </div>
    </div>
  )
}

export default Home