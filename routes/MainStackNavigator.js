import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Layout from '../screen/layout';
import Home from '../screen/Home';



const Nav = createStackNavigator();

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Nav.Navigator initialRouteName='Home'>
                <Nav.Screen name = "Layout" component={Layout} options={{title: '처음 Layout'}}/>
                <Nav.Screen name = "Home" component={Home} options={{title: '추가 Home'}}/>
                
            </Nav.Navigator>
        </NavigationContainer>
    );
}

export default MainStackNavigator; 