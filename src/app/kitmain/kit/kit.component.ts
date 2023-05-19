import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Kit } from '../_models/kit';
import { KitsService } from '../_service/kits.service';
import { KitdeleteComponent } from './kitdelete/kitdelete.component';

@Component({
  selector: 'app-kit',
  templateUrl: './kit.component.html',
  styleUrls: ['./kit.component.scss']
})
export class KitComponent implements OnInit {

  allKits: Kit[] = []
  displayedColumns: string[] = ['id', 'kitCode', 'name', 'currentQty', 'actions'];

  constructor(
    private kitsService: KitsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.get()
  }


  get() {
    this.kitsService.get().subscribe(data => {
      this.allKits = data;
      console.log(data)
    });
  }



  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(KitdeleteComponent, {
      width: '250px',
      data: { id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.allKits = this.allKits.filter(
          (_) => _.id !== id
        );
      }
    });
  }
}
