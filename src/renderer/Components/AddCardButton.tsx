import {
  Box,
  Center,
  Text,
  Heading,
  HStack,
  Input,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';

class CreditCard {
  name: string;

  currentBalance: number;

  pendingCharges: number;

  constructor(name: string, currentBalance: number, pendingCharges: number) {
    this.name = name;
    this.currentBalance = currentBalance;
    this.pendingCharges = pendingCharges;
  }
}

function AddCardButton() {
  const handleAddCard = () => {
    const newCardName = document.getElementById(
      'add-card-name-input'
    ) as HTMLInputElement;
    if (newCardName != null && newCardName.value !== '') {
      const cardToAdd = new CreditCard(newCardName.value, 0, 0);
      const currentCreditCardsString =
        window.DataStore.store.get('credit-cards');

      if (currentCreditCardsString === '') {
        console.log('Empty string');
        const CreditCardsObjectToInstantiate = {
          creditCards: [cardToAdd],
        };
        window.DataStore.store.set(
          'credit-cards',
          JSON.stringify(CreditCardsObjectToInstantiate)
        );
      } else {
        console.log('Not empty');
        const currentCreditCardsObject = JSON.parse(currentCreditCardsString);
        const creditCardsList =
          currentCreditCardsObject.creditCards as Array<CreditCard>;
        creditCardsList.push(cardToAdd);
        currentCreditCardsObject.creditCards = creditCardsList;
        window.DataStore.store.set(
          'credit-cards',
          JSON.stringify(currentCreditCardsObject)
        );
        console.log(window.DataStore.store.get('credit-cards'));
      }
    }
  };

  const handleGetCards = () => {
    const creditCardsString = window.DataStore.store.get('credit-cards');
    console.log(creditCardsString);
  };

  const handleResetCards = () => {
    window.DataStore.store.set('credit-cards', '');
  };
  return (
    <Center p={6}>
      <Box
        w="6xl"
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow="xl"
        rounded="lg"
        textAlign="center"
        p={6}
      >
        <Heading fontSize="2xl" fontFamily="body">
          Add Card
        </Heading>
        <HStack py={4}>
          <Heading fontSize="xl" mx={4}>
            Name
          </Heading>
          <Input size="lg" variant="filled" id="add-card-name-input" />
        </HStack>
        <Button onClick={handleAddCard}> Add New Card </Button>
        <Button onClick={handleGetCards} my={4}>
          Get Cards
        </Button>
        <Button onClick={handleResetCards} my={4}>
          Reset Cards
        </Button>
      </Box>
    </Center>
  );
}

export default AddCardButton;
