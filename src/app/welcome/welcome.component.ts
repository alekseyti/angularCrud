import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { CommonService } from '../common.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  username: string = "user";
  allUser: any;
  isEdit=false;
  userObj = {
    name: '',
    mobile: '',
    email: '',
    password: '',
    id: '',
    state: '',
    note: ''
  }
  
  


  constructor(
    private router: ActivatedRoute,
    private commonService:CommonService
    ) {
      this.allUser=Object; 
    }

  ngOnInit() {
    this.username = this.router.snapshot.params['name'];
    this.getLatesUser()
  }

  addUser(formOBJ) {
    console.log(formOBJ)
    this.commonService.creatUser(formOBJ).subscribe((response)=>{
      this.getLatesUser();
    })
  }

  getLatesUser(){
    this.commonService.getAllUser().subscribe((response)=> {
      this.allUser = response
    })
  }

  editUser(user){
    this.isEdit = true;
    this.userObj = user;
  }

  deleteUser(user){
    this.commonService.deleteUser(user).subscribe(() =>{
      this.getLatesUser();
    })
  }
  updateUser(){
    this.isEdit = !this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(()=>{
      this.getLatesUser();
    })
  }

}
