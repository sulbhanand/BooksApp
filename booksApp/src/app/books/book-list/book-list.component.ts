import { Component } from '@angular/core';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  public page : number = 1;
  items: any[] = [];
  public obj:any = {};
  constructor(private service : BookServiceService) {

  }

  ngOnInit() {
    this.loadData(this.page);
  }

  loadData(page:number) {

    this.service.getData(page).subscribe(result =>{
      debugger
      console.log(result);
      this.obj = result;
      this.items = this.obj;
    });

    
  }

  addMoreData(){
    this.page = this.page + 1;
    this.service.getData(this.page).subscribe(result =>{
      debugger
      console.log(result);
      this.obj = result;
      this.items.push(this.obj);
    });

  }

}
