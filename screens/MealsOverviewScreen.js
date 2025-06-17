import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { CATEGORIES } from '../data/dummy-data';
import { useLayoutEffect } from 'react';

function MealsOverviewScreen({ route, navigation  }) {
    const categoryId = route.params.categoryId;
    

    
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    useLayoutEffect(()=>{
    // set navigation options dynamically based on the selected category
    const Categorytitle = CATEGORIES.find((cat) => cat.id === categoryId).title;
    navigation.setOptions({title: Categorytitle  });
    
    },[navigation,categoryId])
    
    

    function renderMealItem(itemData) {
        const item = itemData.item;
        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        };
        return <MealItem {...mealItemProps} />;
    }

    return (
        <View style={styles.container} >
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});
