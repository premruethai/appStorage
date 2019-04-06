import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {GetvaluePage} from '../getvalue/getvalue';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public storage:Storage) {
    storage.ready().then(
      ()=>{
        //Set ข้อมูล ลง local storage
        storage.set("username",'Prem');
        storage.set("studentId",'4568762136');
      }
    );
  }

}
