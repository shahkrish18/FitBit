import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ExerciseList from '../components/ExerciseList';
import { useQuery } from '@tanstack/react-query';
import { gql } from 'graphql-request';
import client from '../graphqlClient';

const exercisesQuery = gql
  `query exercises($muscle: String, $name: String){
    exercises(muscle: $muscle, name: $name){
        name
        muscle
        equipment
    }
  }`

export default function ExerciseScreen() {

  const {data, isLoading, error}=useQuery({
    queryKey:['exercises'],
    queryFn: ()=>client.request(exercisesQuery)
  })

  if(isLoading){
    return <ActivityIndicator />
  }

  if(error){
    return <Text style={tw`text-white`}>Error occured while fetching data</Text>
  }

  // console.log(data)
  // console.log(error)
  return (
    <View style={styles.container}>
      <FlatList 
      data={data?.exercises || []}
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