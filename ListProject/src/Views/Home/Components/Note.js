import React from 'react';
import {Text, View, Button} from 'react-native';
export default class Note extends React.Component {
  render() {
    return (
      <View key={this.props.keyval}>
        <Text>{this.props.val.date}</Text>
        <Text>{this.props.val.note}</Text>
        <Button onPress={this.props.deleteMethod} title="Delete" />
      </View>
    );
  }
}
