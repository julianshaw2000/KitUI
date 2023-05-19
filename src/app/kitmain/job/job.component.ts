import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Job } from '../_models/job';
import { JobsService } from '../_service/jobs.service';
import { JobdeleteComponent } from './jobdelete/jobdelete.component';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  allJobs: Job[] = []
  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];

  constructor(
    private jobsService: JobsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.get()
  }


  get() {
    this.jobsService.get().subscribe(data => {
      this.allJobs = data;
    });
  }



  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(JobdeleteComponent, {
      width: '250px',
      data: { id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.allJobs = this.allJobs.filter(
          (_) => _.id !== id
        );
      }
    });
  }
}
