import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '8px' }}>
      <Image src={imageSrc} borderRadius="8px" objectFit="cover" />
      <Heading fontSize="25px" color="black" px={4} pt="4">
        {title}
      </Heading>
      <VStack>
        <Text fontSize="18px" color="#A0AEC0" px={4}>
          {description}
        </Text>
      </VStack>
      <HStack pb="4">
        <Text fontSize="18" color="black" fontWeight="bold" px={4}>
          See more
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
      </HStack>
    </div>
  );
};

export default Card;
