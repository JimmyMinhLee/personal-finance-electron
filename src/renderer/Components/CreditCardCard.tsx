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
  balanceSetter: any;
  cardIndex: number;
};

function CreditCardCard(props: CreditCardCardProps) {
  const [currentBalanceOnCard, setCurrentBalanceOnCard] = useState('');
  const [pendingCharges, setPendingChargesOnCard] = useState('');
  const [totalChargesOnCard, setTotalChargesOnCard] = useState(0);

  const handleInputToPendingCharges = (event: any) =>
    setPendingChargesOnCard(event.target.value);

  const handleInputToCurrentBalance = (event: any) =>
    setCurrentBalanceOnCard(event.target.value);

  const updateTotalCharges = () => {
    const currentBalance = Number(currentBalanceOnCard);
    const totalPendingCharges = pendingCharges
      .split(',')
      .map(Number)
      .reduce((a, b) => a + b, 0);

    const totalBalanceOnCard = currentBalance + totalPendingCharges;
    setTotalChargesOnCard(totalBalanceOnCard);
    props.balanceSetter(totalBalanceOnCard, props.cardIndex);
  };

  return (
    <Center p={6}>
      <Box
        maxW="320px"
        w="2xl"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="2xl"
        rounded="lg"
        textAlign="center"
        p={6}
      >
        <Heading fontSize="2xl" fontFamily="body">
          {props.cardName}
        </Heading>
        <HStack py={4}>
          <Heading fontSize="xl" mx={4}>
            Total Balance
          </Heading>
          <Input
            value={currentBalanceOnCard}
            onChange={handleInputToCurrentBalance}
            onSubmit={updateTotalCharges}
            onBlur={updateTotalCharges}
            size="lg"
            variant="filled"
          />
        </HStack>
        <HStack py={4}>
          <Heading fontSize="xl" mx={4}>
            Pending Charges
          </Heading>
          <Input
            value={pendingCharges}
            onChange={handleInputToPendingCharges}
            onSubmit={updateTotalCharges}
            onBlur={updateTotalCharges}
            size="lg"
            variant="filled"
          />
        </HStack>
        <Heading fontSize="3xl" fontFamily="heading">
          {totalChargesOnCard}
        </Heading>
      </Box>
    </Center>
  );
}

export default CreditCardCard;
