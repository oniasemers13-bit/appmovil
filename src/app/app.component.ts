import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader,
         IonToolbar, IonTitle, IonContent, IonList,
         IonItem, IonIcon, IonMenuToggle } from '@ionic/angular/standalone';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonApp, IonRouterOutlet, IonMenu, IonHeader,
    IonToolbar, IonTitle, IonContent, IonList,
    IonItem, IonIcon, IonMenuToggle,
    AsyncPipe, NgFor, RouterLink
  ],
})
export class AppComponent implements OnInit {

  componentes!: Observable<Componente[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }
}