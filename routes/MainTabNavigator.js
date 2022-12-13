import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screen/Home';
import Layout from '../screen/layout';
import Weather from '../screen/Weather';
import YoutubeViewer from '../screen/Youtubeviewer';
import Image from '../screen/Image';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();



function MainTabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen name = "Layout" component={Layout} options={{title: 'Layout',tabBarIcon: ({color, size}) => (
              <Icon name="info" color={color} size={size} />
            ),}}/>
                <Tab.Screen name = "Home" component={Home} options={{title: 'Home',tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),}}/>
                <Tab.Screen name = "Weather" component={Weather} options={{title: 'Weather',tabBarIcon: ({color, size}) => (
              <Icon name="cloud" color={color} size={size} />
            ),}}/>
                <Tab.Screen name = "YoutubeViwe" component={YoutubeViewer} options={{title: 'YOUTUBE',tabBarIcon: ({color, size}) => (
              <Icon name="youtube" color={color} size={size} />
            ),}}/>
                <Tab.Screen name = 'Image' component={Image} options={{title : 'Image',tabBarIcon: ({color, size}) => (
              <Icon name="image" color={color} size={size} />
            ),}} />
            
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainTabNavigator;