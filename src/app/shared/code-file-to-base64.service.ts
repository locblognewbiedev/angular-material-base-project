import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodeFileToBase64Service {

  constructor() { }

  public async readAsBase64(file:File) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        resolve(fileReader.result as string);
      }

      fileReader.onerror = (e) => {
        reject(e)
      }

      fileReader.readAsDataURL(file);
    })
  }
}
