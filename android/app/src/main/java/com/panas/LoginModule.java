package com.panas;

import android.app.Activity;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.google.firebase.FirebaseException;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.PhoneAuthCredential;
import com.google.firebase.auth.PhoneAuthProvider;

import java.util.concurrent.TimeUnit;

import javax.annotation.Nonnull;

public class LoginModule extends ReactContextBaseJavaModule {

    private FirebaseAuth mAuth;
    private boolean mVerificationInProgress = false;
    private PhoneAuthProvider.OnVerificationStateChangedCallbacks mCallbacks;


    public LoginModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nonnull
    @Override
    public String getName() {
        return "Login";
    }

    private boolean[] verifyPhoneNumber2(){
        mAuth = FirebaseAuth.getInstance();
        final boolean[] phoneVerified = {false};

        mCallbacks = new PhoneAuthProvider.OnVerificationStateChangedCallbacks() {

            @Override
            public void onVerificationCompleted(@NonNull PhoneAuthCredential phoneAuthCredential) {
                mVerificationInProgress = false;
//                signInWithPhoneAuthCredential(credential);
                phoneVerified[0] = true;

            }

            @Override
            public void onVerificationFailed(@NonNull FirebaseException e) {
                phoneVerified[0] = false;
            }
        };

        return phoneVerified;
    }

    @ReactMethod
    public void startPhoneNumberVerification(String phoneNumber, Callback jsCallback){

        //este metodo debe estar en un activity

        long a = 60;
//        Activity activity = this;
        PhoneAuthProvider.getInstance().verifyPhoneNumber(phoneNumber, a,TimeUnit.SECONDS,new Activity(),mCallbacks  );

        jsCallback.invoke(verifyPhoneNumber2()[0]);

    }
}
