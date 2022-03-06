/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React from 'react';
 import type {Node} from 'react';
 import Hallo, { Kallo, Nilai, Tambah } from './component/hallo';
 import {
   SafeAreaView,
   TouchableOpacity,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 const Section = ({children, title}): Node => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
 
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   // return (
   //   <SafeAreaView style={backgroundStyle}>
   //     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
   //     <ScrollView
   //       contentInsetAdjustmentBehavior="automatic"
   //       style={backgroundStyle}>
   //       <Header />
   //       <View
   //         style={{
   //           backgroundColor: isDarkMode ? Colors.black : Colors.white,
   //         }}>
   //         <Section title="Step One">
   //           Edit <Text style={styles.highlight}>App.js</Text> yang pertama dan terakhir
 
   //         </Section>
   //         <Section title="See Your Changes">
   //           <ReloadInstructions />
   //         </Section>
   //         <Section title="Debug">
   //           <DebugInstructions />
   //         </Section>
   //         <Section title="Learn More">
   //           Read the docs to discover what to do next:
   //         </Section>
   //         <LearnMoreLinks />
   //       </View>
   //     </ScrollView>
   //   </SafeAreaView>
   // );
 
 
   return (
   
     <View> 
       <Hallo nama="Real Madrid"/>
       <Tambah tambah=" Barcelona"/>
       <Text>=============================================</Text>
       <Nilai nilai="Liga Champion"/>
       <Text>=============================================</Text>
       <Kallo />
     </View>
    
   )
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 
 
 // import React, { useState } from 'react';
 // import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
 // import { style } from './assets/style';
 
 // export default function App() {
 
 //   const [nilai, rubahNilai]=useState(0)
 
 //   return (
 //     <SafeAreaView>
 //       <TouchableOpacity onPress={()=>rubahNilai(nilai+1)}>
 //         <View>
 //           <Text style={style.tulisan}>Tambah</Text>
 //         </View>
 //       </TouchableOpacity>
 //       <View>
 //         <Text style={style.tulisan}>
 //           {nilai}
 //         </Text>
 //       </View>
 //       <TouchableOpacity onPress={() => rubahNilai(nilai - 1)}>
 //         <View>
 //           <Text style={style.tulisan}>
 //             Kurang
 //           </Text>
 //         </View>
 //       </TouchableOpacity>
 //       <TouchableOpacity onPress={() => rubahNilai(0)}>
 //         <View>
 //           <Text style={style.tulisan}>
 //             Reset
 //           </Text>
 //         </View>
 //       </TouchableOpacity>
 //     </SafeAreaView>
 //   );
 // }