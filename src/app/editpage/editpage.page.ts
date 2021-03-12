import { UserService } from './../api/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.page.html',
  styleUrls: ['./editpage.page.scss'],
})
export class EditpagePage implements OnInit {

  dataObj: any;

  title: any;
  location: any;
  detail: any;

  constructor(public navCtrl: NavController, public actroute: ActivatedRoute, private userService: UserService, private router: Router) {
    const DataObj = this.actroute.snapshot.paramMap.get('dataObj');
    this.dataObj = [JSON.parse(DataObj)];

    this.title = this.dataObj[0].title;
    this.location = this.dataObj[0].location;
    this.detail = this.dataObj[0].detail;
  }

  ngOnInit() {

  }

  getBack() {
    this.navCtrl.pop();
  }

  savenote() {

    let newObj = {
      title: this.title,
      location: this.location,
      detail: this.detail,
      date: new Date().toISOString(),
    }

    console.log(this.dataObj[0].id,newObj);
    if (this.title == null || this.location == null || this.detail == null) {
      console.log("not save");
      return;
    } else {
      console.log("saved");
      this.userService.updateData(this.dataObj[0].id, newObj);
      this.router.navigate(['listnote/mynote']);

    }



  }

}
