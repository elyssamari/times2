import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ReplayIcon from '@mui/icons-material/Replay';


export default function Affirmations({darkMode}) {
  const [currentMessage, setCurrentMessage] = useState(messagesData[0]);

  const handleRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messagesData.length);
    setCurrentMessage(messagesData[randomIndex]);
  };

  return (
    <Grid container gap={4} padding='24px 24px' justifyContent='center' direction='column'>
      <Grid container direction='column' gap={3}>
        <Typography variant="h3" fontWeight='bold' align='center' sx={{ color: darkMode ? 'white' : 'black' }} >
          Messages
        </Typography>
        <Box height='2px' width='100%' sx={{ backgroundColor: '#3F3F3F' }} />
      </Grid>

      <Grid container gap={2}
        sx={{
          backgroundImage: darkMode ?  `url(${process.env.PUBLIC_URL}/night-house.png)`: `url(${process.env.PUBLIC_URL}/day-pink-house.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '16px 16px 16px 16px',
          borderRadius: '10px',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor:  darkMode ? 'white' : '#333'
        }}>
        <Grid container justifyContent='center'>
          <img
            alt='affirmation'
            src={`${process.env.PUBLIC_URL}/` + currentMessage.photo}
            style={{ height: 200 }}
          />
        </Grid>
        <Grid container justifyContent='center'>
          <Typography variant="h5" align='center' sx={{backgroundColor:'white', borderRadius: '10px',
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: '#37352f', 
          padding: '8px 8px'}}>
            {currentMessage.emoticon}
          </Typography>
        </Grid>
        <Grid container justifyContent='center'>
          <img
            alt='elyssa'
            src={`${process.env.PUBLIC_URL}/madame.png`}
          />
        </Grid>
        <Grid container justifyContent='center'>
          <Button variant="contained" size='large'
            startIcon={<ReplayIcon />}
            onClick={handleRandomMessage}
            disableElevation
            sx={{
              fontWeight: 'bold',
              fontSize: '24px',
              borderRadius: '5px',
              backgroundColor: '#37352f',
              color: "white",
              '&:hover': {
                backgroundColor: 'darkgray',
              },
              height: '70px'
            }}>
            Generate Another Message
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

const messagesData = [
  { message: 'I think of you always.', photo: '/SpeechBubbles/pixel-speech-bubble (1).png', emoticon: '｡◕‿‿◕｡' },
  { message: 'I love you soooooo much Joshua.', photo: '/SpeechBubbles/pixel-speech-bubble (2).png', emoticon: '(♥‿♥)' },
  { message: 'I love you always.', photo: '/SpeechBubbles/pixel-speech-bubble (3).png', emoticon: '♥‿♥' },
  { message: 'You are the most handsome man in the world.', photo: '/SpeechBubbles/pixel-speech-bubble (4).png', emoticon: `(-＾▽＾-)` },
  { message: 'Have a good day!', photo: '/SpeechBubbles/pixel-speech-bubble (5).png', emoticon: 'ヾ(❀╹◡╹)ﾉﾞ' },
  { message: 'I hope you slept well and have a great day!', photo: '/SpeechBubbles/pixel-speech-bubble (6).png', emoticon: '(ꈍ ᴗ ꈍ✿)' },
  { message: 'Thinking of you always puts a smile on my face.', photo: '/SpeechBubbles/pixel-speech-bubble (7).png', emoticon: '(◍•ᴗ•◍)' },
  { message: 'I miss you already.', photo: '/SpeechBubbles/pixel-speech-bubble (8).png', emoticon: '（；へ：）' },
  { message: `I'm very grateful for you and what you do for me.`, photo: '/SpeechBubbles/pixel-speech-bubble (9).png', emoticon: '( ˘ ³˘)❤' },
  { message: 'I appreciate you so much.', photo: '/SpeechBubbles/pixel-speech-bubble (10).png', emoticon: '♡＾▽＾♡' },
  { message: 'Believe in yourself because I know you can do it!', photo: '/SpeechBubbles/pixel-speech-bubble (11).png', emoticon: '(✿◠‿◠)' },
  { message: 'I am very proud of you and everything you have done. Keep on going!', photo: '/SpeechBubbles/pixel-speech-bubble (12).png', emoticon: '✿◕ ‿ ◕✿' },
  { message: 'You can do anything you put your mind into, just keep pushing.', photo: '/SpeechBubbles/pixel-speech-bubble (13).png', emoticon: 'o(≧∇≦o)' },
  { message: 'I love you just the way you are.', photo: '/SpeechBubbles/pixel-speech-bubble (14).png', emoticon: '(ꈍᴗꈍ)ε｀*)' },
  { message: 'You got this!', photo: '/SpeechBubbles/pixel-speech-bubble (15).png', emoticon: '(⋈◍＞◡＜◍)。✧♡' },
  { message: 'You are my sun and I am your star (and moon?).', photo: '/SpeechBubbles/pixel-speech-bubble (16).png', emoticon: '°˖✧◝(⁰▿⁰)◜✧˖°' },
  { message: `I'm so lucky to have you in my life.`, photo: '/SpeechBubbles/pixel-speech-bubble (17).png', emoticon: '٩(๑> ₃ <)۶♥' },
  { message: 'I love spending time with you.', photo: '/SpeechBubbles/pixel-speech-bubble (18).png', emoticon: '（＾ω＾）' },
  { message: 'I appreciate the comfort you give me.', photo: '/SpeechBubbles/pixel-speech-bubble (19).png', emoticon: '(っ˘з(˘⌣˘ )' },
  { message: 'I always feel safe with you.', photo: '/SpeechBubbles/pixel-speech-bubble (20).png', emoticon: '(ㅅ´ ˘ `)' },
  { message: 'I cherish every moment we spend together every single day.', photo: '/SpeechBubbles/pixel-speech-bubble (21).png', emoticon: '( ˘͈ ᵕ ˘͈♡)' },
  { message: 'I appreciate everything you do for me, big or small, that shows you care. Love you!', photo: '/SpeechBubbles/pixel-speech-bubble (22).png', emoticon: '(っ◔◡◔)っ ♥' },
  { message: 'I am so grateful for the trust and understanding in our relationship.', photo: '/SpeechBubbles/pixel-speech-bubble (23).png', emoticon: '(´∀`)' },
  { message: `You are so smart. Don't listen to anyone who said otherwise.`, photo: '/SpeechBubbles/pixel-speech-bubble (24).png', emoticon: '☚ (<‿<)☚' },
  { message: `It's okay not to be okay, everything will be okay in the end.`, photo: '/SpeechBubbles/pixel-speech-bubble (25).png', emoticon: '(°◡°♡)' },
  { message: `It'll take time, but everything will work out.`, photo: '/SpeechBubbles/pixel-speech-bubble (26).png', emoticon: '(つ・▽・)つ⊂(・▽・⊂)' },
  { message: 'You matter and you are important, especially to me.', photo: '/SpeechBubbles/pixel-speech-bubble (27).png', emoticon: '(づ｡◕‿‿◕｡)づ' },
  { message: `Having a hard time? It's okay, breathe and try again.`, photo: '/SpeechBubbles/pixel-speech-bubble (28).png', emoticon: 'ヽ(^o^)/' },
  { message: `Don't worry about the things you can't control, breathe and focus on the things you can.`, photo: '/SpeechBubbles/pixel-speech-bubble (29).png', emoticon: '+･.゜。(´∀｀)。゜.･+' },
  { message: `When things go wrong, take a moment and think of things you are thankful for.`, photo: '/SpeechBubbles/pixel-speech-bubble (30).png', emoticon: '❁◕ ‿ ◕❁' },
  { message: `You are a great person. I love you so much for it.`, photo: '/SpeechBubbles/pixel-speech-bubble (31).png', emoticon: '(◠‿◠✿)' },
  { message: `You help me see other perspectives I have never thought about before, I'm grateful you continue to help me learn and grow.`, photo: '/SpeechBubbles/pixel-speech-bubble (32).png', emoticon: '' },
  { message: `You are not always fine and it's okay. There always tomorrow to try and be better.`, photo: '/SpeechBubbles/pixel-speech-bubble (33).png', emoticon: '' },
  { message: `When things feel out of control, take one things at a time. Try with something small and continue from there.`, photo: '/SpeechBubbles/pixel-speech-bubble (34).png', emoticon: '' },
  { message: `You deserve happiness!`, photo: '/SpeechBubbles/pixel-speech-bubble (35).png', emoticon: '(◍•ᴗ•◍)♡ ✧*。' },
  { message: `You are strong, determined, smart, and brave. Keep being you.`, photo: '/SpeechBubbles/pixel-speech-bubble (36).png', emoticon: `*♡( ⁎ᵕᴗᵕ⁎)` },
  { message: `Step by step, day by day. You got this!`, photo: '/SpeechBubbles/pixel-speech-bubble (37).png', emoticon: '٩(๑> ₃ <)۶♥' },
  { message: `You are the sunshine that brightens up my day.`, photo: '/SpeechBubbles/pixel-speech-bubble (38).png', emoticon: 'o(〃＾▽＾〃)o' },
  // eslint-disable-next-line no-useless-escape
  { message: `You carry so much love in your heart. Give yourself some.`, photo: '/SpeechBubbles/pixel-speech-bubble (39).png', emoticon: `\(◕ ◡ ◕\)` },
  { message: `You mean a lot to me and I hope you know that.`, photo: '/SpeechBubbles/pixel-speech-bubble (40).png', emoticon: '❀ܓ(｡◠ ꇴ ◠｡ )' },
  { message: `Be gentle on yourself, you're doing the best you can. Take one step at a time.`, photo: '/SpeechBubbles/pixel-speech-bubble (41).png', emoticon: '(„ᵕᴗᵕ„)' },
  { message: `I'm here for you always.`, photo: '/SpeechBubbles/pixel-speech-bubble (42).png', emoticon: '(Ɔ ˘⌣˘)♥(˘⌣˘ C)' },
  { message: `I'll always be here to listen.`, photo: '/SpeechBubbles/pixel-speech-bubble (43).png', emoticon: '♡＾▽＾♡' }
];
