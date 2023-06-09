import { View, StyleSheet, Text } from 'react-native';

export function New(){
    return(
        <View style={styles.container}>
            <Text>Página cadastrar novo video</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})