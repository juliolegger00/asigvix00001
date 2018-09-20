import { Component } from '@angular/core';
import {HttpClient,   HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import {delay } from 'rxjs/internal/operators/delay';
import { take  } from 'rxjs/operators';
import {OnInit } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  enlaces_obsArray: BehaviorSubject < any[] > = new BehaviorSubject < any[] > ([]);
  enlaces$: Observable < any > = this.enlaces_obsArray.asObservable();

  footer_obsArray: BehaviorSubject < any[] > = new BehaviorSubject < any[] > ([]);
  footer$: Observable < any > = this.footer_obsArray.asObservable();

  footer_bloque_1_obsArray: BehaviorSubject < any[] > = new BehaviorSubject < any[] > ([]);
  footer_bloque_1$: Observable < any > = this.footer_bloque_1_obsArray.asObservable();

  legales_obsArray: BehaviorSubject < any[] > = new BehaviorSubject < any[] > ([]);
  legales$: Observable < any > = this.legales_obsArray.asObservable();

  portales_obsArray: BehaviorSubject < any[] > = new BehaviorSubject < any[] > ([]);
  portales$: Observable < any > = this.portales_obsArray.asObservable();

  filiales_obsArray: BehaviorSubject < any[] > = new BehaviorSubject < any[] > ([]);
  filiales$: Observable < any > = this.filiales_obsArray.asObservable();

  vigilado_obsArray: BehaviorSubject < any[] > = new BehaviorSubject < any[] > ([]);
  vigilado$: Observable < any > = this.vigilado_obsArray.asObservable();

  copyright:any;


    constructor(
        private http: HttpClient
    ) {

    }

    ngOnInit() {
      this.initializeData();
    }

    public initializeData() {
      this.http.get("http://192.168.102.10/asignacionvivienda/index.php" ).pipe(delay(0)).subscribe(datax => {

          let data_tmp: any = {};
          let data_tmp_enlaces: any = {};
          let data_tmp_footer: any = {};
          let data_tmp_footer_bloque_1: any = {};
          let data_tmp_legales: any = {};
          let data_tmp_portales: any = {};
          let data_tmp_filiales: any = {};
          let data_tmp_vigilado: any = {};
          data_tmp = datax;

          data_tmp_enlaces=data_tmp.footer.nuestras_redes[0].enlaces;
          data_tmp_enlaces.forEach((item, index) => {
              this.addElementToObservableArray_enlaces(item);
          });

          /*
          data_tmp_footer=data_tmp.footer;
          data_tmp_footer.forEach((item, index) => {
              this.addElementToObservableArray_footer(item);
          });
          */
          this.copyright=data_tmp.footer.copyright;

          data_tmp_footer_bloque_1=data_tmp.footer.bloque_1;
          data_tmp_footer_bloque_1.forEach((item, index) => {
              this.addElementToObservableArray_footer_bloque_1(item);
          });

          data_tmp_legales=data_tmp.footer.otros_enlaces[0].enlaces;
          data_tmp_legales.forEach((item, index) => {
              this.addElementToObservableArray_legales(item);
          });

          data_tmp_portales=data_tmp.footer.nuestros_portales[0].enlaces;
          data_tmp_portales.forEach((item, index) => {
              this.addElementToObservableArray_portales(item);
          });

          data_tmp_filiales=data_tmp.footer.filiales[0].enlaces;
          data_tmp_filiales.forEach((item, index) => {
              this.addElementToObservableArray_filiales(item);
          });

          data_tmp_vigilado=data_tmp.footer.vigilado;
          data_tmp_vigilado.forEach((item, index) => {
              this.addElementToObservableArray_vigilado(item);
          });


        });

    }//initializeData


    addElementToObservableArray_enlaces(item) {
        this.enlaces$.pipe(take(1)).subscribe(val => {
            const newArr = [...val, item];
            this.enlaces_obsArray.next(newArr);
        })
    }


    addElementToObservableArray_footer(item) {
        this.footer$.pipe(take(1)).subscribe(val => {
            const newArr = [...val, item];
            this.footer_obsArray.next(newArr);
        })
    }


    addElementToObservableArray_footer_bloque_1(item) {
        this.footer_bloque_1$.pipe(take(1)).subscribe(val => {
            const newArr = [...val, item];
            this.footer_bloque_1_obsArray.next(newArr);
        })
    }


    addElementToObservableArray_legales(item) {
        this.legales$.pipe(take(1)).subscribe(val => {
            const newArr = [...val, item];
            this.legales_obsArray.next(newArr);
        })
    }


    addElementToObservableArray_portales(item) {
        this.portales$.pipe(take(1)).subscribe(val => {
            const newArr = [...val, item];
            this.portales_obsArray.next(newArr);
        })
    }


    addElementToObservableArray_filiales(item) {
        this.filiales$.pipe(take(1)).subscribe(val => {
            const newArr = [...val, item];
            this.filiales_obsArray.next(newArr);
        })
    }


    addElementToObservableArray_vigilado(item) {
        this.vigilado$.pipe(take(1)).subscribe(val => {
            const newArr = [...val, item];
            this.vigilado_obsArray.next(newArr);
        })
    }


}
