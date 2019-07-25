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
import { AlertController } from '@ionic/angular';
import { DISABLED } from '@angular/forms/src/model';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, DoCheck{
currentJawlah: number;
@Input () farq: number;
@Input () jawlahNo: number;
@Input () toAddorNot: boolean;

 //jawlats;
 allJawlat;  
 
 
constructor(private modalController: ModalController, public jawService: JawlatsDataService,
 public alertController: AlertController ) {
this.currentJawlah = 1;
this.jawlahNo = this.currentJawlah;
this.farq = 0;
this.jawService.createDB();

}

 ngOnInit() {
  this.currentJawlah = 1;
  this.jawService.getJawlat();
  
 
}
ngDoCheck(){
  if(this.currentJawlah >= 1){
    this.currentJawlah = this.jawService.jawlats.length + 1;
  }
  
  var lanaTotal = this.jawService.allJawlat.reduce(function(prev, cur) {  
    return prev + cur.values.lanaVal;
    }, 0);
    var lahomTotal = this.jawService.allJawlat.reduce(function(prev, cur) {  
      return prev + cur.values.lahomVal;
      }, 0);
      this.farq = Math.abs(Math.abs(lanaTotal) - Math.abs(lahomTotal));

      let lanaLabel = document.getElementById('lanalbl')
      let lahomLabel = document.getElementById('lahomlbl')
      if(Math.abs(lanaTotal) > Math.abs(lahomTotal)){
       // console.log('lana is a losser')
       
        lanaLabel.style.color = 'red';
        lahomLabel.style.color = 'black';
      }else if(Math.abs(lahomTotal) > Math.abs(lanaTotal)) {
      //  console.log('lahom is a losser')
        lanaLabel.style.color = 'black';
        lahomLabel.style.color = 'red';
      }else {
        lanaLabel.style.color = 'black';
        lahomLabel.style.color = 'black';
      }

      if(this.currentJawlah == 6 && this.farq > 600){
        this.toAddorNot = true;
    }
    if(this.currentJawlah == 5 && this.farq > 1320){
      this.toAddorNot = true;
    }
  if(this.currentJawlah == 4 && this.farq > 1980){
      this.toAddorNot = true;
    }
    if(this.currentJawlah == 8){
      this.toAddorNot = true;
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

async closeModal(){
  const modal = await this.modalController.dismiss();
}
async clearmystorage(){
  const alert = await this.alertController.create({
    header: 'لعبة جديدة',
    message: '<strong>هل انت متاكد ؟ </strong>',
    buttons: [
      {
        text: 'لا',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
         // console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'نعم',
        handler: () => {
           this.jawService.ClearData();
          this.currentJawlah = 1; 
          this.toAddorNot = false; 
         // console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();
 
}


}
