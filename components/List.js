import { StyleSheet, View ,Text} from "react-native";

function List({data,style}){
    return ( data.map((dataItem)  =>(
        <View key={dataItem} style={styles.listContainer}>
            <Text style={[styles.listItem,style]}>{dataItem}</Text>
        </View>

    ))

)
}

export default List;
const styles = StyleSheet.create({
    listContainer: {
        padding: 16,
        backgroundColor: '#3f2f25',
    },
    // Add more styles as needed
    listItem:{
        marginVertical: 8,
        padding: 16,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    }
})