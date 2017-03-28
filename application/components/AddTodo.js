import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

class AddTodo extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.text} value={this.props.text} onChange={this.props.onChange}/>
                <Button title="Add" onPress={this.props.onAdd}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: 10
    },
    text: {
        flex: 1,
        textAlign: 'left'
    }
});

export default AddTodo;