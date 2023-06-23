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
      <RTNFaceLandmarker
            text='History'
            style={{ width: '100%', height: 30 }}
          />
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
