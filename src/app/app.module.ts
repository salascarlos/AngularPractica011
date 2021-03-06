import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProveedoresService } from '../app/servicios/proveedores.service';
import { ProveedoresComponent } from '../app/proveedores/proveedores.component';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AddproveedorComponent } from './proveedores/addproveedor/addproveedor.component';
import { FormsModule } from '@angular/forms';
import { AddpresupuestoComponent } from './proveedores/addpresupuesto/addpresupuesto.component';
import { ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'proveedores', component: ProveedoresComponent },
    { path: 'addproveedor', component: AddproveedorComponent },
    { path: 'addpresupuesto', component: AddpresupuestoComponent },
    { path: '**', component: InicioComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveedorComponent,
    AddpresupuestoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProveedoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
