import { Text, View } from 'react-native';
import tw from 'twrnc';

export default function ExerciseList({item}){
    return(
      <View style={tw`bg-slate-500 rounded p-2`}>
        <Text style={tw`text-lg font-semibold text-white mb-1`}>{item.name}</Text>
        <Text style={tw`text-gray-600 text-slate-300 text-transform: capitalize`}>{item.muscle} | {item.equipment}</Text>
      </View>
    )
  }