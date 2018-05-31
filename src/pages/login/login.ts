import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response';
import { DataProvider } from '../../providers/data/data';
import { User } from 'firebase/app';




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    private data: DataProvider,
    private toast: ToastController,
    private navCtrl: NavController, private navParams: NavParams) {
  }

  login(event: LoginResponse){

    if(!event.error){
      this.toast.create({
        message: 'Bienvenu dans JeToum',
        duration: 3000
      }).present();
      this.data.getProfil(<User>event.result).subscribe(profil => {
        console.log(profil);
        profil.val() ? this.navCtrl.setRoot('MenuPage') : this.navCtrl.setRoot('EditProfilPage');
      })
    }
    else{
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }

  }

}
