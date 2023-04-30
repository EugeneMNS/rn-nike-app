import {StyleSheet, View} from 'react-native';
import {ProductDetailsScreen} from "./src/screens/ProductDetailsScreen";

export default function App() {
    return (
        <View style={styles.container}>
            <ProductDetailsScreen/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
