import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompsService } from '../../_service/comps.service';

@Component({
  selector: 'app-compdelete',
  templateUrl: './compdelete.component.html',
  styleUrls: ['./compdelete.component.scss']
})
export class CompdeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CompdeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private compService: CompsService
  ) { }

  ngOnInit(): void {
  }


  confirmDelete() {
    this.compService.delete(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id);
    });
  }

}
