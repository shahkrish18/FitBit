import { Text, Pressable } from 'react-native';
import tw from 'twrnc';
import { Link } from 'expo-router';

export default function ExerciseList({ item }) {
  return (
    <Link href={`/${item.name}`} asChild>
      <Pressable style={tw`bg-slate-500 rounded-lg p-2 shadow-lg`}>
        <Text style={tw`text-lg font-semibold text-white `}>{item.name}</Text>
        <Text style={tw`text-gray-600 text-slate-300 text-transform:capitalize`}>
          {item.muscle} | {item.equipment}
        </Text>
      </Pressable>
    </Link>
  );
}