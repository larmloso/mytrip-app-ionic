import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListnotePageRoutingModule } from './listnote-routing.module';

import { ListnotePage } from './listnote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListnotePageRoutingModule
  ],
  declarations: [ListnotePage]
})
export class ListnotePageModule {}
