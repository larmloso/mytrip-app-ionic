import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listnote',
  templateUrl: './listnote.page.html',
  styleUrls: ['./listnote.page.scss'],
})
export class ListnotePage implements OnInit {

  public listnote: string;
  constructor(private activatedRoute: ActivatedRoute, public router: Router, public navCtrl: NavController) {
    this.listnote = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

  sendTocreate() {
    this.router.navigate(['createnote']);
    console.log("create")
  }



}
