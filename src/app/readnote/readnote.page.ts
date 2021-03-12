import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-readnote',
  templateUrl: './readnote.page.html',
  styleUrls: ['./readnote.page.scss'],
})
export class ReadnotePage implements OnInit {

  dataObj: any;

  constructor(public navCtrl: NavController, public actroute: ActivatedRoute) { }

  ngOnInit() {

    const DataObj = this.actroute.snapshot.paramMap.get('dataObj');
    this.dataObj = [JSON.parse(DataObj)];


  }

  getBack() {
    this.navCtrl.pop();
  }

}
