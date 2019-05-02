import { NgModule } from '@angular/core';
import {MatButtonModule, MatDialogRef, MatDialogModule} from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import {AddDialogComponent} from '../components/content/content.component';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule
  ],
  providers: [],
})
export class MaterialAppModule { }
