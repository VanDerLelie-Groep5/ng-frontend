import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../root/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './components/text-input/text-input.component';
import { MainButtonComponent } from './components/main-button/main-button.component';
import { ContainerNavComponent } from './components/container-nav/container-nav.component';
import { ContainerFixedComponent } from './components/container-fixed/container-fixed.component';


@NgModule({
  declarations: [
    TextInputComponent,
    MainButtonComponent,
    ContainerNavComponent,
    ContainerFixedComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    // modules
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

    // components
    TextInputComponent,
    MainButtonComponent,
    ContainerNavComponent,
    ContainerFixedComponent
  ]
})
export class SharedModule { }
