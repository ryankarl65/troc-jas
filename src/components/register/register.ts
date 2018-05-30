import { Component, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account';
import { AuthService } from '../../providers/auth/auth.service';
import { LoginResponse } from '../../models/login/login-response';

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

  account =  {} as Account;

  @Output() registerStatus: EventEmitter<LoginResponse>  ;

  constructor(private auth: AuthService) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }

  async register(){
    try{
   const result = await this.auth.createUserWithEmailAndPassword(this.account);
   this.registerStatus.emit(result);
  } catch(e){
    console.error(e);
    this.registerStatus.emit(e);
  }

  }

}
