import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { isPlatform } from '@ionic/angular';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  selectImage: any;

  imageElement: any;

  constructor() {}

  ngOnInit() {}

  checkPlatformForWeb() {
    Capacitor.getPlatform() == 'web' ? true : false;
  }

  async getPhoto() {
    await Camera.requestPermissions();
    const image = await Camera.getPhoto({
      quality: 90,
      //allowEditing: true,
      width: 600,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    //var imageUrl = image.webPath;
    // Can be set to the src of an image now
    this.selectImage = image;
    console.log(this.selectImage);
  }
}
