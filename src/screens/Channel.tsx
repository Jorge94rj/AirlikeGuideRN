import { StyleSheet, Text, View } from 'react-native';
// SQLite integration
// https://www.npmjs.com/package/react-native-sqlite-storage
// Blocks info
// https://developer.themoviedb.org/reference/search-tv
// Repo MVVM
// https://github.com/Jorge94rj/rn-test/tree/feat/list-pagination

const Channel = () => {
    return (
        <View style={styles.screenContainer}>
            <Text style={styles.title}>Channels</Text>
        </View>
    );
};

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

export default Channel;
