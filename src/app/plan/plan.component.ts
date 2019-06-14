import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  place = ['Nairobi', 'Isiolo', 'Marsabit', 'Moyale'];

  price = ['2000', '1500', '1000', '500'];

  seats = ["1A","1B","2A","2B","3A","3B","4A","4B"];

  constructor(private http: HttpClientModule) { }
  ngOnInit() {
    this.http.get("http://jsonplaceholder.typicode.com/users");
    map((response)=> response.json())
    Subscribe((data) => console.log(data))
  }

}
