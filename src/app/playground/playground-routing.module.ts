import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { FlexComponent } from './flex/flex.component';
import { ToolbarComponent } from './toolbar/toolbar';

const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'flex', component: FlexComponent },
  { path: 'toolbar', component: ToolbarComponent },
  { path: '**', redirectTo: 'toolbar' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaygroundRoutingModule { }
