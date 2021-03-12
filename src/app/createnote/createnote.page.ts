import { UserService } from './../api/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.page.html',
  styleUrls: ['./createnote.page.scss'],
})
export class CreatenotePage implements OnInit {

  public createnote: any;

  public title: any;
  public location: any;
  public detail: any;


  constructor(public userService: UserService, public router: Router, private actroute: ActivatedRoute, private navCtrl: NavController) {
  }

  ngOnInit() {
  }

  savenote(){

    let newObj = {
      title: this.title,
      location: this.location,
      detail: this.detail,
      date: new Date().toISOString(),
    }
    if(this.title == null || this.location == null || this.detail == null){
      console.log("not save");
      return ;
    } else {
      console.log("saved");
      this.userService.createData(newObj);
      this.router.navigate(['listnote/mynote']);

    }
  }

  getBack() {
    this.navCtrl.pop();
  }

}
