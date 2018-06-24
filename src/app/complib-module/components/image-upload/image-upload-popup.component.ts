import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload-popup.component.html'
})
export class ImageUploadPopupComponent implements OnInit {

  @ViewChild('imgUpload') imgUpload: any;

  @Input() config = {};
  @Input() displaySizeInfo = {
    enabled: true,
    size: 2048
  };
  @Input() isUploading = false;
  @Output() sendImage: EventEmitter<any> = new EventEmitter<any>();
  showModal = false;
  // croppedSize: number;

  @ViewChild('myFileInput') myInput: any;

  options = {
    fileSize: 2048, // in Bytes (by default 2048 Bytes = 2 MB)
    minWidth: 0, // minimum width of image that can be uploaded (by default 0, signifies any width)
    maxWidth: 0,  // maximum width of image that can be uploaded (by default 0, signifies any width)
    minHeight: 0,  // minimum height of image that can be uploaded (by default 0, signifies any height)
    maxHeight: 0,  // maximum height of image that can be uploaded (by default 0, signifies any height)
    fileType: ['image/gif', 'image/jpeg', 'image/png'], // mime type of files accepted
    crop: [  // array of objects for mulitple image crop instances (by default null, signifies no cropping)
      {
        ratio: 1, // ratio in which image needed to be cropped (by default null, signifies ratio to be free of any restrictions)
        minWidth: 0, // minimum width of image to be exported (by default 0, signifies any width)
        maxWidth: 0,  // maximum width of image to be exported (by default 0, signifies any width)
        minHeight: 0,  // minimum height of image to be exported (by default 0, signifies any height)
        maxHeight: 0,  // maximum height of image to be exported (by default 0, signifies any height)
        width: 0,  // width of image to be exported (by default 0, signifies any width)
        height: 0,  // height of image to be exported (by default 0, signifies any height)
      }
    ]
  };

  hasPreview = false;
  imgSrc: any = new Image();

  constructor(private _ref: ChangeDetectorRef,
              private _router: Router) {}

  ngOnInit() {
    if (this.config) {
      this.options = Object.assign(this.options, this.config);
    }
    this.showModal = true;
    setTimeout(() => {
      this.imgUpload.show();
      this._ref.markForCheck();
    }, 0);
  }

  getImage() {
    console.log(this.myInput.nativeElement);
    const file = this.myInput.nativeElement.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.imgSrc = reader.result;
      this.hasPreview = true;
      console.log(this.imgSrc);
    };

    // var fileToLoad = filesSelected[0];
    //
    // var fileReader = new FileReader();
    //
    // fileReader.onload = function(fileLoadedEvent) {
    //   var srcData = fileLoadedEvent.target.result; // <--- data: base64
    //
    //   var newImage = document.createElement('img');
    //   newImage.src = srcData;
    //
    //   document.getElementById("imgTest").innerHTML = newImage.outerHTML;
    //   alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
    //   console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
    // }
    // fileReader.readAsDataURL(fileToLoad);
    this._ref.markForCheck();
  }

  show() {
    this.imgUpload.show();
  }

  hide() {
    this.imgUpload.hide();
    this.removePreview();
  }

  selectImg(event) {
    this.hasPreview = true;
    this.imgSrc = event;
    console.log(this.imgSrc);
    // this.calculateCroppedSize();
    this._ref.markForCheck();
  }

  // calculateCroppedSize() {
  //     const noHeader = this.imgSrc.split('base64,')[1];
  //     this.croppedSize = (noHeader.replace(/=/g, '').length * 0.75) / 1024.0;
  // }

  removePreview() {
    this.imgSrc = '';
    // this.croppedSize = 0;
    this.hasPreview = false;
    this._ref.markForCheck();
  }

  upload() {
    this.sendImage.emit(this.imgSrc);
    this._ref.markForCheck();
  }

  closePopup() {
    this.imgUpload.hide();
    this.showModal = false;
    return this._router.navigate([{outlets: {popup: null}}]);
  }
}

