import { StyleSheet, Text, View } from "react-native";

const Main = () => {
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.title}>Channels</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#000',
        overflow: 'scroll',
        padding: 24
    },
    title: {
        color: '#fff',
        fontSize: 28
    }
});

export default Main;