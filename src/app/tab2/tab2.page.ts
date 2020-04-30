import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

 
  currentIndex: number;
 
  avatarsRef: AngularFireList<any>;
  avatars: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {


    this.avatars = db.list('/Users').snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    
  }
  swiped(event: any, index: number) {
    this.avatars[index].visible = false;
    this.currentIndex--;
  }


  swipeleft() {
    this.avatars[this.currentIndex].visible = false;
    this.currentIndex--;
  }

  swiperight() {
    this.avatars[this.currentIndex].visible = false;
    this.currentIndex--;
  }

}
