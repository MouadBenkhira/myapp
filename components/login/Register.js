import * as React from "react";
import { Box, Heading, VStack, FormControl, Input, Button, Center, NativeBaseProvider, Avatar } from "native-base";

// Import your local image
import LocalImage from "../../assets/6.png";

const Example = () => {
  return (
    <Center w="100%">
      {/* Use the imported LocalImage as the source for Avatar */}
      <Avatar bg="black" alignSelf="center" size="2xl" source={LocalImage}>
        RB
      </Avatar>
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading size="lg" color="white" textAlign="center" _dark={{
          color: "warmGray.50"
        }} fontWeight="semibold">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }} fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label>Confirm Password</FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" colorScheme="indigo">
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3" bg="#131212"> {/* Set background color to black */}
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
