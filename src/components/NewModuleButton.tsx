import React from 'react';
import { Button } from 'react-native';
import FaceLandmarkModule from '../../FaceLandmarkModule';

const NewModuleButton = () => {
    const onPress = () => {
        console.log('We will invoke the native module', FaceLandmarkModule == null ? null : "FaceLandmark",'!');
        FaceLandmarkModule.createFaceLandmarkEvent()
    };

    return (
        <Button
            title="Click to invoke your native module!"
            color="#841584"
            onPress={onPress}
        />
    );
};

export default NewModuleButton;