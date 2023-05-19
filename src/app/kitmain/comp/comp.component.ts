import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Comp } from '../_models/comp';
import { CompsService } from '../_service/comps.service';
import { CompdeleteComponent } from './compdelete/compdelete.component';

@Component({
  selector: 'app-comp',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.scss']
})
export class CompComponent implements OnInit {

  allComps: Comp[] = []
  displayedColumns: string[] = ['id', 'name', 'code', 'count', 'actions'];

  constructor(
    private compsService: CompsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.get()
  }


  get() {
    this.compsService.get().subscribe(data => {
      this.allComps = data;
      console.log(data)
    });
  }



  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(CompdeleteComponent, {
      width: '250px',
      data: { id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.allComps = this.allComps.filter(
          (_) => _.compId !== id
        );
      }
    });
  }
}
