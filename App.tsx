import React,{useEffect} from 'react';
import {
  Text,
  View
} from 'react-native';
import {requestUserPermission,notificationListener} from "./src/pushNotification"

function App(){
  useEffect(()=>{
    requestUserPermission();
    notificationListener();
  },[])

  return(
    <View>
      <Text>Push Notification</Text>
    </View>
  );
}
export default App;
