import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatenotePageRoutingModule } from './createnote-routing.module';

import { CreatenotePage } from './createnote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatenotePageRoutingModule
  ],
  declarations: [CreatenotePage]
})
export class CreatenotePageModule {}
