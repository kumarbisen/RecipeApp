import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import { useFonts } from "@expo-google-fonts/poppins";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";


function CategoryGrid({title, color, onClick}) {
    let [fontLoaded] = useFonts({
        Poppins_600SemiBold
    });

    if(!fontLoaded) {
        return null;
    }

    return (
        <View style={[styles.gridItem, {backgroundColor: color}]}>
            <Pressable 
                onPress={onClick}
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null
                ]}
            >
                <View style={styles.innerContainer}>
                    <Text style={[styles.TextContainer, {fontFamily: "Poppins_600SemiBold"}]}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGrid;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        shadowOpacity: 0.25,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextContainer: {
        fontSize: 14
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonPressed: {
        opacity: 0.5
    }
});