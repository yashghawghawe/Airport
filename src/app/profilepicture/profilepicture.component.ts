import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-profilepicture',
  templateUrl: './profilepicture.component.html',
  styleUrls: ['./profilepicture.component.scss']
})
export class ProfilepictureComponent implements OnInit {

  selectedFile: ImageSnippet;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {

        },
        (err) => {

        }
      );
    });
  }


}
