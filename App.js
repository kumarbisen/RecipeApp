import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { CATEGORIES } from './data/dummy-data';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={
        {
          headerStyle: { backgroundColor: '#351401', },
          contentStyle: { backgroundColor: '#3f2f25' },
          statusBarStyle: 'light',
          headerTintColor: 'white',
          headerTitleStyle: { fontSize: 20 },

        }
      }>
        <Stack.Screen name='MealsCategories'
          component={CategoriesScreen}
          // options={({route,navigation})=>{
          //       const categoryId = route.params.categoryId;
          //       return{
          //         title: catId
          //       }
            
          // }}
          
          /> 
      
        <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
