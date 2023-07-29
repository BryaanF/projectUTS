import React from "react";

import {
  Box,
  ScrollView,
  Text,
  Center,
  Avatar,
  NativeBaseProvider,
} from "native-base";

import Separator from "../components/separator";

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <NativeBaseProvider>
        <ScrollView flex={1} padding={30} bg="white">
          <Center p="5">
            <Avatar
              size="xl"
              bg="green.500"
              source={require("../assets/pp.jpg")}
            >
              Liant
            </Avatar>
            <Separator height={5} />
            <Text fontSize="2xl" fontWeight="bold">
              Brilliant Fikri
            </Text>
            <Text fontSize="sm">1204202025</Text>
          </Center>
          <Separator height={5} />
          <Box marginY={2} bg="black" p="0.5" rounded="lg" />
          <Text fontSize="lg" fontWeight="bold">
            Nickname
          </Text>
          <Text fontSize={16}>Liant</Text>
          <Box marginY={2} bg="black" p="0.5" rounded="lg" />

          <Text fontSize="lg" fontWeight="bold">
            Gender
          </Text>
          <Text fontSize={16}>Male</Text>
          <Box marginY={2} bg="black" p="0.5" rounded="lg" />
          <Text fontSize="lg" fontWeight="bold">
            Birth Place & Date
          </Text>
          <Text fontSize={16}>Surabaya, 17 January 2002</Text>
          <Box marginY={2} bg="black" p="0.5" rounded="lg" />
          <Text fontSize="lg" fontWeight="bold">
            Email Address
          </Text>
          <Text fontSize={16}>briliantfikri@gmail.com</Text>
          <Box marginY={2} bg="black" p="0.5" rounded="lg" />
          <Text fontSize="lg" fontWeight="bold">
            Phone
          </Text>
          <Text fontSize={16}>081331487753</Text>
          <Box marginY={2} bg="black" p="0.5" rounded="lg" />
          <Text fontSize="lg" fontWeight="bold">
            Address
          </Text>
          <Text fontSize={16}>Surabaya</Text>
          <Box marginY={2} bg="black" p="0.5" rounded="lg" />
          <Separator height={50} />
        </ScrollView>
      </NativeBaseProvider>
    );
  }
}

export default Home;
