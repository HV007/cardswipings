import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import {SwipeCardLibModule} from 'ng-swipe-card';
import { Tab2PageRoutingModule } from './tab2-routing.module';
import {
  AngularFireDatabase,
  AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,SwipeCardLibModule
  ],
  providers: [
    AngularFireDatabase],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
