import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { User } from 'firebase/app';
import { Profil } from '../../models/user/user';
import "rxjs/add/operator/take";


/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  profilObject: FirebaseObjectObservable<Profil>

  constructor(private database: AngularFireDatabase) {

  }

  getProfil(user: User): any {

    this.profilObject = this.database.object('/profils/' + user.uid, {preserveSnapshot: true});

    return this.profilObject.take(1);
  }

  async validerProfil(user: User, profil: Profil){
    this.profilObject = this.database.object('/profils/'+ user.uid);

    try{
      await this.profilObject.set(profil);
      return true;
    }
    catch(e){
      console.error(e);
      return false;
    }
  }

}
