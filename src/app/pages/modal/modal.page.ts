import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { ModalController, IonSelectOption, IonItemOption, IonSelect, IonInput } from '@ionic/angular';
import { RadioControlRegistry, RADIO_VALUE_ACCESSOR } from '@angular/forms/src/directives/radio_control_value_accessor';
import {  FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, FormControl, Form, Validators } from '@angular/forms';
import { REACTIVE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';
import { Directive } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';

import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';
import { stringify } from '@angular/core/src/util';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  
})

export class ModalPage implements OnInit {
 jawlahNo: number;
 winnerTeam: string;
  winType: string;
  lanaVal: number;
  lahomVal: number;
  isTasjilah: boolean;
 jawalinfo: any[];
 nazilCount: number;
  myForm: FormGroup;
  majmo: string;
   

  
  constructor(private modalController: ModalController, public fb: FormBuilder) {
  }
  async closeModal() {
    const modal = await this.modalController.dismiss();
    return modal;
   }
  ngOnInit() {
     this.myForm = this.fb.group({
     //winner : [''],
    });
  }

  teamValue(event)
  {this.winnerTeam = event.detail.value;  }

  winnerValue(event)
  { this.winType = event.detail.value;}

  nazilValue(event) {
    this.nazilCount = event.detail.value;
    //console.log(this.nazilCount);
  }

  majmoValue(event){
   this.majmo = event.target.value;
     
  }
  
onSubmit(): void {
 
  var alength = localStorage.length;
    //team lana 
    if(this.winnerTeam == 'lana' && this.winType == 'khlosSafi'){
      if(alength == 0){ this.jawlahNo = 0; this.jawlahNo += 1; } else { this.jawlahNo +=1}
          this.lanaVal = -30;
          this.lahomVal = 300;
          this.isTasjilah = false;
    }
    else if(this.winnerTeam =='lana' && this.winType == 'dabalSafi'){
      if (alength== 0) {this.jawlahNo = 0;this.jawlahNo += 1; } else {this.jawlahNo +=1}
      this.lanaVal = -60;
      this.lahomVal = 600;
      this.isTasjilah = false;
    } 
    else if(this.winnerTeam =='lana' && this.winType == 'khlos'){
      if (alength== 0) {this.jawlahNo = 0;this.jawlahNo += 1; } else {this.jawlahNo +=1}
      this.lanaVal = -30;

      if(this.nazilCount == 1){
        
	    this.lahomVal = (200 + parseInt(this.majmo,10));
    }
      else if (this.nazilCount ==2){
        this.lahomVal = 100 + parseInt(this.majmo,10)
      }
      else if (this.nazilCount == 3){
        this.lahomVal = parseInt(this.majmo,10)
      }
      this.isTasjilah = false;
    } 
    else if(this.winnerTeam =='lana' && this.winType == 'dabal'){
      if (alength== 0) {this.jawlahNo = 0;this.jawlahNo += 1; } else {this.jawlahNo +=1}
      this.lanaVal = -60;

      if(this.nazilCount == 1){
        
	    this.lahomVal = (400 + parseInt(this.majmo,10)*2);
    }
      else if (this.nazilCount ==2){
        this.lahomVal = (200 + parseInt(this.majmo,10)*2)
      }
      else if (this.nazilCount == 3){
        this.lahomVal = parseInt(this.majmo,10)*2
      }
      this.isTasjilah = false;
     
      //team lahom 
      
   } 
   if(this.winnerTeam == 'lahom' && this.winType == 'khlosSafi'){
    if(alength == 0){ this.jawlahNo = 0; this.jawlahNo += 1; } else { this.jawlahNo +=1}
        this.lanaVal = 300;
        this.lahomVal = -30;
        this.isTasjilah = false;
  }
  else if(this.winnerTeam =='lahom' && this.winType == 'dabalSafi'){
    if (alength== 0) {this.jawlahNo = 0;this.jawlahNo += 1; } else {this.jawlahNo +=1}
    this.lanaVal = 600;
    this.lahomVal = -60;
    this.isTasjilah = false;
  } 
  else if(this.winnerTeam =='lahom' && this.winType == 'khlos'){
    if (alength== 0) {this.jawlahNo = 0;this.jawlahNo += 1; } else {this.jawlahNo +=1}
    this.lahomVal = -30;

    if(this.nazilCount == 1){
      
    this.lanaVal = (200 + parseInt(this.majmo,10));
  }
    else if (this.nazilCount ==2){
      this.lanaVal= 100 + parseInt(this.majmo,10)
    }
    else if (this.nazilCount == 3){
      this.lanaVal = parseInt(this.majmo,10)
    }
    this.isTasjilah = false;
  } 
  else if(this.winnerTeam =='lahom' && this.winType == 'dabal'){
    if (alength== 0) {this.jawlahNo = 0;this.jawlahNo += 1; } else {this.jawlahNo +=1}
    this.lahomVal = -60;

    if(this.nazilCount == 1){
      
    this.lanaVal = (400 + parseInt(this.majmo,10)*2);
  }
    else if (this.nazilCount ==2){
      this.lanaVal = (200 + parseInt(this.majmo,10)*2)
    }
    else if (this.nazilCount == 3){
      this.lanaVal = parseInt(this.majmo,10)*2
    }
    this.isTasjilah = false;
  }

    else if (this.winnerTeam == 'lana' && this.winType == 'tasjilah'){
  // think about how this should work
    }
   this.jawalinfo =[ this.jawlahNo,this.winnerTeam ,this.lanaVal,this.lahomVal,this.isTasjilah];
    localStorage.setItem(JSON.stringify(this.jawlahNo), JSON.stringify(this.jawalinfo));
   }
}


