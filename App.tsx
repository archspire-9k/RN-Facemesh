import React, { useEffect, useState } from 'react';

import {
  View,
  StyleSheet,
  Platform,
  Alert,
  Text,
  useWindowDimensions
} from 'react-native';

import RTNFaceLandmarker from 'rtn-face-landmarker/js/RTNFaceLandmarkerNativeComponent';
import { check, PERMISSIONS, RESULTS, openSettings, request } from 'react-native-permissions';


function App(): JSX.Element {
  const [isCameraPermissionGranted, setIsCameraPermissionGranted] = useState(false);
  const dimension = useWindowDimensions()
  //TODO: Add support for iOS
  useEffect(() => {
    checkCameraPermission();
  }, [])

  const checkCameraPermission = async () => {
    request(Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA)
      .then(async (result: any) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log('This feature is not available (on this device / in this context)');
            break;
          case RESULTS.DENIED:
            Alert.alert("Permission Denied", "You need to grant camera permission first");
            openSettings();
            break;
          case RESULTS.GRANTED:
            setIsCameraPermissionGranted(true);
            break;
          case RESULTS.BLOCKED:
            Alert.alert("Permission Blocked", "You need to grant camera permission first");
            openSettings();
            break;
        }
      })
  };

  if (isCameraPermissionGranted) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
        <RTNFaceLandmarker style = {dimension} />
      </View>

    );
  } else {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
        <Text style={{ fontSize: 30, color: 'red', alignSelf: 'center' }}>
          You need to grant camera permission first
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  barcodeTextURL: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 24
  },
});

export default App;
