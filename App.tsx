import React, { useEffect, useState } from 'react';

import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import NewModuleButton from './src/components/NewModuleButton';
import RTNFaceLandmarker from 'rtn-face-landmarker/js/RTNFaceLandmarkerNativeComponent';

function App(): JSX.Element {
  const [cameraOn, setCameraOn] = useState(false)

  if (!cameraOn) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
        <RTNFaceLandmarker style={{width: 300, height: 300}}/>
        <NewModuleButton/>
      </View>
      
    );
  }

  return (
    <>
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
