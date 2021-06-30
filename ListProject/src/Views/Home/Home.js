import React from 'react';
import {
  Alert,
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Button,
} from 'react-native';
import stylesHome from './Home.style';
import styles from '../index.style';
import onPress from './HomeManager';
import strings from '../../Models/Constants/strings.json';
import Note from './Components/Note';
import dummyValues from '../../Models/Constants/dummyValues.json';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteList: dummyValues.dummyNotes,
    };
  }

  render() {
    let str = strings.Home[0];
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>{str.home}</Text>
          <ScrollView style={styles.scrollContainerHome}>
            {this.getNotes()}
          </ScrollView>

          <Text style={stylesHome.textInHome}>{str.text1}</Text>
          <Button
            onPress={() => onPress(this.props.navigation)}
            title={str.goPage}
          />
        </View>
      </SafeAreaView>
    );
  }

  getNotes = () => {
    return this.state.noteList.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key, val)}
        />
      );
    });
  };

  deleteNote = (key, val) => {
    Alert.alert('Nota ' + val.note + ' correttamente eliminata.');
    this.state.noteList.splice(key, 1);
    this.setState({noteList: this.state.noteList});
  };
}
