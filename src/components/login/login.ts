import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account';


/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  account = {} as Account;

  text: string;

  constructor(private navCtrl: NavController, private afAuth: AngularFireAuth) {
    console.log('Hello LoginComponent Component');
    this.text = 'Hello World';
  }


  goToMenuPage(): void{
    this.navCtrl.setRoot('MenuPage');
  }
  goToRegisterPage(): void{
    this.navCtrl.push('RegisterPage');
}

async login(){
  try{
    const result = await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password);
    this.navCtrl.push('CategoriePage');
    console.log(result);
  }catch(e){
    console.error(e);
  }
}

}
