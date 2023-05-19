import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from '../../_models/job';
import { JobsService } from '../../_service/jobs.service';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-jobadd',
  templateUrl: './jobadd.component.html',
  styleUrls: ['./jobadd.component.scss']
})
export class JobaddComponent implements OnInit {


  jobForm: Job = {
    id: 0,
    name: '',
    description: '',
    kits: []
  };

  constructor(
    private jobService: JobsService,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }


  create() {
    this.jobService.create(this.jobForm).subscribe(() => {
      // this.router.navigate(['/']);
      this.location.back();
    });
  }

  cancel() {
    this.location.back();
  }

}
