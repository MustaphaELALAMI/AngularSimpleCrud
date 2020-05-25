import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lists = [];
  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.getList();
  }
  getList(){
    this.crudService.getList().subscribe((res: any) => this.lists = [{'Nam':'blalbl','Id':12}]);
    console.log(this.lists);

  }
}
