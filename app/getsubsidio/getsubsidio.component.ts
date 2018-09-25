
import { Component,   HostListener } from '@angular/core';
import { HttpClient,   HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators/delay';
import { take  } from 'rxjs/operators';
import { OnInit } from "@angular/core";
import { CONFIG } from "../config/config";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './getsubsidio.component.html'
})
export class GetsubsidioComponent implements OnInit {


    regFormPaso1: FormGroup;
    submitted1 = false;
    mensajes="";
    mensaje_listo=false;


    constructor(
        private http: HttpClient,
        private formBuilder: FormBuilder,
        private router: Router,
        private routeActive: ActivatedRoute
    ) {

              this.initializeFormularioPaso1();
    }

    ngOnInit() {
      this.initializeData();
    }

    public initializeData() {
    }//initializeData


    public nuevaconsulta() {
      this.submitted1 = false;
      this.mensaje_listo=false;
      this.f.fs_cedula_campo.value="";

    }

    public initializeFormularioPaso1() {

        this.regFormPaso1 = new FormGroup({
            fs_cedula_campo: new FormControl('', Validators.required),
        });

    } // fin initializeFormulario


    get f() {
        return this.regFormPaso1.controls;
    }


    onSubmit_paso1() {
      this.submitted1 = true;


      let _variable = {
          cedula: this.f.fs_cedula_campo.value,
      }

      let json = JSON.stringify(_variable);
      let params = "json=" + json;
      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

      this.http.post(CONFIG.api_get_subsidio_vivienda, params, {
          headers: headers
      }).pipe(delay(0)).subscribe(data => {

          let data_lst: any = {};
          let info_persona: any = {};
          data_lst = data;
          console.log(data_lst);
          let cantidad = Object.keys(data_lst).length;
          if(cantidad>0){
              info_persona=data_lst[0];
          }
            this.getmensajes(info_persona.contenido_carta, info_persona, cantidad);
            this.mensaje_listo=true;




      });




      return;
    }



  public getmensajes(idmsn, info_persona, cantidad){
     if(cantidad >=1){
          if(idmsn=="123"){
            this.mensajes=" <div class=\"asignado row\" > ";
            this.mensajes+=" <div class=\"col-md-3\"></div> ";
            this.mensajes+=" <div class=\"col-md-9\"> ";
            this.mensajes+=" <div class=\"nombre\">"+info_persona.nombre+" "+info_persona.apellido+"</div> ";
            this.mensajes+=" <div class=\"titulo\">Tu Subsidio Familiar de Vivienda fue asignado.</div> ";
            this.mensajes+=" <div class=\"texto\"> Comunicate con la Caja de Compensación en donde te postulaste al Subsidio Familiar de ";
            this.mensajes+=" Vivienda, para continuar con el proceso. <br /> ";
            this.mensajes+=" <strong style=\"float:right; font-size:14px;\">Asignación "+info_persona.fechaasigna+"</strong> </div> ";
            this.mensajes+=" </div> ";
            this.mensajes+=" </div> ";

          } else if(idmsn=="124"){
            this.mensajes=" <div class=\"asignado row\" > ";
            this.mensajes+=" <div class=\"col-md-3\"></div> ";
            this.mensajes+=" <div class=\"col-md-9\"> ";
            this.mensajes+=" <div class=\"nombre\">"+info_persona.nombre+" "+info_persona.apellido+"</div> ";
            this.mensajes+=" <div class=\"titulo\">Tu Subsidio Familiar de Vivienda fue asignado.</div> ";
            this.mensajes+=" <div class=\"texto\"> Acércate por tu carta este 9 y 10 de septiembre al Gran Salón  ";
            this.mensajes+=" de Vivienda Colsubsidio en el Centro Empresarial y Recreativo El Cubo, o apartir del 08  ";
            this.mensajes+=" de septiembre de 2017 al Centro de Servicio Colsubsidio donde te postulaste, de lunes a  ";
            this.mensajes+=" viernes de 8:00 a.m. a 5:00 p.m. y sábados de 8:00 a.m. a 12:00 m. <br /> ";
            this.mensajes+=" <br /> ";
            this.mensajes+=" <strong style=\"float:right; font-size:14px;\">Asignación "+info_persona.fechaasigna+"</strong> </div> ";
            this.mensajes+=" </div> ";
            this.mensajes+=" </div>";

          } else if(idmsn=="125"){
            this.mensajes=" <div class=\"asignado row\" > ";
            this.mensajes+=" <div class=\"col-md-3\"></div> ";
            this.mensajes+=" <div class=\"col-md-9\"> ";
            this.mensajes+=" <div class=\"nombre\">"+info_persona.nombre+" "+info_persona.apellido+"</div> ";
            this.mensajes+=" <div class=\"titulo\">Tu Subsidio Familiar de Vivienda fue asignado.</div> ";
            this.mensajes+=" <div class=\"texto\">A partir del "+info_persona.fechacarta+" podrás descargar  ";
            this.mensajes+=" tu carta de asignación desde la comodidad de tu hogar u oficina. Sólo debes ingresar a ";
            this.mensajes+=" <a href=\"https://afiliados.colsubsidio.com/wps/portal/colsubsidio/zona-transaccional/acceso-afiliados/\"  ";
            this.mensajes+=" target=\"_blank\">transacciones en línea, </a>solicitas tu clave, ingresas al portal, das clic en vivienda y listo. </div> ";
            this.mensajes+=" </div> ";
            this.mensajes+=" </div>";

          } else if(idmsn=="129"){
            this.mensajes=" <div class=\"asignado row\" > ";
            this.mensajes+=" <div class=\"col-md-3\"></div> ";
            this.mensajes+=" <div class=\"col-md-9\"> ";
            this.mensajes+=" <div class=\"nombre\">"+info_persona.nombre+" "+info_persona.apellido+"</div> ";
            this.mensajes+=" <div class=\"titulo\">Tu Subsidio Familiar de Vivienda fue asignado.</div> ";
            this.mensajes+=" <div class=\"texto\"> Comunicate con la Caja de Compensación en donde te postulaste  ";
            this.mensajes+=" al Subsidio Familiar de Vivienda, para continuar con el proceso. <br /> ";
            this.mensajes+=" <strong style=\"float:right; font-size:14px;\">Asignación "+info_persona.fechaasigna+"</strong> </div> ";
            this.mensajes+=" </div> ";
            this.mensajes+=" </div>";

          } else if(idmsn=="130"){
            this.mensajes=" <div class=\"asignado row\" > ";
            this.mensajes+=" <div class=\"col-md-3\"></div> ";
            this.mensajes+=" <div class=\"col-md-9\"> ";
            this.mensajes+=" <div class=\"nombre\">"+info_persona.nombre+" "+info_persona.apellido+"</div> ";
            this.mensajes+=" <div class=\"titulo\">Tu Subsidio Familiar de Vivienda fue ajustado.</div> ";
            this.mensajes+=" <div class=\"texto\">Acércate por tu carta a partir del <strong> ";
            this.mensajes+=" "+info_persona.fechacarta+"</strong> al Centro de Servicios ";
            this.mensajes+=" Colsubsidio en donde radicaste los documentos para el ajuste.  ";
            this.mensajes+=" <a href=\"https://www.colsubsidio.com/afiliados/vivienda\" target=\"_blank\"> ";
            this.mensajes+=" Consulta horarios de atención</a> </div> ";
            this.mensajes+=" </div> ";
            this.mensajes+=" </div>";

          } else if(idmsn=="130"){
            this.mensajes=" <div class=\"asignado row\" > ";
            this.mensajes+=" <div class=\"col-md-3\"></div> ";
            this.mensajes+=" <div class=\"col-md-9\"> ";
            this.mensajes+=" <div class=\"nombre\">"+info_persona.nombre+" "+info_persona.apellido+"</div> ";
            this.mensajes+=" <div class=\"titulo\">Tu Subsidio Familiar de Vivienda fue asignado.</div> ";
            this.mensajes+=" <div class=\"texto\"> Acércate por tu carta a partir del <strong> ";
            this.mensajes+=" "+info_persona.fechacarta+"</strong> al Centro de Servicios ";
            this.mensajes+=" Colsubsidio en donde te postulaste. <a href=\"https://www.colsubsidio.com/afiliados/vivienda\"  ";
            this.mensajes+=" target=\"_blank\">Consulta horarios de atención</a> <br /> ";
            this.mensajes+=" <strong style=\"float:right; font-size:14px;\">Asignación "+info_persona.fechaasigna+"</strong> </div> ";
            this.mensajes+=" </div> ";
            this.mensajes+=" </div>";

          } else{
            this.mensajes=" <div class=\"asignado row\" > ";
            this.mensajes+=" <div class=\"col-md-3\"></div> ";
            this.mensajes+=" <div class=\"col-md-9\"> ";
            this.mensajes+=" <div class=\"nombre\">"+info_persona.nombre+" "+info_persona.apellido+"</div> ";
            this.mensajes+=" <div class=\"titulo\">Tu Subsidio Familiar de Vivienda fue asignado.</div> ";
            this.mensajes+=" <div class=\"texto\"> Acércate por tu carta a partir del <strong> ";
            this.mensajes+=" "+info_persona.fechacarta+"</strong> al Centro de Servicios  ";
            this.mensajes+=" Colsubsidio en donde te postulaste. <a href=\"https://www.colsubsidio.com/afiliados/vivienda\"  ";
            this.mensajes+=" target=\"_blank\">Consulta horarios de atención</a> <br /> ";
            this.mensajes+=" <strong style=\"float:right; font-size:14px;\">Asignación "+info_persona.fechaasigna+"</strong> </div> ";
            this.mensajes+=" </div> ";
            this.mensajes+=" </div> ";
          }
      }else{
          this.mensajes=" <div class=\"asignado2 row\" > ";
          this.mensajes+=" <div class=\"col-md-3\"></div> ";
          this.mensajes+=" <div class=\"col-md-9\"> ";
          this.mensajes+=" <div class=\"titulo2\" style=\"line-height:1;\">Tu cédula no se encuentra  ";
          this.mensajes+=" registrada en la asignación del Subsidio de Vivienda.</div> ";
          this.mensajes+=" <div class=\"texto2\">Te invitamos a consultar el estado de tu  ";
          this.mensajes+=" postulación en nuestra Línea Audio Servicios 745 79 00 o acércate al Centro de Servicios ";
          this.mensajes+=" más cercano a tu lugar de trabajo o residencia,  ";
          this.mensajes+=" <a href=\"https://www.colsubsidio.com/afiliados/vivienda\" target=\"_blank\"> ";
          this.mensajes+=" consulta horarios de atención</a></div> ";
          this.mensajes+=" </div> ";
          this.mensajes+=" </div>";
    }

}//fin getmensajes

}
