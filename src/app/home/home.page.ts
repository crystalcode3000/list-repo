import { Component } from '@angular/core';

import * as firebase from 'firebase';
import {snapshotToArray} from '../../app/envoirnment';
import { AlertController } from '@ionic/angular';
import { Screenshot } from '@ionic-native/screenshot/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showButton:boolean=true;

  items;
  ref=firebase.database().ref('items/');
  inputText:string='';
  
  constructor( public screenshot:Screenshot) {
    this.ref.on('value', resp => {
      this.items = snapshotToArray(resp);
    });
   }  

   TakeScreenShot(){ 
    this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then();      
       alert("saved in phone.");
   }

  
  addItem(item){
    if(item!==undefined &&item!==null){
     let newItem=this.ref.push();
     newItem.set(item);
     this.inputText='';
    }
  }


   
   

   delItem(key){
     firebase.database().ref('items/'+key).remove();
   }

 
}

