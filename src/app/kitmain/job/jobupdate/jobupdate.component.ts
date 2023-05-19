import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from '../../_models/job';
import { JobsService } from '../../_service/jobs.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-jobupdate',
  templateUrl: './jobupdate.component.html',
  styleUrls: ['./jobupdate.component.scss']
})
export class JobupdateComponent implements OnInit {

  jobForm: Job = {
    id: 0,
    name: '',
    description: '',
    kits: []
  };

  constructor(
    private jobService: JobsService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }


  getById(id: number) {
    this.jobService.getById(id).subscribe((data) => {
      this.jobForm = data;
    });
  }

  update() {
    this.jobService.update(this.jobForm).subscribe(() => {
      this.location.back();
    });
  }


  cancel() {
    this.location.back();
  }


}
