import { Component, Input, Inject } from '@angular/core';
import { Auto } from '../../models/auto';
import { FetcherService } from '../../services/fetcher.service';
import { Mod } from '../../models/mod';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../../interfaces/addTaskDialogData';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  @Input() car: Auto;
  tasks: Mod[];


  constructor(private fetcherService: FetcherService, public dialog: MatDialog) {
    this.tasks = fetcherService.getMods();
  }

  openAddDialog(): void {
    const addDialog = this.dialog.open(AddDialogComponent, {
      width: '350px',
    });
  }
}
@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-task.html',
})
export class AddDialogComponent {
  taskDescrpt: string;
  cost: number;

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  addTask(): void {
    return;
  }

}

