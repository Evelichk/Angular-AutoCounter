import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../components/main/main.component';
import { StreamComponent } from '../components/stream/stream.component';
import {AutoEditorComponent} from '../components/auto-editor/auto-editor.component';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'index', component: MainComponent },
  { path: 'stream/:name', component: StreamComponent  },
  { path: 'stream/:name/add', component: AutoEditorComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
