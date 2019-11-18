package com.panas;

import androidx.fragment.app.FragmentActivity;

import android.os.Bundle;

import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;

public class PanasMapActivity extends FragmentActivity implements OnMapReadyCallback {

    private GoogleMap mMap;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_friends_maps);
        // Obtain the SupportMapFragment and get notified when the map is ready to be used.
        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);
    }


    /**
     * Manipulates the map once available.
     * This callback is triggered when the map is ready to be used.
     * This is where we can add markers or lines, add listeners or move the camera. In this case,
     * we just add a marker near Sydney, Australia.
     * If Google Play services is not installed on the device, the user will be prompted to install
     * it inside the SupportMapFragment. This method will only be triggered once the user has
     * installed Google Play services and returned to the app.
     */
    @Override
    public void onMapReady(GoogleMap googleMap) {
        mMap = googleMap;

        double latitude = (Math.random()*((-0.20-78)+0.5))-78;
        double longitude = (Math.random()*((-0.20-78)+0.5))-77;

        double latitude1 = (Math.random()*((-0.20-78)+0.5))-78;
        double longitude1 = (Math.random()*((-0.20-78)+0.5))-77;

        double latitude2 = (Math.random()*((-0.20-78)+0.5))-78;
        double longitude2 = (Math.random()*((-0.20-78)+0.5))-77;

        double latitude3 = (Math.random()*((-0.20+36)+0.5))-78;
        double longitude3 = (Math.random()*((-0.20-78)+0.5))-77;


        // Add a marker in Sydney and move the camera
        LatLng sydney = new LatLng(-0.20, -78);
        LatLng loja = new LatLng(latitude, longitude);
        LatLng cuenca = new LatLng(latitude2, longitude2);
        LatLng xxx = new LatLng(latitude1, longitude1);
        LatLng ambato = new LatLng(latitude3, longitude3);
        mMap.addMarker(new MarkerOptions().position(sydney).title("Marker in Quito"));
        mMap.addMarker(new MarkerOptions().position(loja).title("Marker in loja"));
        mMap.addMarker(new MarkerOptions().position(cuenca).title("Marker in cuneca"));
        mMap.addMarker(new MarkerOptions().position(ambato).title("Marker in ambato"));
        mMap.addMarker(new MarkerOptions().position(ambato).title("Marker in xxxx"));
        mMap.moveCamera(CameraUpdateFactory.newLatLngZoom(loja, 6));
        mMap.moveCamera(CameraUpdateFactory.newLatLngZoom(cuenca, 6));
        mMap.moveCamera(CameraUpdateFactory.newLatLngZoom(ambato, 6));
        mMap.moveCamera(CameraUpdateFactory.newLatLngZoom(xxx, 6));
//        mMap.moveCamera(CameraUpdateFactory.newLatLngZoom(other, 5));
    }
}
