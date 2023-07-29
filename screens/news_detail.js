import React from "react";
import { Dimensions } from "react-native";
import { Text, ScrollView, Image, NativeBaseProvider } from "native-base";
import Separator from "../components/separator";

const windowWidth = Dimensions.get("screen").width;

class NewsDetail extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { route } = this.props;
    const data = route.params.data;
    return (
      <NativeBaseProvider>
        <ScrollView flex={1} padding={15}>
          <Image
            source={{ uri: data.image }}
            width={windowWidth - 30}
            height={200}
            resizeMode="stretch"
            alt={data.title}
          />
          <Separator height={5} />
          <Text fontSize={22} fontWeight="bold">
            {data.title}
          </Text>
          <Separator height={2} />
          <Text fontSize="xs">{data.date}</Text>
          <Separator height={5} />
          <Text fontSize={16}>{data.content}</Text>
          <Separator height={20} />
        </ScrollView>
      </NativeBaseProvider>
    );
  }
}
export default NewsDetail;
