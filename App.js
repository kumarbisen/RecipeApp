import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import {Ionicons} from'@expo/vector-icons'
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen'
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function NavigationDrawer(){
  // you can change background of drawer , icons etc
  return (
    <Drawer.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401', },
          sceneContainerStyle: { backgroundColor: '#3f2f25' },
          statusBarStyle: 'light',
          headerTintColor: 'white',
          headerTitleStyle: { fontSize: 20 },

        }
      }>


       <Drawer.Screen name='Categories' component={CategoriesScreen}/>
        <Drawer.Screen name='Favorites' component={FavoritesScreen}/>
      
    </Drawer.Navigator>
 

  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator >
        <Stack.Screen name='Drawer' component={NavigationDrawer} options={{
          headerShown:false
        }}
         
          /> 
      
        <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}
         // options={({route,navigation})=>{
          //       const categoryId = route.params.categoryId;
          //       return{
          //         title: catId
          //       }
            
          // }}
           />
        <Stack.Screen name='MealDetails' component={MealDetailScreen} 
        options={{
        headerRight:()=>{
          return <Ionicons name='star' size={24} color={'white'} />
        }
        
        }}/>
 

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
