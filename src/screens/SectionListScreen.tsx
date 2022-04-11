import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { globalStyles } from '../theme/appTheme';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: ['Batman', 'Robin', 'Superman' ,'Batman', 'Robin', 'Superman' ,'Batman', 'Robin', 'Superman' ,'Batman', 'Robin', 'Superman' ,'Batman', 'Robin', 'Superman'  ,'Batman', 'Robin', 'Superman' ,'Batman', 'Robin', 'Superman' ,'Batman', 'Robin', 'Superman' ,'Batman', 'Robin', 'Superman']
  },
  {
    casa: 'Marvel Comics',
    data: ['Antman', 'Thor', 'Spiderman' ,'Antman', 'Thor', 'Spiderman' ,'Antman', 'Thor', 'Spiderman' ,'Antman', 'Thor', 'Spiderman' ,'Antman', 'Thor', 'Spiderman'  ,'Antman', 'Thor', 'Spiderman' ,'Antman', 'Thor', 'Spiderman' ,'Antman', 'Thor', 'Spiderman' ,'Antman', 'Thor', 'Spiderman']
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama' ,'Kenshin', 'Goku', 'Saitama' ,'Kenshin', 'Goku', 'Saitama' ,'Kenshin', 'Goku', 'Saitama' ,'Kenshin', 'Goku', 'Saitama' ,'Kenshin', 'Goku', 'Saitama' ,'Kenshin', 'Goku', 'Saitama' ,'Kenshin', 'Goku', 'Saitama' ,'Kenshin', 'Goku', 'Saitama']
  }
]

export const SectionListScreen = () => {
  return (
    <View style={ [globalStyles.margin, globalStyles.container] }>
      {/* <HeaderTitle title='Section List' /> */}
      <SectionList
        sections={casas}
        keyExtractor={ (item,index) => item+index}
        renderItem={ ({item}) => <Text>{item}</Text> }
        stickySectionHeadersEnabled={true}
        renderSectionHeader={ ({ section:{casa}}) => (
          <View style={{backgroundColor: 'white'}}>
            <HeaderTitle title={casa} />
          </View>
        )}
      />
    </View>
  )
}