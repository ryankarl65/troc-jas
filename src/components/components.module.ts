import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { EditProfilFormComponent } from './edit-profil-form/edit-profil-form';
@NgModule({
	declarations: [LoginComponent,
    RegisterComponent,
    EditProfilFormComponent],
	imports: [IonicModule],
	exports: [LoginComponent,
    RegisterComponent,
    EditProfilFormComponent]
})
export class ComponentsModule {}
