import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Account } from '../../models/account/account';
import { LoginResponse } from '../../models/login/login-response';
import { ViewOrContainerState } from '@angular/core/src/render3/interfaces';
import { AuthService } from '../../providers/auth/auth.service';


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

  @Output() loginStatus: EventEmitter<LoginResponse>;

  text: string;

  constructor(private navCtrl: NavController, private auth: AuthService) {

    this.loginStatus = new EventEmitter<any>();
  }


  goToMenuPage(): void{
    this.navCtrl.setRoot('MenuPage');
  }
  goToRegisterPage(): void{
    this.navCtrl.push('RegisterPage');
}

async login(){

    const loginResponse = await this.auth.signInWithEmailAndPassword(this.account);

    this.loginStatus.emit(loginResponse);



 /* try{
    const result: LoginResponse = {
      result: await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
    }
    this.loginStatus.emit(result);
    this.navCtrl.push('MenuPage');
  }catch(e){
    console.error(e);

    const error: LoginResponse = {
      error: e
    }

    this.loginStatus.emit(error);
  }*/

}

}
