import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { CommonService } from 'src/app/Service/common.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
mPostData: any;
displayedColumns: string[] = [ 'id', 'userid', 'title','done'];
dataSource: any;
mPostDataDisplay : any;
  constructor(public commonService: CommonService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
this.commonService.getPostData().subscribe(data=>{
  this.mPostData = data;
  this.dataSource = new MatTableDataSource(this.mPostData);
      this.dataSource.paginator = this.paginator;
});

  }
  onViewData(id){
    var data = this.dataSource['data'].filter(element => element["id"] == id);
    this.mPostDataDisplay = data;
    console.log(this.mPostDataDisplay);
    
  }

}
