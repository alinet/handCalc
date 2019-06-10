import { Injectable } from '@angular/core';
import { promisify } from 'util';
import { Observable, empty } from 'rxjs';
import { NgxIndexedDB } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class JawlatsDataService {
  public jawlats = [];
  public values;
  handDB = new  NgxIndexedDB('handData', 1);
 constructor() 
  { console.log('Jawlats Service Works');}

  createDB(){
    this.handDB.openDatabase(1, evt => {
      let objectStore = evt.currentTarget.result.createObjectStore('jawlatData', { keyPath: 'id', autoIncrement: true});
      console.log('table creared and Open');
   });
  }

  getJawlat() {
    this.handDB.openDatabase(1, evt => {
      let objectStore = evt.currentTarget.result.createObjectStore('jawlatData', { keyPath: 'id', autoIncrement: true});
      console.log('table creared and Open');
   }).then(() =>
    this.handDB.getAll('jawlatData').then(
      (ja) => {
        this.jawlats = ja;
        return this.jawlats
    },
       error => {
           console.log(error);
       }
   ));
    }

  createJawlah(values){
    this.handDB.add('jawlatData', { values }).then(
      () => {
         console.log('added complete')
         this.handDB.getAll('jawlatData').then(
          (ja) => {
            this.jawlats = ja;
          
      },
      error => {
          console.log(error);
      }
        );
    });
    };
  ClearData(){
    this.handDB.clear('jawlatData').then(
      () => {
          console.log('Cleared');
          this.jawlats = [];
          this.jawlats.pop();
      },
      error => {
          console.log(error);
        }
          );

      
        }

       
  }

