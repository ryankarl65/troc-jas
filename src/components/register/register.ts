import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-register',
  templateUrl: 'register.html'
})
export class RegisterComponent {

  text: string;

  account =  {} as Account;

  constructor(private afAuth: AngularFireAuth, private toast: ToastController) {
    console.log('Hello RegisterComponent Component');
    this.text = 'Hello World';
  }

  async register(){
    try{
   const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password);
   this.toast.create({
    message: "Le compte a été crée avec succès.",
    duration: 3000
  }).present();
  console.log(result);


  } catch(e){
    console.error(e);
    this.toast.create({
      message: "Erreur lors de la création du compte.",
      duration: 3000
    }).present();
  }

  }

}