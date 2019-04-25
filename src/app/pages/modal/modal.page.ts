import { Component, OnInit, Injectable, ViewChild } from '@angular/core';
import { ModalController, IonSelectOption, IonItemOption, IonSelect, IonInput } from '@ionic/angular';
import { RadioControlRegistry, RADIO_VALUE_ACCESSOR } from '@angular/forms/src/directives/radio_control_value_accessor';
import {  FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, FormControl, Form, Validators } from '@angular/forms';
import { REACTIVE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';
import { Directive } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  
})

export class ModalPage implements OnInit {

  myForm: FormGroup;
  teamVal: string;
  winnerVal: string;
  constructor(private modalController: ModalController, public fb: FormBuilder) {


  }
  async closeModal() {
    const modal = await this.modalController.dismiss();
    return modal;
   }


  ngOnInit() {
    
     this.myForm = this.fb.group({
     winner : [''],


      });
      //this.myForm.valueChanges.subscribe(console.log);
      //console.log(this.myForm.value);


  }

  teamValue(event)
  {
    this.teamVal = event.detail.value;
  }

  winnerValue(event)
  {
    this.winnerVal = event.detail.value;
    console.log(this.winnerVal);
  }

  

   onSubmit(event): void {

    //console.log(this.myForm.value);

    alert(this.teamVal);
    alert(this.winnerVal);
     

   }
   
  //  addto(): void {
  //   // console.log(event);

  // }




}


