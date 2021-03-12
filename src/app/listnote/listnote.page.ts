import { UserService } from './../api/user.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertController, IonicRouteStrategy } from '@ionic/angular';

@Component({
  selector: 'app-listnote',
  templateUrl: './listnote.page.html',
  styleUrls: ['./listnote.page.scss'],
})
export class ListnotePage implements OnInit {

  public listnote: string;
  public tmpobj: any;

  public bythumbnail: any;

  constructor(private activatedRoute: ActivatedRoute, public router: Router, public navCtrl: NavController,
    public userService: UserService, private alertCtrl: AlertController
    ) {
    this.listnote = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {

    this.userService.readData().subscribe(data => {
      this.bythumbnail = data.map(e => {
        return {
          id: e.payload.doc.id,
          title: e.payload.doc.data()['title'.toString()],
          location: e.payload.doc.data()['location'.toString()],
          detail: e.payload.doc.data()['detail'.toString()],
          date: this.dateTime(e.payload.doc.data()['date'.toString()]),
        }
      });

      this.bythumbnail.sort(function (b, a) {
        var x = a.date.toLowerCase();
        var y = b.date.toLowerCase();
        return x < y ? -1 : x > y ? 1 : 0;
      });
      this.tmpobj = this.bythumbnail;
    })
  }

  sendTocreate() {
    this.router.navigate(['createnote']);
    console.log("create")
  }

  async presentConfirm(tmpitem: any) {
    let alert = this.alertCtrl.create({
      //title: 'Confirm purchase',
      message: 'Do you want to delete ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Deleted');

            //this.deleteCountryItem(tmpitem);
            this.userService.delData(tmpitem.id); //del rowfrom DB
          }
        }
      ]
    });
    (await alert).present();
  }

  presentEdit(event: any){
    console.log("this is a ",event);
    this.router.navigate(['editpage', JSON.stringify(event)]);
  }

  sendToreadnote(event: any){
    this.router.navigate(['readnote', JSON.stringify(event)]);
  }


  dateTime(dateTime: any){

    let date = new Date(dateTime);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if(day < 10){ day = 0 + day}
    if(month < 10){month = 0 + month}

    let newdate = day+"-"+month+"-"+year+"  "+hours+":"+minutes;
    return newdate;

  }



}
