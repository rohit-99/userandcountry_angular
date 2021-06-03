import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any;
  username:any;
  usercountry:any;
  userid:any;
  constructor(private rout:Router,private userservice:UserService) { 
    
  }

  ngOnInit() {
    this.getList();
  }
  getList() {
    this.userservice.getAllUsers().subscribe((res)=>{
      this.users=res;
      console.log("res",res)
      console.log("users",this.users)
    });
  }
    
  addUser()
  {
    let data = {
      id:this.userid,
      name: this.username,
      country: this.usercountry
    };

    console.log("ts",data)
    this.userservice.addUser(data).subscribe((res)=>{
      console.log("data added");
      this.getList();
    });
  }
}
