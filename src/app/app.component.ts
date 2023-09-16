import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dev-guide';
  items$!: Observable<any[]>;

  constructor(private db: Firestore) {    
    const itemCollection = collection(this.db, 'test');
    collectionData(itemCollection).subscribe({
      next: res =>  {
        console.log(res);
      }
    })
    
  }
}
