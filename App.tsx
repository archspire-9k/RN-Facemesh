import { useSharedValue } from 'react-native-reanimated'
import React, { useEffect, useState } from 'react';

import { Camera, useCameraDevices, CameraDevice, useFrameProcessor } from 'react-native-vision-camera';
import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useIsForeground } from './src/hooks/useIsForeground';
import NewModuleButton from './src/components/NewModuleButton';


function App(): JSX.Element {

  const devices = useCameraDevices();
  const device = devices.back;
  const isForeground = useIsForeground();
  const barcodeScanned = useSharedValue(false);

  const [cameraOn, setCameraOn] = useState(false);
  const [permissions, setPermissions] = useState(false);
  const [cameraList, setCameraList] = useState<CameraDevice[]>([]);


  const getPermissions = async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    if (cameraPermission === 'authorized') {
      setPermissions(true);
    }
  };

  const requestPermissions = async () => {
    const newCameraPermission = await Camera.requestCameraPermission().catch((error) => console.warn("camera error:", error));
    if (newCameraPermission === 'authorized') {
      setPermissions(true);
    }
    else if (newCameraPermission === 'denied') {
      //todo: link to setting to change manually
    }
  };

  const getAllCams = async () => {
    const allCams = await Camera.getAvailableCameraDevices().catch((error) => console.warn("Problem getting camera devices:", error));
    if (allCams !== undefined) {
      setCameraList(allCams)
    } else {
      setCameraList([]) // set default value
    }

    return () => {
      console.log("Returned all cameras")
    }
  };


  const frameProcessor = useFrameProcessor((frame) => {
    'worklet';
  }, []);

  useEffect(() => {
    getPermissions();
    getAllCams();

  }, []);

  if (!permissions) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>No permissions</Text>
        <Button title="Request Permission" onPress={requestPermissions}></Button>
      </View>
    );
  }

  if (!device) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading</Text>
      </View>
    );
  }

  if (!cameraOn) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Turn on the camera</Text>
          <TouchableOpacity onPress={() => setCameraOn(true)} style={{ marginVertical: 30, backgroundColor: '#28a745' }}>
            <Text style={{ marginHorizontal: 20, marginVertical: 10, color: 'white' }}>ON</Text>
          </TouchableOpacity>
          <NewModuleButton />
        </View>
    );
  }

  return (
    <>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isForeground}
        // frameProcessor={frameProcessor}
        frameProcessorFps={5}
      />
    </>
  );

}

const styles = StyleSheet.create({
  barcodeTextURL: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 24
  },
});

export default App;
