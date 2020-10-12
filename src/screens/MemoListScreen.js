import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as firebase from 'firebase/app';

import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

class MemoListScreen extends React.Component {
  state = {
    memoList: [],
  }

  componentDidMount() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/memos`)
      .onSnapshot((querySnapshot) => {
        const memoList = [];
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc);
          memoList.push({ ...doc.data(), key: doc.id });
        });
        this.setState({ memoList });
      });
      /*
      .get()
      .then((querySnapshot) => {
        const memoList = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
          // console.log(doc);
          memoList.push({ ...doc.data(), key:doc.id });
        });
        this.setState({ memoList });
        // this.setState({ memoList: memoList });
      })
      .catch((error) => {
          console.log("Error getting documents: ", error);
      });
    */
  }

  // this.props.navigation.navigate('MemoDetail');
  // this.props.navigation.navigate('MemoEdit');

  handlePress() {
    // const { params } = this.props.navigation.state;
    // this.props.navigation.navigate('MemoCreate', { currentUser: params.currentUser });
    this.props.navigation.navigate('MemoCreate');
  }

  render() {
    return (
      <View style={styles.container}>
        <MemoList memoList={this.state.memoList} navigation={this.props.navigation} />
        <CircleButton name='plus' onPress={ this.handlePress.bind(this) } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fffdf6',
  },
});

export default MemoListScreen;
