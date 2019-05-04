import { stringify } from 'querystring';
import { Component, Input } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ModalPage } from '../pages/modal/modal.page';
import {  OnInit, Injectable } from '@angular/core';
import {  IonSelectOption, IonItemOption, IonSelect } from '@ionic/angular';
import { RadioControlRegistry } from '@angular/forms/src/directives/radio_control_value_accessor';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl, Form, FormsModule } from '@angular/forms';
import { REACTIVE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';
import { Directive } from '@angular/core';
import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';
import { ReturnStatement } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { EventListener } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
@Input () currentJawlah: string;
@Input () farq: number;
@Input () jawlahNo: string;
@Input ()jawlats:any[];

constructor(private modalController: ModalController) {
this.currentJawlah ='1';
this.jawlahNo ='1';
this.farq = 0;



}

ngOnInit() {

  for (var i = 0; i < localStorage.length; i++){
  var all = (localStorage.key(i));
  let myalls = JSON.parse(localStorage.getItem(all));
 this.jawlats = myalls;
  //this.currentJawlah = '1';
 }
}

ngDoCheck(){

  
  var all = (localStorage.key(i));
  let myalls = JSON.parse(localStorage.getItem(all));

  if( myalls.length == 'null'){
    this.currentJawlah = '1';
    }
  else {
  this.currentJawlah = myalls.length + 1;
  
  //console.log(this.currentJawlah);
  
  }
  
  for (var i = 0; i < localStorage.length; i++){
   var all = (localStorage.key(i));
 if(all == 'tasjilah'){
     var b ;
     b = parseInt(this.currentJawlah) -1;
     this.currentJawlah = b.toString();
   
   }
   
 }
  // for (var i = 0; i < localStorage.length; i++){
  //    let all = (localStorage.key(i));
  //   let myalls = JSON.parse(localStorage.getItem(localStorage.getItem(all)));
  //   //
  //   }

 // this.jawlats = myalls;
if (this.jawlats == [null] || this.jawlats == [0]){
   
}

 var lanaTotal = myalls.reduce(function(prev, cur) {  
  return prev + cur.lanaVal;
}, 0);
var lahomTotal = myalls.reduce(function(prev, cur) {  
  return prev + cur.lahomVal;
}, 0);

this.farq = Math.abs(Math.abs(lanaTotal) - Math.abs(lahomTotal));
}

async openModal() {
  const modal = await this.modalController.create({
    component: ModalPage,
    cssClass: 'my-custom-modal-css',
    componentProps: { currentvalue: this.currentJawlah }
  });
  return await modal.present();
}
async clearLocalForge(){
localStorage.clear();


}


}
