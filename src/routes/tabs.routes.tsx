import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home } from "../screens/Home";
import { House } from "phosphor-react-native";

const {Navigator, Screen} = createBottomTabNavigator();

export function TabRoutes() {
    return (
        <Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#242A32",
                    height: 78,
                    alignItems: "center",
                    borderTopWidth: 1,
                    borderTopColor: "#0296E5"
                },
                headerShown: false,
                tabBarActiveTintColor: "#0296E5",
                tabBarInactiveTintColor: "#67686D",
                tabBarShowLabel: false,
            }}
        >
            <Screen name="Home" component={Home} options={{
                tabBarIcon: ({color}) => (
                    <House color={color} size={30} weight="light"/>
                )
            }}/>
        </Navigator>
    );
}