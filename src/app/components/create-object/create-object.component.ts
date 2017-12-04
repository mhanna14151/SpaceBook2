import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-object',
  templateUrl: './create-object.component.html',
  styleUrls: ['./create-object.component.css']
})
export class CreateObjectComponent implements OnInit {
  @ViewChild('f') createForm: NgForm;
  objType: string;
  types = ['User', 'Celestial Body', 'Celestial Event', 'Publication'];

  constructor() { }

  ngOnInit() {
  }

}
