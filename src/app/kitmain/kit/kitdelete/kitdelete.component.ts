import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { KitsService } from '../../_service/kits.service';

@Component({
  selector: 'app-kitdelete',
  templateUrl: './kitdelete.component.html',
  styleUrls: ['./kitdelete.component.scss']
})
export class KitdeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<KitdeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private kitService: KitsService
  ) { }

  ngOnInit(): void {
  }


  confirmDelete() {
    this.kitService.delete(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id);
    });
  }

}
