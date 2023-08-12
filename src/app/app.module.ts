import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	BrowserModule,
	HAMMER_GESTURE_CONFIG,
	HammerGestureConfig
} from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
  ],
  providers: [
		{ provide: 'LOCALSTORAGE', useFactory: getLocalStorage },
		{ provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig },
		{
			provide: APP_BASE_HREF,
			useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
			deps: [PlatformLocation]
		}
	],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getLocalStorage() {
	return typeof window !== 'undefined' ? window.localStorage : null;
}
