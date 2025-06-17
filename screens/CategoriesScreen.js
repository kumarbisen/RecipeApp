import { StyleSheet, FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data';
import CategoryGrid from '../components/CategoryGrid'
// import { useNavigation } from '@react-navigation/native';
function CategoriesScreen({navigation,}) {

    // const navigation = useNavigation();


    function renderCategoryItem(itemData) {
        function pressHandler(){
            //navigate
            navigation.navigate('MealsOverview',{
                categoryId: itemData.item.id});
        }
        return (
            <CategoryGrid 
                title={itemData.item.title} 
                color={itemData.item.color}
                onClick={pressHandler}
            />
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}

            
        />

    )
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#fff',
    }
})
