import { Injectable } from '@angular/core';
import { promisify } from 'util';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class JawlatsDataService {
  public jawlats;
  public values;
  public size:number;
  constructor(protected localStorage: LocalStorage) 
  { console.log('Jawlats Service Works');}
  getJawlatsLength (){
    this.localStorage.size.subscribe((size) => {
   this.size = size;
    });
    return this.size;
  }

  getJawlats() {
 this.localStorage.getItem<[]>('jawlats').subscribe((data) => {
  this.jawlats = data;
});

return this.jawlats;
  }

  createJawlah(values){
    this.localStorage.setItem('jawlats',values).subscribe(() => {
          
      console.log(values);
     });
      }

    }


    // check this out https://itnext.io/pwa-from-scratch-guide-yet-another-one-bdfa438b50aa