import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import MealDetails from "../components/MealDetails"
import { MEALS } from "../data/dummy-data";
import List from "../components/List";

function MealDetailScreen({ route }) {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.imageContainer} />
            <MealDetails duration={selectedMeal.duration}
                affordability={selectedMeal.affordability}
                complexity={selectedMeal.complexity}
                style={styles.MealDetails} />
            <View style={styles.textContainer}>

                <Text style={styles.MealDetails}>Ingridients</Text>
                <List data={selectedMeal.ingredients} style={styles.Ingridients} />
                <Text style={styles.MealDetails}>Steps</Text>
                <List data={selectedMeal.steps} />

            </View>
        </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    imageContainer: {
        width: '100%',
        height: 300,
        marginBottom: 10
    },
    MealDetails: {
        color: 'white'
    },
    textContainer: {
        alignItems:'center'
    },
    Ingridients:{
    
        justifyContent:'space-between',
        padding:10

    }
})
