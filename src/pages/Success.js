import React from 'react';
import Shiping from '../components/Shipping/ListShipping';

import { FeedBack, BorderFeedBack, Box, Text } from '../styles';

const Success = () => {
  return (
    <FeedBack>
      <BorderFeedBack>
        <Box>
          <Text mt={4} fontSize={4} fontWeight={2} textAlign={'center'}>
            Terima Kasih! <br />
            Telah memberikan kami data yang Valid !
          </Text>
        </Box>
      </BorderFeedBack>

      <Box mt={4}>
        <Shiping />
      </Box>
    </FeedBack>
  );
};

export default Success;
