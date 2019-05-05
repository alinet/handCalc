import { stringify } from 'querystring';
import { Component, Input, Output, DoCheck, NgZone } from '@angular/core';
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
import { JawlatsDataService } from '../jawlats-data.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, DoCheck{
@Input () currentJawlah: string;
@Input () farq: number;
@Input () jawlahNo: string;
 jawlats ;
constructor(private modalController: ModalController, private jawService: JawlatsDataService) {
this.currentJawlah = '1';
this.jawlahNo = '1';
this.farq = 0;

}
 ngOnInit() {
this.jawlats = this.jawService.getJawlats();

}


ngDoCheck(){
//  this.jawlats;
   if( this.jawlats.length == 'null' || this.jawlats.length == 0){
     this.currentJawlah = '1';
    
    }
   else {
  this.currentJawlah = this.jawlats.length + 1;
  
  //console.log(this.currentJawlah);
  
  

  
  var lanaTotal = this.jawlats.reduce(function(prev, cur) {  
  return prev + cur.lanaVal;
  }, 0);
  var lahomTotal = this.jawlats.reduce(function(prev, cur) {  
  return prev + cur.lahomVal;
  }, 0);
  
  this.farq = Math.abs(Math.abs(lanaTotal) - Math.abs(lahomTotal));


 }


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
