import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { CommonService } from 'src/app/Service/common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(public commonService: CommonService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  displayedColumns: string[] = [ 'id', 'name', 'username','email','address','phone','company','website'];
  dataSource : any;
  mUserData : any;

  ngOnInit() {
    this.commonService.getUserData().subscribe(data=>{
      this.mUserData= data;
      this.dataSource = new MatTableDataSource(this.mUserData);
      this.dataSource.paginator = this.paginator;
    })
  }

}
