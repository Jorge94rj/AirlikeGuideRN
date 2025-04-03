package com.test

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.uimanager.ViewManager

// Define the ReactPackage class
class ManageStoragePermissionPackage : ReactPackage {

    // This method creates the native modules that you want to expose to JavaScript
    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
        // Return a list of native modules
        return listOf(ManageStoragePermissionModule(reactContext))
    }

    // This method creates any custom view managers (if needed)
    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        return emptyList() // If you don't have any custom view managers, return an empty list
    }
}