import { View, StyleSheet, Text } from 'react-native';

export function Inbox(){
    return(
        <View style={styles.container}>
            <Text>Página Mensagem</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})