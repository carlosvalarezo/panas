package com.panas;

import android.content.Intent;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class JavaActivityModule extends ReactContextBaseJavaModule {

    public JavaActivityModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "JavaActivity";
    }

    @ReactMethod
    public void openJavaActivity() {
        ReactApplicationContext activity = getReactApplicationContext();


        Intent rctActivityIntent = new Intent(activity, PanasMapActivity.class);
        if(rctActivityIntent.resolveActivity(activity.getPackageManager()) !=null ) {
            rctActivityIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            activity.startActivity(rctActivityIntent);
        }

    }

    @ReactMethod
    public void returnStringFromJava(String text, Callback function){
        String result = text + " mundo!";
        function.invoke(result);

    }
}
