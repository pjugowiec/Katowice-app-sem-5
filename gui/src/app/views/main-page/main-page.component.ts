import { ProjectRestService } from './../../services/rest/projects-rest.service';
import { Component, OnInit, resolveForwardRef } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private _projectRestService: ProjectRestService) { }

  ngOnInit(): void {
    console.log("test");
    this._projectRestService.queryGet().subscribe(res => {
      console.log(res)
    })
  }

}
