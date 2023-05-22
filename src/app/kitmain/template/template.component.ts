import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Template } from '../_models/template';
import { TemplatesService } from '../_service/templates.service';
import { TemplatedeleteComponent } from './templatedelete/templatedelete.component';
// import { TemplatedeleteComponent } from './kit/template/templatedelete/templatedelete.component';


// import { TemplatedeleteComponent } from './kit/';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  allTemplates: Template[] = []
  displayedColumns: string[] = ['id', 'code', 'name', 'lowLimit', 'actions'];
  filterValue = '';

  constructor(
    private templatesService: TemplatesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.get()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.allTemplates.filter((x) => x.name.includes(this.filterValue.trim().toLowerCase()))
  }

  get() {
    this.templatesService.get().subscribe(data => {
      this.allTemplates = data;
    });
  }



  openDeleteModal(id: number) {
    const dialogRef = this.dialog.open(TemplatedeleteComponent, {
      width: '250px',
      data: { id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.allTemplates = this.allTemplates.filter(
          (_) => _.id !== id
        );
      }
    });
  }
}
