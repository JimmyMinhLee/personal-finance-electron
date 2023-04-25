/* eslint-disable no-unused-vars */
import {
  Box,
  Container,
  Flex,
  Heading,
  VStack,
  Text,
  HStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import CreditCards from 'renderer/Sections/CreditCards';
import CreditCardCard from '../Components/CreditCardCard';

function Main() {
  return (
    <HStack direction="row" maxWidth="6xl">
      <CreditCards> </CreditCards>
    </HStack>
  );
}

export default Main;
