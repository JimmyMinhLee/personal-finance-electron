/* eslint-disable react/destructuring-assignment */
import {
  Box,
  Center,
  Heading,
  Input,
  useColorModeValue,
  HStack,
} from '@chakra-ui/react';
import { useState } from 'react';

type CreditCardCardProps = {
  cardName: string;
};

function CreditCardCard(props: CreditCardCardProps) {
  return (
    <Center>
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="md"
        rounded="lg"
        textAlign="center"
        p={4}
      >
        <Heading fontSize="2xl"> {props.cardName} </Heading>
        <HStack py={4}>
          <Heading fontSize="md" mx={4}>
            Total Balance
          </Heading>
          <Input size="md" variant="filled" />
        </HStack>
        <HStack py={4}>
          <Heading fontSize="md" mx={4}>
            Pending Charges
          </Heading>
          <Input size="md" variant="filled" />
        </HStack>
      </Box>
    </Center>
  );
}

export default CreditCardCard;
