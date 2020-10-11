import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import * as firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class MemoCreateScreen extends React.Component {
  state = {
    body: '',
  }

  handlePress() {
    const { params } = this.props.navigation.state;
    const db = firebase.firestore();
    db.collection(`users/${params.currentUser.uid}/memos`).add({
      body: this.state.body,
      createdOn: new Date(),
    })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.MemoCreateInput}
          multiline
          textAlignVertical='top'
          value = { this.state.body }
          onChangeText = {(text) => { this.setState({ body: text }) }}
        />
        <CircleButton name='check' onPress={ this.handlePress.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  MemoCreateInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    padding: 16,
    fontSize: 16,
    justifyContent: 'flex-start',
  }, 
});

export default MemoCreateScreen;
