import React from 'react';
import { Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Note from './Note';
import styles from './style/Main.style'
import translations from "./translation/strings.json"
import { NativeModules, Platform } from 'react-native';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    }
  }
  render() {

    var t = this.translation();
    let notes = this.state.noteArray.map((val, key) => {
      return <Note
        key={key}
        keyval={key}
        val={val}
        deleteMethod={() => this.deleteNote(key)}
      />
    })

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{t.appName}</Text>
        </View>

        <ScrollView style={styles.scrollContainer} >
          {notes}
        </ScrollView>

        <View style={styles.footer}>

          <TextInput
            style={styles.textInput}
            onChangeText={(noteText) => this.setState({ noteText })}
            value={this.state.noteText}
            placeholder={t.enterHere}
            placeholderTextColor='white'
            underlineColorAndroid='transparent'
          >
          </TextInput>

        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity onPress={this.addnote.bind(this)} style={styles.addButtonFixed}>
            <Text style={styles.addButtonText}>{t.add}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  addnote() {
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push(
        {
          'date': d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
          'note': this.state.noteText
        }
      );
      var newNoteArray = this.state.noteArray;
      this.setState({ noteArray: newNoteArray })
      this.setState({ noteText: '' });
    }
  }
  
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray })
  }


  translation = () => {

    var deviceLanguage = "en_EN";
    var langPackage;

    if (Platform.OS === 'ios')
      deviceLanguage = NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    else if (Platform.OS === 'android')
      deviceLanguage = NativeModules.I18nManager.localeIdentifier;

    if (deviceLanguage == "it_IT") {
      langPackage = translations.italian[0];
    }
    else {
      langPackage = translations.english[0];
    }
    return langPackage;
  };

}