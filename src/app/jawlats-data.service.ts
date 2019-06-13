import { Injectable } from '@angular/core';
import { promisify } from 'util';
import { Observable, empty } from 'rxjs';
import { NgxIndexedDB } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class JawlatsDataService {
  public allJawlat = [];
  public jawlats = [];
  public tasjlat = [];
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
        this.jawlats = ja.filter(v => v.values.isTasjilah === false);
        const tas = ja.filter(v => v.values.isTasjilah === true);
        this.tasjlat = tas;
        console.log(this.tasjlat);
    //    console.log(this.jawlats);
         console.log(this.jawlats.length);
          this.allJawlat = this.jawlats.concat(this.tasjlat);
          console.log(this.allJawlat);
          return this.allJawlat
           
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
            this.jawlats = ja.filter(v => v.values.isTasjilah === false);
            const tas = ja.filter(v => v.values.isTasjilah === true);
            this.tasjlat = tas;
            this.allJawlat = this.jawlats.concat(this.tasjlat);
            
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
          this.tasjlat = [];
          this.jawlats.pop();
          this.tasjlat.pop();
          this.allJawlat = [];
          this.allJawlat.pop();
      },
      error => {
          console.log(error);
        }
          );
        }
  }

