import { Component, OnInit, Injectable } from '@angular/core';
import { ModalController, IonSelectOption, IonItemOption, IonSelect } from '@ionic/angular';
import { RadioControlRegistry } from '@angular/forms/src/directives/radio_control_value_accessor';
import {  FormsModule, FormBuilder, FormGroup, ReactiveFormsModule, FormControl, Form } from '@angular/forms';
import { REACTIVE_DRIVEN_DIRECTIVES } from '@angular/forms/src/directives';
import { Directive } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})

export class ModalPage implements OnInit {

  myForm: FormGroup;

  constructor(private modalController: ModalController, private fb: FormBuilder) { 

    this.myForm.valueChanges.subscribe(console.log);
  }
  async closeModal(){
    const modal = await this.modalController.dismiss();
    return modal;
  }


  


  ngOnInit() {
   
    this.myForm = this.fb.group({
    winner: '',
    losser: ''
    //  gameType:'',
    // // //  nazlahValue:0,
    // // //  isTasjilah:false
   
    
     });

    
   
   
  }
  onSubmit(): void {
   // console.log(this.myForm.value);
  
  }
   addto(): void{
    //console.log('clicked');
  }
  
  


}


