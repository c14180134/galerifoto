import { Component } from '@angular/core';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  Rand = Math.floor(Math.random() * 10);
  Angka
  buener = false
  constructor(public fotoService:FotoService) {}
  ionTabsDidChange(){
    this.buener=false;
  }
  ionTabsWillChange(){
    this.buener=false;
  }
  Tebak(){
    if(this.Angka== this.Rand){
      this.fotoService.loadFoto()
      this.buener=true
      console.log("benar njir")
    }
    else{
      console.log("sala")
    }
  }
  Restart(){
    this.buener=false
    this.Rand = Math.floor(Math.random() * 10);
  }
  
}
