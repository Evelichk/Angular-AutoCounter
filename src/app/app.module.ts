import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MaterialAppModule } from './modules/ngmaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { StartPageMenuComponent } from './components/start-page-menu/start-page-menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StreamComponent } from './components/stream/stream.component';
import { AutoEditorComponent } from './components/auto-editor/auto-editor.component';
import {MatTableModule, MatTabsModule} from '@angular/material';
import { OverviewTableComponent } from './components/overview-table/overview-table.component';
import { AddDialogComponent, ContentComponent } from './components/content/content.component';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    StartPageMenuComponent,
    StreamComponent,
    AutoEditorComponent,
    ContentComponent,
    OverviewTableComponent,
    AddDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialAppModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatTableModule
  ],
  entryComponents: [AddDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
