import * as React from 'react';
import { Dimensions, StatusBar, Animated, Pressable } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Box, Center, useColorModeValue } from 'native-base';
import { Movies } from '../pages/Movies'
import { SearchResults } from '../pages/SearchResults'
import { TV } from '../pages/TV'


const FirstRoute = () => <Center flex={2} my="4">
  <Movies />
</Center>;

const SecondRoute = () => <Center flex={1} my="4">
  <SearchResults />
</Center>;

const ThirdRoute = () => <Center flex={1} my="4">
  <TV />
</Center>;

const initialLayout = {
  width: Dimensions.get('window').width
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

export default function Tab() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([{
    key: 'first',
    title: 'Movies'
  }, {
    key: 'second',
    title: 'Search Results'
  }, {
    key: 'third',
    title: 'TV Shows'
  }]);

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return <Box flexDirection="row">
      {props.navigationState.routes.map((route, i) => {
        const opacity = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map(inputIndex => inputIndex === i ? 1 : 0.5)
        });
        const color = index === i ? useColorModeValue('#000', '#e5e5e5') : useColorModeValue('#1f2937', '#a1a1aa');
        const borderColor = index === i ? '#2c3e50' : useColorModeValue('coolGray.200', 'gray.400');
        return <Box borderBottomWidth="3" borderColor={borderColor} flex={1} alignItems="center" p="3" cursor="pointer">
          <Pressable onPress={() => {
            console.log(i);
            setIndex(i);
          }}>
            <Animated.Text style={{
              color
            }}>{route.title}</Animated.Text>
          </Pressable>
        </Box>;
      })}
    </Box>;
  };

  return <TabView navigationState={{
    index,
    routes
  }} renderScene={renderScene} renderTabBar={renderTabBar} onIndexChange={setIndex} initialLayout={initialLayout} style={{
    marginTop: StatusBar.currentHeight
  }} />;
}


