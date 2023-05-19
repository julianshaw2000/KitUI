import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JobsService } from '../../_service/jobs.service';

@Component({
  selector: 'app-jobdelete',
  templateUrl: './jobdelete.component.html',
  styleUrls: ['./jobdelete.component.scss']
})
export class JobdeleteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<JobdeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private jobService: JobsService
  ) { }

  ngOnInit(): void {
  }


  confirmDelete() {
    this.jobService.delete(this.data.id).subscribe(() => {
      this.dialogRef.close(this.data.id);
    });
  }

}
