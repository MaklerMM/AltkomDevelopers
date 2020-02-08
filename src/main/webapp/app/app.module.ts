import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { DevelopersAltkomSharedModule } from 'app/shared/shared.module';
import { DevelopersAltkomCoreModule } from 'app/core/core.module';
import { DevelopersAltkomAppRoutingModule } from './app-routing.module';
import { DevelopersAltkomHomeModule } from './home/home.module';
import { DevelopersAltkomEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    DevelopersAltkomSharedModule,
    DevelopersAltkomCoreModule,
    DevelopersAltkomHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    DevelopersAltkomEntityModule,
    DevelopersAltkomAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class DevelopersAltkomAppModule {}
