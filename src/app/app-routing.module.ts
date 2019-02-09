import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TestComponent} from "./items/test-component";
import {MediaItemListComponent} from "./list/media-item-list.component";
import {HelpComponent} from "./help/help-component";
import {TemplateForm} from "./forms/new-form";

const routes: Routes = [
  {
    path: 'list',
    component: MediaItemListComponent
  },
  {
    path: 'test-comp',
    component: TestComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'template-form',
    component: TemplateForm
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'all'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
