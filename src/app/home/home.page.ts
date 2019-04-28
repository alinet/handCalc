import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ModalPage } from '../pages/modal/modal.page';
import {  OnInit, Injectable } from '@angular/core';
import {  IonSelectOption, IonItemOption, IonSelect } from '@ionic/angular';
import { RadioControlRegistry } from '@angular/forms/src/directives/radio_control_value_accessor';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl, Form, FormsModule } from '@angular/forms';
import { REACTIVE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';
import { Directive } from '@angular/core';
import {NgForageModule, NgForageConfig, Driver, NgForage} from 'ngforage';
import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
constructor(private modalController: ModalController, public ngstore: NgForage) {
}

ngOnInit() {
  for (var i = 0; i < localStorage.length; i++){
    localStorage.getItem(localStorage.key(i));
   
   // console.log(localStorage.getItem(localStorage.key(i)));
   
    var all = (localStorage.key(i));
   var myall = JSON.parse(localStorage.getItem(all));
   
   

  
console.log(myall[3]);
  

 }
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
this.ngstore.clear();


}

 
}
