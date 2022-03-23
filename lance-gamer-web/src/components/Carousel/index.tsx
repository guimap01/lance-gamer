import { Box, Image } from '@chakra-ui/react';
import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';

export const Carousel = () => {
  return (
    <ReactResponsiveCarousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showArrows={false}
      transitionTime={1500}
    >
      <Box>
        <Image src="/images/banner.png" alt="banner" />
      </Box>
      <Box>
        <Image src="/images/banner.png" alt="banner" />
      </Box>
      <Box>
        <Image src="/images/banner.png" alt="banner" />
      </Box>
    </ReactResponsiveCarousel>
  );
};
