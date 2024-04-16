import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import exercises from '../../assets/data/exercises.json'
import tw from 'twrnc';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ExerciseList from '../components/ExerciseList';
import { useQuery } from '@tanstack/react-query';

export default function ExerciseScreen() {

  const {data, isLoading}=useQuery({
    queryKey:['exercises'],
    queryFn:()=>{
      return exercises;
    }
  })

  if(isLoading){
    return <ActivityIndicator />
  }
  return (
    <View style={styles.container}>
      <FlatList 
      data={data}
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
    paddingTop: hp('1%'),
  },
});