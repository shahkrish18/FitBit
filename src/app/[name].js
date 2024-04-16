import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import React,{useState} from 'react'
import { useLocalSearchParams } from 'expo-router'
import tw from 'twrnc'
import {Stack} from 'expo-router'
import { gql } from 'graphql-request'
import { useQuery } from '@tanstack/react-query'
import graphqlClient from '../graphqlClient'

const exercisesQuery = gql`
  query exercises($name: String) {
    exercises(name: $name) {
      equipment
      muscle
      name
      instructions
    }
  }
`
const ExerciseDetails = () => {
  const { name } = useLocalSearchParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ['exercises', name],
    queryFn: () => graphqlClient.request(exercisesQuery, { name }),
  });

  const exercise = data?.exercises?.[0]; 
  const [isExpanded, setIsExpanded] = useState(false);

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error occurred while fetching data</Text>;
  }

  if (!exercise) {
    return <Text>Exercise not found</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: exercise.name }} />
      <View style={tw`bg-white rounded-lg p-2 `}>
        <Text style={tw`text-lg font-semibold text-black `}>{exercise.name}</Text>
        <Text style={tw`text-gray-600 text-slate-300 text-transform:capitalize`}>
          {exercise.muscle} | {exercise.equipment}
        </Text>
      </View>
      <View style={tw`bg-white rounded-lg p-2 mt-2 mb-2`}>
        <Text style={tw`leading-5 text-base`} numberOfLines={isExpanded ? 0 : 3}>
          {exercise.instructions}
        </Text>
        <Text onPress={() => setIsExpanded(!isExpanded)} style={tw`self-center font-bold p-1`}>
          {isExpanded ? 'see less' : 'see more'}
        </Text>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333945',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});

export default ExerciseDetails