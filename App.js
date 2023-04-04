import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from './screens/CategoriesScreen';
import RecipeViewScreen from './screens/RecipeViewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' },
          }}
        >
          <Stack.Screen 
            name="MealsCategories" 
            component={CategoriesScreen} 
            options={{
              title: 'All Categories',
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' },
            }}
          />
          <Stack.Screen 
            name="RecipeOverview" 
            component={RecipeViewScreen} 
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId,
            //   };
            // }}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>  
  );
}

const styles = StyleSheet.create({
  container: {},
});
