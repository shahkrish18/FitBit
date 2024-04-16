import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json';
import tw from 'twrnc';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function App() {

  const exercise = exercises[0];

  return (
    <View style={styles.container}>
      <View style={tw`rounded`}>
        <Text style={tw`text-lg font-semibold text-white mb-1`}>{exercise.name}</Text>
        <Text style={tw`text-gray-600 text-slate-300`}>{exercise.muscle.toUpperCase()} | {exercise.equipment.toUpperCase()}</Text>
        <Text>{exercise.name}</Text>
      </View>
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
  },
});
