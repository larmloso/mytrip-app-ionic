import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  savenote(){

  }

}
