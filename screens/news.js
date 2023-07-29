import React, { PureComponent } from "react";
import { Dimensions } from "react-native";
import {
  Text,
  Box,
  Spinner,
  FlatList,
  Pressable,
  Image,
  VStack,
  HStack,
  NativeBaseProvider,
} from "native-base";

//untuk mendapatkan width dan height dari window atau perangkat yang digunakan
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

class News extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }
  async getNews() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/purnamaanaking/pab-static-api/main/articles.json"
      );
      const json = await response.json();
      this.setState({ data: json.articles });
    } catch (error) {
      console.error(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }
  componentDidMount() {
    this.getNews();
  }

  componentWillUnmount() {
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props;

    return (
      <>
        <Pressable
          padding={5}
          backgroundColor="white"
          onPress={() => navigation.navigate("NewsDetail", { data: item })}
        >
          <Box flexDirection="row" alignItems="flex-start">
            <Image
              source={{ uri: item.image }}
              width={100}
              height={100}
              alt={item.title}
            />
            <VStack space="5">
              <Text fontSize={20} width={windowWidth - 150} marginLeft={15}>
                {item.title}
              </Text>

              <Text marginLeft={15} fontSize="xs">
                {item.date}
              </Text>
            </VStack>
          </Box>
        </Pressable>
        <Box borderWidth={0.5} borderColor="#cccccc"></Box>
      </>
    );
  };
  render() {
    const { data, isLoading } = this.state;
    return (
      <NativeBaseProvider>
        <Box flex={1} justifyContent="space-between">
          {isLoading ? (
            <HStack
              mt={windowHeight * (40 / 100)}
              space={1}
              justifyContent="center"
            >
              <Spinner accessibilityLabel="Loading posts" />
              <Text color="primary.500" fontSize="md">
                Loading
              </Text>
            </HStack>
          ) : (
            <FlatList
              data={data}
              keyExtractor={(item, index) => item.id}
              renderItem={this.renderItem}
              contentInsetAdjustmentBehavior="automatic"
            />
          )}
        </Box>
      </NativeBaseProvider>
    );
  }
}
export default News;
