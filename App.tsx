import React, { useEffect, useState } from 'react';

import {
  View,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import NewModuleButton from './src/components/NewModuleButton';

function App(): JSX.Element {
  const [cameraOn, setCameraOn] = useState(false)

  if (!cameraOn) {
    return (
      <View style = {{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <View>
          <TouchableOpacity onPress={() => setCameraOn(true)} style={{ marginVertical: 30, backgroundColor: '#28a745' }}>
            <Text style={{ marginHorizontal: 20, marginVertical: 10, color: 'white', textAlign: 'center' }}>ON</Text>
          </TouchableOpacity>
          <NewModuleButton/>
        </View>
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
