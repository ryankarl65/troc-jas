import { Component, OnDestroy } from '@angular/core';
import { Profil } from '../../models/user/user';
import { DataProvider } from '../../providers/data/data';
import { AuthService } from '../../providers/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { User } from 'firebase/app';

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
export class EditProfilFormComponent implements OnDestroy {

  private authenticateUser$: Subscription;
  private authenticateUser: User;

  profil = {} as Profil;

  constructor(private data: DataProvider, private auth: AuthService) {

    this.authenticateUser$ = this.auth.getAuthenticationUser().subscribe((user: User) => {
      this.authenticateUser = user;
    });

  }

  async validerProfil(){
    if (this.authenticateUser){
      this.profil.email = this.authenticateUser.email;
      const result = await this.data.validerProfil(this.authenticateUser, this.profil);
      console.log(result);
    }
  }

  ngOnDestroy(): void {
    this.authenticateUser$.unsubscribe();
  }

}
