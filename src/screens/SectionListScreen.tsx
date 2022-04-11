import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
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
      
      <SectionList
        sections={casas}
        keyExtractor={ (item,index) => item+index}
        ListHeaderComponent={ () => <HeaderTitle title='Section List' /> }
        ListFooterComponent={ () => (
          <View style={{ marginBottom:70 }}>
            <HeaderTitle title={`Total de casas ${casas.length}`} />
          </View>
        ) }
        renderItem={ ({item}) => <Text>{item}</Text> }
        stickySectionHeadersEnabled={true}
        renderSectionHeader={ ({ section:{casa}}) => (
          <View style={{backgroundColor: 'white'}}>
            <HeaderTitle title={casa} />
          </View>
        )}
        renderSectionFooter={ ({section}) => (
          <HeaderTitle title={`Total ${section.data.length}`} />
        ) }
        SectionSeparatorComponent={ ItemSeparator }
        ItemSeparatorComponent={ () => <ItemSeparator />}
        showsVerticalScrollIndicator={ false }
      />
    </View>
  )
}