import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule } from '@angular/forms';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { FlexComponent } from './flex/flex.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    PlaygroundRoutingModule
  ],
  declarations: [ButtonsComponent, FlexComponent]
})
export class PlaygroundModule { }
