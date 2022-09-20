import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../interfaces/dataInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

  title = 'Table';
  users: User[] = [] ;
  titlesTable = [] = ['Nombre','Correo','Telefono','Ciudad'];

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
    this.dataUsers();
  }

  dataUsers(){
    this.dataService.getData()
    .subscribe( data => {
      this.users = data;
    });
  }

  mostrarUsuario(user){

    this.dataService.user.emit(user);
    this.router.navigate(['dash/user']);
  }

}
