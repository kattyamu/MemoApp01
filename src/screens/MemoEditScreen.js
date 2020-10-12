import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import * as firebase from 'firebase/app';

import CircleButton from '../elements/CircleButton';

class MemoEditScreen extends React.Component {
  state = {
    body: '',
    key: '',
  }
  // state = {
  //   memo: {},
  // }

  componentDidMount() {
    // console.log(this.props.navigation.state.params);
    const { params } = this.props.navigation.state;
    this.setState({
      body: params.memo.body,
      key: params.memo.key,
    });
  }

  handlePress() {
    // console.log('pressed');

    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    // returnMemo に渡すので new Date() ではなくて firestore の Timestamp 型を直接使う
    const newDate = firebase.firestore.Timestamp.now();

    console.log(this.state);
  
    db.collection(`users/${currentUser.uid}/memos`).doc(this.state.key)
      .update({
        body: this.state.body,
        createdOn: newDate,
      })
      .then(() => {
        this.setState({ body: this.state.body }); // WORKAROUND: bodyもここで更新しておく
        const { navigation } = this.props;
        navigation.state.params.returnMemo({
          body: this.state.body,
          key: this.state.key,
          createdOn: newDate,
        });
        navigation.goBack();
        // console.log('Success!');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.memoEditInput}
          multiline textAlignVertical='top'
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body: text }) }}
        />
        <CircleButton
          name='check'
          onPress={this.handlePress.bind(this)}
        />
        {/* <CircleButton
          name='check'
          onPress={() => { console.log('pressed'); }}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  memoEditInput: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 32,
    padding: 16,
    fontSize: 16,
    justifyContent: 'flex-start',
  }, 
});

export default MemoEditScreen;
