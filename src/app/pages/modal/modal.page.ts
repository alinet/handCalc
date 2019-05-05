import { Component, OnInit, Injectable, ViewChild, Output } from '@angular/core';
import { ModalController, IonSelectOption, IonItemOption, IonSelect, IonInput } from '@ionic/angular';
import { RadioControlRegistry, RADIO_VALUE_ACCESSOR } from '@angular/forms/src/directives/radio_control_value_accessor';
import {  FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, FormControl, Form, Validators } from '@angular/forms';
import { REACTIVE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';
import { Directive } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';
import { stringify } from '@angular/core/src/util';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { JawlatsDataService } from 'src/app/jawlats-data.service';
import { EventListener } from '@angular/core/src/debug/debug_node';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  
})

export class ModalPage implements OnInit {
  
  currentvalue;
 jawlahNo: string;
 winnerTeam: string;
  winType: string;
  lanaVal: number;
  lahomVal: number;
  isTasjilah: boolean;
 jawalinfo: object;
 nazilCount: number;
  myForm: FormGroup;
  majmo: string;
  taVal: any;
  jawlats;
  

  
  constructor(private modalController: ModalController,private jawService:JawlatsDataService) {
    
  }
  async closeModal() {
    const modal = await this.modalController.dismiss();
    return modal;
   }
  ngOnInit() {
   // this.jawlats = this.jawService.getJawlats();
 
    //  this.myForm = this.fb.group({
    //  //winner : [''],
    // });
    // console.log(this.currentvalue);
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
  const modal = this.modalController.dismiss();
  
  //var alength = localStorage.length;
  
  
   
  
    //team lana 
     if(this.winnerTeam == 'lana' && this.winType == 'khlosSafi'){
    //   if(alength == 0){ this.jawlahNo = 0; 
    //     this.jawlahNo += 1; } 
    //     else {this.jawlahNo +=1}
      this.jawlahNo = this.currentvalue;
        this.lanaVal = -30;
      this.lahomVal = 300;
      this.isTasjilah = false;
    }
    else if(this.winnerTeam =='lana' && this.winType == 'dabalSafi'){
      // if (alength== 0) {this.jawlahNo += 1; } else { this.jawlahNo += 1; }
      this.jawlahNo = this.currentvalue;
      this.lanaVal = -60;
      this.lahomVal = 600;
      this.isTasjilah = false;
    } 
    else if(this.winnerTeam =='lana' && this.winType == 'khlos'){
      // if (alength== 0) {this.jawlahNo = 0;this.jawlahNo += 1; } else {this.jawlahNo +=1}
      this.jawlahNo = this.currentvalue;
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
      // if (alength== 0) {this.jawlahNo = 0;this.jawlahNo += 1; } else {this.jawlahNo +=1}
      this.jawlahNo = this.currentvalue;
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
    // if(alength == 0){ this.jawlahNo = 0; this.jawlahNo += 1; } else { this.jawlahNo +=1}
    this.jawlahNo = this.currentvalue;
        this.lanaVal = 300;
        this.lahomVal = -30;
        this.isTasjilah = false;
  }
  else if(this.winnerTeam =='lahom' && this.winType == 'dabalSafi'){
    // if (alength== 0) {this.jawlahNo = 0;this.jawlahNo += 1; } else {this.jawlahNo +=1}
    this.jawlahNo = this.currentvalue;
    this.lanaVal = 600;
    this.lahomVal = -60;
    this.isTasjilah = false;
  } 
  else if(this.winnerTeam =='lahom' && this.winType == 'khlos'){
    // if (alength== 0) {this.jawlahNo = 0;this.jawlahNo += 1; } else {this.jawlahNo +=1}
    this.jawlahNo = this.currentvalue;
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
    // if (alength== 0) {this.jawlahNo = 0;this.jawlahNo += 1; } else {this.jawlahNo +=1}
    this.jawlahNo = this.currentvalue;
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

    else if (this.winnerTeam == 'lana' && this.winType == 'tasjilahKhlos'){
      this.jawlahNo = 'tasjilah';
      this.lanaVal = 0;
      this.lahomVal = 300;
      this.isTasjilah = true;
    
    }
    else if (this.winnerTeam == 'lana' && this.winType == 'tasjilahDabal'){
      this.jawlahNo = 'tasjilah';
      this.lanaVal = 0;
      this.lahomVal = 600;
      this.isTasjilah = true;
    
    }

    else if (this.winnerTeam == 'lahom' && this.winType == 'tasjilahKhlos'){
      this.taVal += 1;
      this.jawlahNo = 'tasjilah' + this.taVal;
      this.lanaVal = 300;
      this.lahomVal = 0;
      this.isTasjilah = true;
    
    }
    else if (this.winnerTeam == 'lahom' && this.winType == 'tasjilahDabal'){
      this.jawlahNo = 'tasjilah';
      this.lanaVal = 600;
      this.lahomVal = 0;
      this.isTasjilah = true;
    
    }
    this.jawalinfo = {
      'jawlahNo': this.jawlahNo,
      'winnerTeam': this.winnerTeam,
      'lanaVal': this.lanaVal,
      'lahomVal': this.lahomVal,
      'isTasjilah': this.isTasjilah
    }
  //  console.log(this.jawalinfo)
    //[this.jawlahNo,this.winnerTeam, this.lanaVal,this.lahomVal,this.isTasjilah];
    
    
    
   // localStorage.setItem('1',JSON.stringify(this.jawalinfo));
   
   var a;
  
   if (localStorage.getItem('jawlats') === null) {
       a = [];
   } else {
        a = JSON.parse(localStorage.getItem('jawlats'));
    }
    a.push(this.jawalinfo);
    localStorage.setItem('jawlats', JSON.stringify(a));
    console.log(this.currentvalue);

   // window.location.reload();
   
   }
   
}


