import { stringify } from 'querystring';
import { Component, Input, Output, DoCheck, NgZone, IterableDiffers } from '@angular/core';
import { NavController, ModalController, Events } from '@ionic/angular';
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
import { EventListener, getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { JawlatsDataService } from '../jawlats-data.service';
import { Subscriber } from 'rxjs';
import { Observable, observable } from 'rxjs';
import { detectChangesInRootView } from '@angular/core/src/render3/instructions';

import { LocalStorage } from '@ngx-pwa/local-storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, DoCheck{
@Input () currentJawlah: number;
@Input () farq: number;
@Input () jawlahNo: number;
 jawlats;
  
 
 
constructor(private modalController: ModalController, public jawService: JawlatsDataService,
  protected localStorage: LocalStorage) {
this.currentJawlah = 1;
this.jawlahNo = 1;
this.farq = 0;

}

ngOnChanges(){
  
 
 
}

 ngOnInit() {
  
 
  this.localStorage.getItem<'jawlats'>('jawlats').subscribe((data) => {
   this.jawlats = data;
   console.log(this.jawlats);
});
this.jawlats



 //this.jawService.getJawlatsLength();
 
}
ngDoCheck(){
  
  this.localStorage.getItem<'jawlats'>('jawlats').subscribe((data) => {
    if(this.jawlats !== data){
      this.jawlats = data;

    }
 });



    //  if( sz == null ) {
    //   this.currentJawlah = 1; 
    // }
    //  else{
    //   this.currentJawlah += 1;
    //  }
  }

//  var lanaTotal = this.jawlats.reduce(function(prev, cur) {  
//   return prev + cur.lanaVal;
//   }, 0);
//   var lahomTotal = this.jawlats.reduce(function(prev, cur) {  
//   return prev + cur.lahomVal;
//   }, 0);
  
//   this.farq = Math.abs(Math.abs(lanaTotal) - Math.abs(lahomTotal));




async openModal() {
  const modal = await this.modalController.create({
    component: ModalPage,
    cssClass: 'my-custom-modal-css',
    componentProps: { currentvalue: this.currentJawlah }
  });
  
   
  return await modal.present();
}

async closeModal(){
  const modal = await this.modalController.dismiss();
}
async clearLocalForge(){
  this.localStorage.clear();



}


}
