import { Component, OnInit, Injectable, ViewChild, Output, Input, DoCheck } from '@angular/core';
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
import { Subscriber, empty, VirtualTimeScheduler } from 'rxjs';
import { delay } from 'q';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  
})

export class ModalPage implements OnInit, DoCheck {

status: string;
currentvalue: number;
 jawlahNo: number;
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
 isHidden: boolean = false;
 @Input () isAddDisabled: boolean;
  constructor(private modalController: ModalController, private jawService: JawlatsDataService) { }
 
  ngOnInit() {

   

  }
   segmentChanged(ev: any) {
//    console.log('Segment changed', ev.detail.value);

this.status = ev.detail.value;

    
}
  teamValue(event) {this.winnerTeam = event.detail.value; }
  winnerValue(event) { this.winType = event.detail.value; console.log(this.winType);
    if(this.winType === 'khlos' ){
     // console.log('khlos my dear');
      this.isHidden = true;
   
    }else if (this.winType === 'dabal') {
      this.isHidden = true;
     
    } else {
      this.isHidden = false;
    }

  }
  
  
  nazilValue(event) { this.nazilCount = event.detail.value; }

  majmoValue(event){this.majmo = event.target.value;}
  
  
  closeModal(): void {const modal = this.modalController.dismiss(); }  

  ngDoCheck(){
    if(this.winnerTeam == null || this.winType == null){
      this.isAddDisabled = true;
      
    } else {
     this.isAddDisabled = false;
    }
    
  }
  async onSubmit() {
    //team lana 
     if(this.winnerTeam == 'lana' && this.winType == 'khlosSafi'){
      this.jawlahNo = this.currentvalue;
      this.lanaVal = -30;
      this.lahomVal = 300;
      this.isTasjilah = false;
    }
    else if(this.winnerTeam =='lana' && this.winType == 'dabalSafi'){
      this.jawlahNo = this.currentvalue;
      this.lanaVal = -60;
      this.lahomVal = 600;
      this.isTasjilah = false;
    } 
    else if(this.winnerTeam =='lana' && this.winType == 'khlos'){
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
    this.jawlahNo = this.currentvalue;
        this.lanaVal = 300;
        this.lahomVal = -30;
        this.isTasjilah = false;
  }
  else if(this.winnerTeam =='lahom' && this.winType == 'dabalSafi'){
    this.jawlahNo = this.currentvalue;
    this.lanaVal = 600;
    this.lahomVal = -60;
    this.isTasjilah = false;
  } 
  else if(this.winnerTeam =='lahom' && this.winType == 'khlos'){
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
      this.jawlahNo = this.currentvalue;
      this.lanaVal = 0;
      this.lahomVal = 300;
      this.isTasjilah = true;
    }
 
    else if (this.winnerTeam == 'lana' && this.winType == 'tasjilahDabal'){
      this.jawlahNo = this.currentvalue;
      this.lanaVal = 0;
      this.lahomVal = 600;
      this.isTasjilah = true;
    }

    else if (this.winnerTeam == 'lahom' && this.winType == 'tasjilahKhlos'){
      this.taVal += 1;
      this.jawlahNo = this.currentvalue;
      this.lanaVal = 300;
      this.lahomVal = 0;
      this.isTasjilah = true;
    }
    else if (this.winnerTeam == 'lahom' && this.winType == 'tasjilahDabal'){
      this.jawlahNo = this.currentvalue
      this.lanaVal = 600;
      this.lahomVal = 0;
      this.isTasjilah = true;
    
    }
    this.jawalinfo = {
      'jawlahNo': this.jawlahNo,
      'winnerTeam': this.winnerTeam,
      'lanaVal': this.lanaVal,
      'lahomVal': this.lahomVal,
      'isTasjilah': this.isTasjilah,
      'winType': this.winType
    }

    if(this.winnerTeam == null){
      console.log("please Select a Team");
      
    }

    if(this.isTasjilah == true){
      this.jawalinfo = {
        'jawlahNo': this.jawlahNo = 0,
        'winnerTeam': this.winnerTeam,
        'lanaVal': this.lanaVal,
        'lahomVal': this.lahomVal,
        'isTasjilah': this.isTasjilah,
        'winType': this.winType
      }
      this.jawService.createJawlah(this.jawalinfo);
    } else {
      this.jawService.createJawlah(this.jawalinfo);
      
    }
      
      let modal = await this.modalController.dismiss();
      return modal;
   
    

  
    
   }
  }


