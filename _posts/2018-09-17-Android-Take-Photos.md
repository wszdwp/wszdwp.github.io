---
title: Take photo save and upload  
layout: post
tags: Android 
---

# Take or select photo save and upload    

## Flow  
1. Launch camera with custom image file name  
2. Image file saved with image data when camera callback return ok
3. Copy image file into gallery
3. Update data source of recylerview with corresponding custom image file path
4. Refresh row to display photo in bitmap format  
5. Send upload request to server in POST multipart/form row by row in receylerview  
6. Update data source of recylerview with corresponding upload response  
7. Refresh row to display upload status  

## Launch camera with custom image file name   
Permissions in **AndroidManifest.xml**
```xml
    <uses-feature
        android:name="android.hardware.camera"
        android:required="true" />

    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
```

Intent to launch camera
```java
    private void dispatchTakePictureIntent() {
        Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        // Ensure that there's a camera activity to handle the intent
        if (takePictureIntent.resolveActivity(getPackageManager()) != null) {
            // Create the File where the photo should go
            File imageFile = null;
            try {
                imageFile = createImageFile();
            } catch (IOException ex) {
                Log.v(LOG_TAG, "CREATE FILE FAILED");
            }
            // Continue only if the File was successfully created
            if (imageFile != null) {
                if (Build.VERSION.SDK_INT < Build.VERSION_CODES.N) {
                    Uri photoUri = Uri.fromFile(imageFile);
                    takePictureIntent.putExtra(MediaStore.EXTRA_OUTPUT, photoUri);
                } else {
                    Uri photoUri = FileProvider.getUriForFile(this,
                            BuildConfig.APPLICATION_ID + ".fileprovider",
                        imageFile);
                    Log.v(LOG_TAG, "photoUri " + photoUri);
                    takePictureIntent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION
                            | Intent.FLAG_GRANT_WRITE_URI_PERMISSION);
                    takePictureIntent.putExtra(MediaStore.EXTRA_OUTPUT, photoUri);
                }
                startActivityForResult(takePictureIntent, REQUEST_IMAGE_CAPTURE);
            }
        }
    }

    // helper function to create custom file to place the image
    private File createImageFile() {
        // Create an image file name
        String picName = S2kUtility.generateImageName(scrapItemInfo.getItem(), scrapItemInfo.getQuantity(), currentRow);
        File storageDir = getExternalFilesDir(Environment.DIRECTORY_PICTURES);
        File imageFile = null;
        try {
            imageFile = File.createTempFile(
                    picName,                                        /* prefix */
                    PIC_SUFFIX,                                     /* suffix */
                    storageDir                                      /* directory */
            );
        } catch (IOException e) {

        }
        return imageFile;
    }
```

Call back from camera  
```java
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == REQUEST_IMAGE_CAPTURE) {
            if (resultCode == RESULT_OK) {
                fromAlbum = false;
                checkPermissionForWriteExternalStorage();
            }
        }
    }
```

问题：
1 onBindViewHolder 绑定 upload aysnctask
当cell不可见时，onBindViewHolder方法不会被叫到，upload不会触发

2 选相机照片crash，
request permission的顺序

3 相机选照片无法获取正确uri

4 拍照后相片rotate 

知识点
1. 如何读写文件
2. 如何文件，图像转换
3. 如何压缩图像
4. 如何旋转图像
5. fileProvider的使用 
6. 

Intent to launch camera
add permissions  
launch camera  




refs  
[https://developer.android.com/training/camera/photobasics](https://developer.android.com/training/camera/photobasics)  