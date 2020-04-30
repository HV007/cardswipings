import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  newTask = {name: '',age:''};
  tasksRef: AngularFireList<any>;
  tasks: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.tasksRef = db.list('/Users');

    this.tasks = this.tasksRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    
  }}