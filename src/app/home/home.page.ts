import { stringify } from 'querystring';
import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ModalPage } from '../pages/modal/modal.page';
import {  OnInit, Injectable } from '@angular/core';
import {  IonSelectOption, IonItemOption, IonSelect } from '@ionic/angular';
import { RadioControlRegistry } from '@angular/forms/src/directives/radio_control_value_accessor';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl, Form, FormsModule } from '@angular/forms';
import { REACTIVE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';
import { Directive } from '@angular/core';
import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor(private modalController: ModalController) {
}

ngOnInit() {
  var sumLana = 0;
  var sumLahom =0;
  var farq = 0;
  for (var i = 0; i < localStorage.length; i++){
   // console.log(localStorage.getItem(localStorage.key(i)));
   
   // console.log(localStorage.getItem(localStorage.key(i)));
   
    var all = (localStorage.key(i));
   var myall = JSON.parse(localStorage.getItem(all));
   const sumLanaVal = myall[2];
   const sumLahomVal = myall[3];
  sumLana += sumLanaVal;
  sumLahom += sumLahomVal;
  farq = sumLahom - sumLana;
  //var myval =Math.abs(farq);
 }
 //console.log(sumLana);
 //console.log(sumLahom);
 console.log(sumLana,sumLahom,farq);

}
async openModal() {
  const modal = await this.modalController.create({
    component: ModalPage,
    cssClass: 'my-custom-modal-css',
  //  componentProps: { value: 123 }
  });
  return await modal.present();
}
async clearLocalForge(){
localStorage.clear();


}

 
}
