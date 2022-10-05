import { Center, Spinner, HStack, Heading } from "native-base";

const Loading = () => {
  return (
    <Center>
      <HStack space={2} justifyContent="center">
        <Spinner accessibilityLabel="Loading posts" />
        <Heading color="#2c3e50" fontSize="md">
          Loading
        </Heading>
      </HStack>;
    </Center>
  );
};

export default Loading;
