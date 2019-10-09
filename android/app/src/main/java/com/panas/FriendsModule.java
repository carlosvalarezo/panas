package com.panas;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.android.gms.tasks.Continuation;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.functions.FirebaseFunctions;
import com.google.firebase.functions.FirebaseFunctionsException;
import com.google.firebase.functions.HttpsCallableResult;

import java.util.HashMap;
import java.util.Map;

import androidx.annotation.NonNull;

public class FriendsModule extends ReactContextBaseJavaModule {

    private FirebaseFunctions mFunctions;
    final String[] result = {""};

    public FriendsModule(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "Friends";
    }

    private Task<String> requestFriends() {
        System.out.println("requestFriends starts........*****************");

        // Create the arguments to the callable function.
        Map<String, Object> data = new HashMap<>();
        data.put("name", "lorenxo ");

        mFunctions = FirebaseFunctions.getInstance();

        return mFunctions
                .getHttpsCallable("getFriends")
                .call(data)
                .continueWith(new Continuation<HttpsCallableResult, String>() {
                    @Override
                    public String then(@NonNull Task<HttpsCallableResult> task) throws Exception {
                        Map<String, Object> result = (Map<String, Object>) task.getResult().getData();
                        System.out.println("task........***************** " + result);
                        return result.get("results").toString();
                    }
                });
    }

    @ReactMethod
    public void getFriends(Callback jsCallback){
        System.out.println("getFriends starts........*****************");

        requestFriends()
                .addOnCompleteListener(new OnCompleteListener<String>() {
                    @Override
                    public void onComplete(@NonNull Task<String> task) {
                        if (!task.isSuccessful()) {
                            Exception e = task.getException();
                            if (e instanceof FirebaseFunctionsException) {
                                System.out.println("Error en firebase........***************** " + e);

                                FirebaseFunctionsException ffe = (FirebaseFunctionsException) e;
                                FirebaseFunctionsException.Code code = ffe.getCode();
                                Object details = ffe.getDetails();
                            }
                        }
                        result[0] = task.getResult();
                        jsCallback.invoke(result[0]);
                    }
                });

    }
}
