import { Injectable } from '@angular/core';
import { promises } from 'fs';
import { promisify } from 'util';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class JawlatsDataService {
  public jawlats;
  jawlalength: any;
  public values;
  constructor(protected localStorage: LocalStorage) 
  { console.log('Jawlats Service Works');}
  getJawlatsLength (){
     // this.storage.get('jawlats').then((data) =>{
     //     console.log(data.length);
     //     this.jawlalength = data.length;
    // });
  }

  getJawlats() {
    const studentsObservable = new Observable(observer => {
          observer.next(this.localStorage.getItem('jawlats'));
          observer.complete;
});

return studentsObservable;
   
  // this.localStorage.getItem<'jawlats'>('jawlats').subscribe((jawlats) => {
  //   // this.jawlats = JSON.parse(data);
    
  //   console.log(jawlats);
   
  //   return jawlats;
    
  // });

  }
  createJawlah(values){
    this.localStorage.setItem('jawlats', values).subscribe(() => {});
      console.log(values);
        };
    }