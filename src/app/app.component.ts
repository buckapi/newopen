import { Component,OnInit, ElementRef,ViewChild, Inject} from '@angular/core';
import { BikersService } from './services';
import { Butler } from './services/butler.service';
import { Router } from '@angular/router';
import { ScriptService } from '@app/services/script.service';
import { ScriptStore } from '@app/services/script.store';
import { SwiperOptions } from 'swiper';
//import { DOCUMENT } from '@angular/common'; 

import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

@ViewChild('modal1')  modal1: ElementRef ;
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };
  title = 'motogo';
    public tixToAdd=[];
element:any;
  constructor(
//    @Inject(DOCUMENT) document: Document,
    public script:ScriptService,
    public bikersScript:BikersService,
    public _butler:Butler,
    public router:Router,
   private elementRef: ElementRef
  ){
    document.getElementById('modal1');
     this.script.load(     
       'glightbox',
          'swiper'
      )
      .then(data => {console.log('loaded from shop', data);})
      .catch(error => console.log(error));
  }



  public addToBag(){
     this._butler.numProd=this._butler.numProd+1;
//     this._butler.preview.id=this._butler.numProd;
     this.tixToAdd=this._butler.preview;
     this._butler.subTotal=this._butler.subTotal+(this._butler.preview.quantity*this._butler.preview.price);
     this._butler.car.push(this.tixToAdd);
  //   var myModal = new bootstrap.Modal(document.getElementById('modal1'));

//     var modalToggle = document.getElementById('modal1') // relatedTarget

$('#modal1').removeClass("is-visible");
   // this.exampleModals.hide();

  // .classList.remove(isVisible)
   //this.modal1.close();
      //this.elementRef.nativeElement.modal1.close();
  }

  ngOnInit(): void {
    
    // this.bikersScript.getUserLocation();
    
  }
}
