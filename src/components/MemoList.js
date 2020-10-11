import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, FlatList } from 'react-native';

class MemoList extends React.Component {
  // renderMemo(data) {
  // cnsole.log(data);
  //   const { item } = data;
  //   return (
  //     <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
  //       <View style={styles.memoListItem}>
  //         <Text style={styles.memoTitle}>{item.body}</Text>
  //         <Text style={styles.memoDate}>2020/10/05</Text>
  //       </View>
  //     </TouchableHighlight>
  //   );
  // }
  renderMemo({ item }) {
    return (
      <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>{item.body}</Text>
          <Text style={styles.memoDate}>2021/10/11</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    // const list = [];
    // this.props.memoList.forEach((memo) => {
    //   list.push(this.renderMemo(memo));
    // });
    // console.log(this.props.memoList);

    return (
      <View style={styles.memoList}>
        <FlatList data={this.props.memoList} renderItem={this.renderMemo.bind(this)} />
        {/* { list } */}
        {/* <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイデア</Text>
            <Text style={styles.memoDate}>2020/10/05</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイデア</Text>
            <Text style={styles.memoDate}>2020/10/05</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoTitle}>講座のアイデア</Text>
            <Text style={styles.memoDate}>2020/10/05</Text>
          </View>
        </TouchableHighlight> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default MemoList;
