import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Method, RestService } from './../rest.service';

const PROJECTS_URL = '/projects';

@Injectable()
export class ProjectRestService extends RestService {

  constructor(http: HttpClient) {
    super(http);
  }

  queryGet(): Observable<Array<any>> {
    return this.request<Array<any>>({
      url: `${PROJECTS_URL}`,
      method: Method.GET
    });
}

}