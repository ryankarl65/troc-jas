import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProfilPage } from './edit-profil';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    EditProfilPage,
  ],
  imports: [
    IonicPageModule.forChild(EditProfilPage),
    ComponentsModule,
  ],
})
export class EditProfilPageModule {}
