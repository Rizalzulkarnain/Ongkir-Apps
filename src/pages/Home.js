import React from 'react';
import ReactPlayer from 'react-player/lazy';

import FormAdd from '../components/FormAdd/FormAdd';

import { Box, Text, VideoPlayerWrapper } from '../styles';

const Home = () => {
  return (
    <Box>
      <VideoPlayerWrapper>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Cvf3BM9cDdg"
          controls={true}
          playbackRate={1}
          pip={false}
        />
      </VideoPlayerWrapper>

      <Box>
        <Text mt={3} fontSize={2} textAlign={'center'}>
          Silahkan isi biodata diri kamu untuk mendapatkan benefit dari kami.
        </Text>
      </Box>

      <Box mt={4}>
        <FormAdd />
      </Box>
    </Box>
  );
};

export default Home;
