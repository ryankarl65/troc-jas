import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(
    private toast: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  register(event: LoginResponse){

    if (!event.error){
      this.toast.create({
        message: 'Le compte a été crée avec succès',
        duration: 3000
      }).present();
      this.navCtrl.push('EditProfilPage');
    }
    else{
      this.toast.create({
        message: 'Erreur lors de la création du compte',
        duration: 3000
      }).present();
    }

  }
}
