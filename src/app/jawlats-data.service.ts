import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JawlatsDataService {

  constructor() { 
    
    console.log('Jawlats Service Works');
  }

  getJawlats() {
    let jawlats = JSON.parse(localStorage.getItem('jawlats'));
    return jawlats;
  }


}
