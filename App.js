import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json';
import tw from 'twrnc';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ExerciseList from './src/components/ExerciseList';

export default function App() {

  return (
    <View style={styles.container}>
      <FlatList 
      data={exercises}
      renderItem={ExerciseList}
      keyExtractor={item => item.name}
      contentContainerStyle={{gap: hp('1%')}}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333945',
    paddingHorizontal: wp('4%'),
    justifyContent: 'center',
    paddingTop: hp('8%'),
  },
});
