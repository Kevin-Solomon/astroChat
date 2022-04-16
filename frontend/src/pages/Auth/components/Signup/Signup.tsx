import { Button, FormControl, FormLabel, Input, Wrap } from '@chakra-ui/react';
import React from 'react';

function Signup() {
  return (
    <Wrap spacing="1rem">
      <FormControl isRequired>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" type="name" />
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" type="email" />
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" type="password" />
        <FormLabel htmlFor="confirm-password">Confirm Password</FormLabel>
        <Input id="confirm-password" type="confirm-password" />
        <br />
        <br />
        <Button colorScheme="blue" w="100%">
          Signup
        </Button>
      </FormControl>
    </Wrap>
  );
}
export { Signup };
