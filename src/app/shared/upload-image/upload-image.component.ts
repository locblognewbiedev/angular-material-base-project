import { Component, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CodeFileToBase64Service } from '../code-file-to-base64.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UploadImageComponent),
      multi:true
    }
  ]
})
export class UploadImageComponent implements ControlValueAccessor {

  constructor(private codeFileToBase64: CodeFileToBase64Service) { }
  

  public selectedImage?: File;
  public selectedImageBase64:string = ''
  private onChange: Function = (value: any) => {};
  private onTouched: Function = () => { }
  
  onFileChange(e:Event) {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.selectedImage = file;
      this.codeFileToBase64.readAsBase64(file).then((base64) => {
        this.selectedImageBase64 = base64 as string;
        this.onChange(base64);
        this.onTouched();
      })
    }
  }
  writeValue(obj: File): void {
    this.selectedImage = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
}
