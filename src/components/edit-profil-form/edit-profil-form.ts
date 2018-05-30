import { Component } from '@angular/core';
import { User } from '../../models/user/user';

/**
 * Generated class for the EditProfilFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'edit-profil-form',
  templateUrl: 'edit-profil-form.html'
})
export class EditProfilFormComponent {

  user = {} as User;

  constructor() {

  }

  validerProfil(){

  }

}
