import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import exercises from '../../assets/data/exercises.json'
import tw from 'twrnc'

const ExerciseDetails = () => {

  const params = useLocalSearchParams();
  const exercise = exercises.find((item) => item.name === params.name)

  if(!exercise) {
    return (
      <View>
        <Text>Exercise not found</Text>
      </View>
    )
  }

  return (
    <View style={tw`p-5`} >
      <Text style={tw`text-lg font-semibold text-black mb-1`}>{exercise.name}</Text>
        <Text style={tw`text-gray-600 text-slate-300 text-transform:capitalize`}>
          {exercise.muscle} | {exercise.equipment}
        </Text>
    </View>
  )
}

export default ExerciseDetails