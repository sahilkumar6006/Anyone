import React from 'react'
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from 'react-native'
// import LoginPage from './components/LoginPage'
//import InstagramLogin from './components/InstagramLogin'
import Card from './components/Card'
import FlatListExample from './components/FlatListExample'
import FlatListExample2 from './components/FlatListExample2'
import Pratice from './components/Pratice'
import ItemSeparatorComponent from './components/ItemSeparatorComponent'

const App = () => {
  
    return (
      <SafeAreaView>
        {/* <ScrollView> */}
        
          
        {/* <Card/>
       <FlatListExample/>}
       

      
      {/* <Pratice/> */}

<FlatListExample2/> 
      {/* <ItemSeparatorComponent/>
           */}

{/* </ScrollView> */}
      </SafeAreaView>
      
    )
  
}

const styles = StyleSheet.create({
  container: {
   
  }
})

export default App;


// import React from 'react';
// import {
//   RefreshControl,
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
// } from 'react-native';

// const App = () => {
//   const [refreshing, setRefreshing] = React.useState(false);

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     setTimeout(() => {
//       setRefreshing(false);
//     }, 2000);
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView
//         contentContainerStyle={styles.scrollView}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//         }>
//         <Text>Pull down to see RefreshControl indicator</Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollView: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;