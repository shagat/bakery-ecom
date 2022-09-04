import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ContentComponent } from './content/content.component';
import { ItemsComponent } from './content/items/items.component';
import { ItemListComponent } from './content/items/item-list/item-list.component';
import { ItemComponent } from './content/items/item/item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RippleDirective } from './shared/ripple.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRippleModule} from '@angular/material/core'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideNavComponent,
    ContentComponent,
    ItemsComponent,
    ItemListComponent,
    ItemComponent,
    DropdownDirective,
    RippleDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, MatRippleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
