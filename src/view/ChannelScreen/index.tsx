import { Text, View } from 'react-native';
import { styles } from './index.styles';
// Storage
// https://medium.com/@penghuili/internal-and-external-storage-in-react-native-4094120664d4
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

export default Channel;
