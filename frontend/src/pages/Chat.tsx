import { Avatar, Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import { useAuth } from '../context/AuthContext';
import { red } from '@mui/material/colors';
import ChatItem from '../components/chat/ChatItem';
import { IoMdSend } from 'react-icons/io';

const chatMessages = [
  {role: "user", content: "Hello, can you help me with my math homework?"},
  {role: "assistant", content: "Of course! What topic are you working on?"},
  {role: "user", content: "I'm trying to understand quadratic equations."},
  {role: "assistant", content: "Sure, quadratic equations can be tricky. Let's start with the basics. A quadratic equation is of the form ax^2 + bx + c = 0."},
  {role: "user", content: "How do I find the values of x?"},
  {role: "assistant", content: "You can use the quadratic formula: x = (-b ± sqrt(b^2 - 4ac)) / 2a. This formula will give you the two solutions for x."},
  {role: "user", content: "That makes sense. Thanks for the help!"},
  {role: "assistant", content: "You're welcome! Feel free to ask if you have more questions."}
]


const Chat = () => {
  const auth = useAuth();
  return (
    <Box sx={{display:'flex', flex:1, width:'100%', height:'100%', mt: 3, gap: 3,}}>
      <Box sx={{display:{md:"flex", xs:"none", sm:"none"}, flex:0.2, flexDirection:'column'}}>
        <Box sx={{display:"flex", width:"100%", height:"60vh", bgcolor:"rgb(17,29,39)", borderRadius:5, flexDirection:'column', mx: 3}}>
          <Avatar sx={{mx:"auto", my:2, bgcolor:"white", color:"black", fontWeight:700}}>
            { auth?.user?.name[0] }{auth?.user?.name.split(" ")[1][0]}
          </Avatar>
          <Typography sx={{mx:'auto'}}>
            You are talking to a chat bot
          </Typography>
          <Typography sx={{mx:'auto', my:4, p:3}}>
            You can ask me anything you want! But, be careful about sharing your personal information.
          </Typography>
          <Button sx={{width:"200px", my:"auto", color:"white", fontWeight:"700", borderRadius:3, mx:"auto", bgcolor: red[300], ":hover":{bgcolor: red.A400,},}}>
            Clear Conversation
          </Button>

        </Box>
      </Box>
      <Box sx={{display:'flex', flex:{md:0.8, xs:1, sm:1}, flexDirection:'column', px:3,}}>
        <Typography sx={{fontSize:'40px', color:'white', mb:2, mx:'auto', fontWeight:'600',}}>
          Model - GPT 3.5 Turbo

        </Typography>
        <Box sx={{width:'100%', height:'60vh', borderRadius:3, mx:'auto', display:'flex', flexDirection:'column', overflow:'scroll', overflowX: 'hidden', overflowY:'auto', scrollBehavior:'smooth',}}>
          {chatMessages.map((chat, index) => (<ChatItem content={chat.content} role={chat.role} key={index} />))}
        </Box>
        <div style={{width: '100%', padding:'20px', borderRadius:8, backgroundColor:'rgb(17,27,39)', display:'flex', marginRight:'auto',}}>
          {" "}
          <input type='text' style={{width:'100%', backgroundColor:'transparent', padding:'10px', border:'none', outline:'none', color:'white', fontSize:'20px',}} />
          
          <IconButton sx={{ml:'auto', color:'white', }}>
            <IoMdSend />
          </IconButton>
        </div>
        

      </Box>
    </Box>
  )
}


export default Chat