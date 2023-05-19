import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TemplatesService } from '../../_service/templates.service';

@Component({
  selector: 'app-templatedelete',
  templateUrl: './templatedelete.component.html',
  styleUrls: ['./templatedelete.component.css']
})
export class TemplatedeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TemplatedeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private templateService: TemplatesService
  ) { }

  ngOnInit(): void {
  }


  confirmDelete() {
    this.templateService.delete(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id);
    });
  }

}
