import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { ToastController } from '@ionic/angular';

import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public search: string;
  public tmpObj: any;
  public adviceObj: any;


  public keyword: any;
  public checkloding: boolean = false;

  public keywordObject: any = [
    {
      id: 1, name: "สถานที่", icon: "pin", color: "primary", selectd: false
    },
    {
      id: 2, name: "ร้านอาหาร", icon: "fast-food-outline", color: "secondary", selectd: false
    },
    {
      id: 3, name: "จังหวัด", icon: "subway-outline", color: "tertiary", selectd: false
    },
    {
      id: 4, name: "ทะเล", icon: "boat-outline", color: "success", selectd: false
    },
    {
      id: 5, name: "วัด", icon: "hand-left-outline", color: "warning", selectd: false
    },
    {
      id: 6, name: "ช้อปปิ่ง", icon: "cart-outline", color: "danger", selectd: false
    },
  ]

  public header :any = [
    {
      "Content-Type": "application/json",
      "Authorization": "Bearer GsMG1VojPWfo(AYtqXoXIMYnGfulHiJyVI8o5DL18SQhGmgt2q1dVSIvrL1(hGHLdKudzBGOhJNyONaclVozVTm=====2",
      "Accept-Language": "TH"
    }
  ]

  public url : string = 'https://tatapi.tourismthailand.org/tatapi/v5/';

  constructor(private activatedRoute: ActivatedRoute, public toastCtrl: ToastController, public router: Router, public navCtrl: NavController) {
    this.advice();
    console.log(this.header);

  }

  ngOnInit() {
    this.search = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async sendtoRead(event: number) {

    await axios.get(`${this.url}attraction/${event}`, { headers: this.header[0] })
      .then(response => {
        this.router.navigate(['read', JSON.stringify(response.data['result'])]);
      })
      .catch((error) => {
        this.openTost();
        console.log('error ' + error);
        this.checkloding = false;
      });
  }

  selectkeyword(event: any) {
    this.keyword = event;
  }

  async openTost() {
    const toast = await this.toastCtrl.create({
      message: 'ไม่พบข้อมูล !!',
      duration: 2,
    });
    toast.present();
  }



  async tatSearch() {
    this.checkloding = true;
    await axios.get(`${this.url}places/search?keyword=${this.keyword}`, { headers: this.header[0] })
      .then(response => {
        let dataObj = response.data;
        this.checkloding = false;

        var bythumbnail = dataObj['result'];
        bythumbnail.sort(function (b, a) {
          var x = a.thumbnail_url.toLowerCase();
          var y = b.thumbnail_url.toLowerCase();
          return x < y ? -1 : x > y ? 1 : 0;
        });
        this.tmpObj = bythumbnail;

      })
      .catch((error) => {
        console.log('error ' + error);
        this.checkloding = false;
      });
  }

  random_item(items: any) {
    return items[Math.floor(Math.random() * items.length)];
  }

async advice() {

  let adviceList = ["เยาวราช", "หาด", "เชียงใหม่", "พัทยา", "วัด"];
  let advice = this.random_item(adviceList);

  await axios.get(`${this.url}places/search?keyword=${advice}`, { headers: this.header[0] })
    .then(response => {
      let dataObj = response.data;
      this.checkloding = false;
      let adviceObject = [];

      var bythumbnail = dataObj['result'];
      bythumbnail.forEach(e => {
        if(e.thumbnail_url != ""){
          adviceObject.push(e);
        }
      });
      this.adviceObj = adviceObject;

    })
    .catch((error) => {
      console.log('error ' + error);
      this.checkloding = false;
    });

}

}
