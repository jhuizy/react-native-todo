import React from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';

class TodoItem extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.title}</Text>
                <Switch value={this.props.done}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 10
    },
    text: {
        flex: 1,
        textAlign: 'left'
    }
})

export default TodoItem;