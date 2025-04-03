package com.test

import android.content.Intent
import android.net.Uri
import android.provider.Settings
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback

class ManageStoragePermissionModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "ManageStoragePermission"
    }

    @ReactMethod
    fun requestManageExternalStoragePermission(successCallback: Callback, errorCallback: Callback) {
        try {
            // val intent = Intent(Settings.ACTION_MANAGE_APP_ALL_FILES_ACCESS_PERMISSION)
            // intent.data = Uri.parse("package:" + reactApplicationContext.packageName)
            // currentActivity?.startActivityForResult(intent, 1)
            // successCallback.invoke("Request sent")

            // SECOND APPROACH
            // val intent = Intent(
            //     if (Build.VERSION.SDK_INT >= 19) Intent.ACTION_OPEN_DOCUMENT else Intent.ACTION_GET_CONTENT
            // ).apply {
            //     addCategory(Intent.CATEGORY_OPENABLE)
            //     type = "application/*"
            // }
            // activity.startActivityForResult(intent, PICKFILE_RESULT_CODE)
        } catch (e: Exception) {
            errorCallback.invoke(e.message)
        }
    }
}
