import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-new-list',
  templateUrl: './create-new-list.page.html',
  styleUrls: ['./create-new-list.page.scss'],
})
export class CreateNewListPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async showAlert(){
    await this.alertCtrl.create({
      header:"Enter Name of List:",
      inputs:[
        {type:'text'}
      ],
      buttons:[
        {
          text:"OK", 
          handler:(res)=>{
            console.log(res.promo);
          }
        },
        {text:"Cancel"
      }
      
      ]
    }).then(res=>res.present());
  }
  
}
