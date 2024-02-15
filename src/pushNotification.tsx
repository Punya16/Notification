import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}
export const notificationListener=async()=>{
  messaging().onNotificationOpenedApp(remoteMessage=>{
    console.log('Notification caused app to open from background state:',
    remoteMessage.notification,
    );
  });

  messaging()
      .getInitialNotification()
      .then(remoteMessage=>{
        if(remoteMessage){
          console.log('Notification caused app to open from quit state:',
          remoteMessage.notification,
          );
        }
        });

  messaging().onMessage(async remoteMessage=>{
    console.log("Notification On First State",remoteMessage)
  })
  }
  
async function getFCMTooken(){
  try{
    await messaging().registerDeviceForRemoteMessages();
    const token=await messaging().getToken();
    if(token){
      console.log("FCM Token",token)
    }
    else{
      console.log("FCM Token available");
    }
  }catch(error){
    console.log("Error",error);
  }
};
