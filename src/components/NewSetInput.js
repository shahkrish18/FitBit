import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React,{useState} from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import tw from 'twrnc'

const NewSetInput = () => {

    const addSet = () => {
        console.warn('Adding set: ',reps,weight)
        setReps('')
        setWeight('')
    }

    const [reps, setReps] = useState('')
    const [weight, setWeight] = useState('')
  return (
    <View style={styles.container}>
      <TextInput value={reps} onChangeText={setReps} placeholder="Reps" keyboardType="numeric" style={styles.input} />
      <TextInput value={weight} onChangeText={setWeight} placeholder="Weight" keyboardType="numeric" style={styles.input} />
      <Button title="Add" onPress={addSet}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: wp('4%'),
        justifyContent: 'center',
        paddingTop: hp('1%'),
        borderRadius: 5,
        flexDirection: 'row',
        padding: 10,
        gap: 10,
        alignItems: 'center',
    },
    input:{
        borderWidth: StyleSheet.hairlineWidth,
        padding: 10,
        flex: 1,
        borderRadius: 5,
    }
})
export default NewSetInput