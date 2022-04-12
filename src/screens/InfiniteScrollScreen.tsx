import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { HeaderTitle } from '../components/HeaderTitle';

export const InfiniteScrollScreen = () => {

  const [numbers, setNumbers] = useState([0,1,2,3,4,5])

  const loadMore = () => {
    const newArray: number[] = [];

    for(let i=0; i<5; i++){
      newArray[i] = numbers.length + i;
    }
    setNumbers([...numbers, ...newArray]);
  }

  const renderItem = ( item: number ) => {
    return(
      <Text style={ styles.textItem }>
        {item}
      </Text>
    )
  }

  return (
    <View style={{flex:1, backgroundColor: 'red'}}>
      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={ ({item}) => renderItem(item) }
        ListHeaderComponent={() => <HeaderTitle title='Infinite Scroll' />}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150
  }
});