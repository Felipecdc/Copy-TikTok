import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../pages/home/index';
import { Search } from '../pages/search/index';
import { Inbox } from '../pages/inbox/index';
import { New } from '../pages/new/index';
import { Profile } from '../pages/profile/index';

import { Ionicons } from '@expo/vector-icons';
import { ButtomNew } from '../components/buttomnew';

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
    <Tab.Navigator
        screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle:{
                        backgroundColor: "#000",
                        borderTopWidth: 0,
                },
                tabBarActiveTintColor: "#fff"
        }}
    >
        <Tab.Screen
        name="Home"
        component={Home}
        options={{
                tabBarIcon: ({ focused, color, size }) => {
                        if(focused){
                                return <Ionicons name="home" size={size} color={color}/>
                        }
                        return <Ionicons name="home-outline" size={size} color={color}/>
                }
        }}
        />
                <Tab.Screen
        name="Search"
        component={Search}
        options={{
                tabBarIcon: ({ focused, color, size }) => {
                        if(focused){
                                return <Ionicons name="search" size={size} color={color}/>
                        }
                        return <Ionicons name="search-outline" size={size} color={color}/>
                }
        }}
        />
                <Tab.Screen
        name="New"
        component={New}
        options={{
                tabBarIcon: ({ size }) => {
                        return <ButtomNew size={size}/>
                }
        }}
        />
                <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
                tabBarIcon: ({ focused, color, size }) => {
                        if(focused){
                                return <Ionicons name="ios-chatbubble-ellipses" size={size} color={color}/>
                        }
                        return <Ionicons name="ios-chatbubble-ellipses-outline" size={size} color={color}/>
                }
        }}
        />
                <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
                tabBarIcon: ({ focused, color, size }) => {
                        if(focused){
                                return <Ionicons name="person" size={size} color={color}/>
                        }
                        return <Ionicons name="person-outline" size={size} color={color}/>
                }
        }}
        />
    </Tab.Navigator>
    )
}