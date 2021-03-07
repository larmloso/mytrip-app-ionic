import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {

  public dataObj: any;

  constructor(public navCtrl: NavController, public actroute: ActivatedRoute) { }

  ngOnInit() {

    const DataObj = this.actroute.snapshot.paramMap.get('dataObj');
    this.dataObj = [JSON.parse(DataObj)];
    console.log(this.dataObj);

  }

  getBack() {
    this.navCtrl.pop();
  }

}
