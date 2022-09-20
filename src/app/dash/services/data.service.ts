import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';

import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '../interfaces/dataInterface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  @Output() user: EventEmitter<any> = new EventEmitter();

  url = environment.api;
  constructor(private http: HttpClient) {

  }

  getData() {
    return this.http.get<User[]>(this.url)
    // eslint-disable-next-line @typescript-eslint/dot-notation
    .pipe(map( data =>data['users']));
  }

  getDataId(id) {
    return this.http.get<User[]>(this.url +'/' + id)
    // eslint-disable-next-line @typescript-eslint/dot-notation
    .pipe(map( data =>data['users']));
  }

}
