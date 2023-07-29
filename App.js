//import dari library luar seperti dari react, native base, dan icon expo
import React from "react";
import {
  StatusBar,
  Image,
  Text,
  HStack,
  NativeBaseProvider,
  Center,
} from "native-base";
import { Dimensions } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Home from "./screens/home";
import News from "./screens/news";
import NewsDetail from "./screens/news_detail";

//import dari lokal proyek lokal
let opo = ["./screens/home", "./screens/news", "./screens/news_detail"];
let [x, y, z] = opo;
String(y);
console.log(y);

//membuat navigator tab dan stack
const NewsStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const windowWidth = Dimensions.get("window").width;
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  showNewsStack = () => {
    return (
      <NewsStack.Navigator>
        <NewsStack.Screen
          name="ITTSNews"
          component={News}
          options={{
            title: "ITTS News",
            headerStyle: {
              backgroundColor: "#faf8f7",
            },
            headerSearchBarOptions: {},
            headerTransparent: false,
          }}
        />

        <NewsStack.Screen
          name="NewsDetail"
          component={NewsDetail}
          options={{
            title: "News Detail",
            headerStyle: {
              backgroundColor: "#faf8f7",
            },
          }}
        />
      </NewsStack.Navigator>
    );
  };

  render() {
    return (
      <NavigationContainer>
        <StatusBar style="auto" backgroundColor="#AA0002" />

        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "News") {
                iconName = focused ? "newspaper" : "newspaper-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: () => (
                <NativeBaseProvider>
                  <HStack
                    marginLeft={-4}
                    width={windowWidth}
                    justifyContent="space-between"
                    bg="#faf8f7"
                    shadow={5}
                  >
                    <Center>
                      <Text marginLeft={3} fontSize="lg" fontWeight="bold">
                        Home
                      </Text>
                    </Center>

                    <Center>
                      <Image
                        width={130}
                        height={50}
                        marginY={5}
                        marginRight={5}
                        source={require("./assets/logosiitts.png")}
                        alt="logoisitts"
                      />
                    </Center>
                  </HStack>
                </NativeBaseProvider>
              ),
            }}
          />
          <Tab.Screen
            name="News"
            component={this.showNewsStack}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
