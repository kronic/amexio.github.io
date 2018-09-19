/**
 * Created by kedar on 17/09/18.
 */
/*
Component Name : Amexio Spinner
Component Selector :  <amexio-spinner>
Component Description :
*/
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
@Component({
  selector: 'amexio-spinner',
  template: `
  <div *ngIf="show">
    <div [style.color] = "color"
      [ngClass]="{
        'rectangle-bounce' :type == 'rectangleBounce',
        'ring' :type == 'ring',
        'half-circle' :type == 'halfCircle',
        'fading-circle' :type == 'fadingCircle',
        'ball-spin' :type == 'ballSpin',
        'fire-spin' :type == 'fireSpin',
        'three-bounce' :type == 'threeBounce',
        'spinner-round' :type == 'spinnerRound'}">
    </div>
  </div>
  `,
})

export class AmexioSpinnerComponent implements OnInit {
  /*
  Events
  name : type
  datatype : any
  version : none
  default : none
  description : spinner have different type , specify the type as per user choice.
  */
  @Input('type') type: any;
  /*
   Events
   name : color
   datatype : string
   version : none
   default : none
   description : spinner want color
   */
  @Input('color') color: string;

   /*
   Events
   name : show
   datatype : boolean
   version : none
   default : true
   description : if show  is true than and only than the spinner is enable, if false then it is disable.
   */
  @Input () show: true;

  constructor() {
  }
  ngOnInit() {
  }

}