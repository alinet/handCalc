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
import { Observable, observable ,of } from 'rxjs';
import { detectChangesInRootView } from '@angular/core/src/render3/instructions';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, DoCheck{
currentJawlah: number;
@Input () farq: number;
@Input () jawlahNo: number;
 jawlats;
  
 
 
constructor(private modalController: ModalController, public jawService: JawlatsDataService,
  ) {
this.currentJawlah = 1;
this.jawlahNo = this.currentJawlah;
this.farq = 0;
this.jawService.createDB();

}
 ngOnInit() {
  this.currentJawlah = 1;
}
ngDoCheck(){
  if(this.currentJawlah >= 1){
    this.currentJawlah = this.jawService.jawlats.length + 1;
  }
  var lanaTotal = this.jawService.jawlats.reduce(function(prev, cur) {  
    return prev + cur.values.lanaVal;
    }, 0);
    var lahomTotal = this.jawService.jawlats.reduce(function(prev, cur) {  
      return prev + cur.values.lahomVal;
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

async closeModal(){
  const modal = await this.modalController.dismiss();
}
async clearmystorage(){
this.jawService.ClearData();
this.currentJawlah = 1;
}


}
