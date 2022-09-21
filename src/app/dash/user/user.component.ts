import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../interfaces/dataInterface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  user: User[] = [];
  // eslint-disable-next-line @typescript-eslint/ban-types
  mostrar: Boolean = false;

  constructor(private dataService: DataService) {
    this.dataService.user.subscribe(user => {
      if(user){
        this.mostrar = true;
      }
      this.user = user;
    });
  }

  ngOnInit(): void {
  }



}
