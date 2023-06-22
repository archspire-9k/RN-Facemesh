package com.rnfacemesh;

import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class FaceLandmarkModule extends ReactContextBaseJavaModule {
    FaceLandmarkModule(ReactApplicationContext context) {
        super(context);
    }
    // add to CalendarModule.java
    @Override
    public String getName() {
        return "FaceLandmarkModule";
    }

    @ReactMethod
    public void createFaceLandmarkEvent() {
        Log.d("Module", "Create event called FaceLandmark");
    }
}

