import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  tabroot1: string;
  tabroot2: string;
  tabroot3: string;
  tabroot4: string;
  tabroot5: string;

  constructor() {

    this.tabroot1 = "ArticlePage";
    this.tabroot2 = "MessagePage";
    this.tabroot3 = "FavorisPage";
    this.tabroot4 = "MyPage";
    this.tabroot5 = "ProfilPage";
  }


}
