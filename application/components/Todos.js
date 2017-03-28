import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity
} from 'react-native';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import { Button, Input, Checkbox, Switcher, SegmentedControlButton } from 'nachos-ui';

class Todos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentText: '',
      todos: [
        {
          title: "First todo",
          done: false
        }
      ],
      filter: 'all'
    };
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.add}>
            <Input
              style={{flex: 1, alignSelf: 'center'}}
              value={this.state.currentText}
              onChangeText={value => this.setState({ ...this.state, currentText: value})}
              />
            <TouchableOpacity
              style={styles.button}
              onPress={e => this._createAndAddNewTodo()}>
              <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>ADD</Text>
            </TouchableOpacity>
          </View>

          <Switcher
            style={styles.switcher}
            onChange={valueOne => this.setState({ ...this.state, filter: valueOne})}
            direction='row'
            defaultSelected='all'>
            <SegmentedControlButton value='all' text='All' />
            <SegmentedControlButton value='done' text='Done' />
            <SegmentedControlButton
              value='not_done'
              text='Not Done'
            />
          </Switcher>

          {this.state.todos
            .filter(todo => {
              switch(this.state.filter) {
                case 'all': return true;
                case 'done': return todo.done;
                case 'not_done': return !todo.done;
                default: return false;
              }
            })
            .map(todo => this._todoItem(todo))
          }

        </View>
    );
  }

  _todoItem(todo) {
    return (
      <TouchableOpacity
        onPress={e => this._todoCheckChanged(todo, !todo.done)}>
        <View style={styles.add}>
          <Text style={{flex: 1, alignSelf: 'flex-start'}}>{todo.title}</Text>
          <Checkbox
            checked={todo.done}
            onValueChanged={checked => this._todoCheckChanged(todo, checked)}/>
        </View>
      </TouchableOpacity>
    );
  }

  _todoCheckChanged(todo, checked) {
    var todos = this.state.todos.map(t => {
      if (t.title === todo.title) {
        return {
          ...t,
          done: checked
        };
      } else {
        return t;
      }
    });

    this.setState({ ...this.state, todos: todos });
  }

  _createAndAddNewTodo() {
    var todo = {
      title: this.state.currentText,
      done: false
    };

    this.setState({
      currentText: '',
      todos: [ ...this.state.todos, todo]
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20
  },
  add: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 10
  },
  button: {
    backgroundColor: '#368ffb',
    borderRadius: 5,
    borderColor: '#FFFFFF',
    borderWidth: 2,
    padding: 15,
    width: 100
  },
  switcher: {
    padding: 15
  }
});

export default Todos;
