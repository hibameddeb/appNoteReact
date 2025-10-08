
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "C:/Users/Asus/NotesApp/screens/HomeScreen.js";
import NotesScreen from "C:/Users/Asus/NotesApp/screens/NotesScreen.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Notes App",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="Notes"
          component={NotesScreen}
          options={{
            title: "My Notes",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}