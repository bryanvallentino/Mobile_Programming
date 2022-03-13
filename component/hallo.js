import React, { useState } from 'react'
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { style } from '../assets/style';

export default function Hallo(props) {


  return (
    <View>

      <Text style={{fontSize: 20,color: 'white', alignSelf: 'center'}}>Pertandingan {props.nama}</Text>
    </View>
  );
}

export function Tambah(props) {

  return (
    <View>
      <Text style={{fontSize: 20,color: 'white', alignSelf: 'center'}}>Pertandingan{props.tambah}</Text>
    </View>
  )
}
export function Nilai(props) {
  return (
    <View>
      <Text style={{fontSize: 20,color: 'white', alignSelf: 'center'}}>Final {props.nilai}</Text>
    </View>

  )
}




export function Kallo() {

  const [angka, rubahNilai] = useState(0)

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => rubahNilai(angka + 1)}>
        <View>
          <Text style={{fontSize: 20,color: 'white', alignSelf: 'center'}}>Tambah</Text>
        </View>
      </TouchableOpacity>
      <View>
        <Text style={{fontSize: 20,color: 'blue', alignSelf: 'center'}}>
          {angka}
        </Text>
      </View>
      <TouchableOpacity onPress={() => rubahNilai(angka - 1)}>
        <View>
          <Text style={{fontSize: 20,color: 'white', alignSelf: 'center'}}>
            kurang
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => rubahNilai(0)}>
        <View>
          <Text style={{fontSize: 20,color: 'red', alignSelf: 'center'}}>
            Reset
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}