import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { ModalController, IonSelectOption, IonItemOption, IonSelect, IonInput } from '@ionic/angular';
import { RadioControlRegistry, RADIO_VALUE_ACCESSOR } from '@angular/forms/src/directives/radio_control_value_accessor';
import {  FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, FormControl, Form, Validators } from '@angular/forms';
import { REACTIVE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';
import { Directive } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
import {NgForageModule, NgForageConfig, Driver, NgForage} from 'ngforage';
import { ngfactoryFilePath } from '@angular/compiler/src/aot/util';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  
})

export class ModalPage implements OnInit {
 jawlahNo: number;
 winnerTeam: string;
  winType: string;
  winnerVal: string;
  losserVal: string;
  isTasjilah: boolean;
 jawalinfo: string[];
  myForm: FormGroup;
  
  constructor(private modalController: ModalController, public fb: FormBuilder , public ngstore: NgForage) {

  }
  async closeModal() {
    const modal = await this.modalController.dismiss();
    return modal;
   }


  ngOnInit() {
    
     this.myForm = this.fb.group({
     //winner : [''],

    });
      //this.myForm.valueChanges.subscribe(console.log);
      //console.log(this.myForm.value);


  }

  teamValue(event)
  {
    
    this.winnerTeam = event.detail.value;
  
  }

  winnerValue(event)
  {
    this.winType = event.detail.value;
   
  //  console.log(this.winnerVal);
  }

onSubmit(event): void {
  var alength = localStorage.length;
    //console.log(this.teamVal);
    //console.log(this.winnerVal);
    if(this.winnerTeam == 'lana' && this.winType == 'khlosSafi'){
      if(alength == 0){
        this.jawlahNo = 0;
        this.jawlahNo += 1;
      } else {
        this.jawlahNo +=1
      }
          this.winnerVal = '-30';
          this.losserVal = '300';
          this.isTasjilah = false;
    }
    else if(this.winnerTeam =='lahom' && this.winType == 'khlosSafi'){
      
      if(alength == 0){
        this.jawlahNo = 0;
        this.jawlahNo += 1;
      } else {
        this.jawlahNo +=1
      }
          this.winnerVal = '-30';
          this.losserVal = '300';
          this.isTasjilah = false;
    }

    else if(this.winnerTeam =='lana' && this.winType == 'tasjilah'){

      // think about how this should work
    }

    this.jawalinfo =[this.winnerTeam, JSON.stringify(this.jawlahNo),this.winnerVal,this.losserVal,JSON.stringify(this.isTasjilah)];


    localStorage.setItem(JSON.stringify(this.jawlahNo), JSON.stringify(this.jawalinfo));
   
      


   }
  
   
  




}


