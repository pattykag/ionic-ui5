import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import '@ui5/webcomponents/dist/Button';
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableColumn.js"; 
import "@ui5/webcomponents/dist/TableRow.js"; 
import "@ui5/webcomponents/dist/TableCell.js"; 

export interface ToDosResponse {
  value: ToDo[]
}

export interface ToDo {  
    "id": number,
    "title": string,
    "subtitle": string,
    "place": string
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public ToDos: ToDo[] = [];
  public ToDosTitle: string = null;

  constructor(private http: HttpClient) {
    //this.http.get<ToDosResponse>('http://localhost:4004/data/ToDos').pipe(map(ToDoResponse => {return ToDoResponse.value})).subscribe((response) => {
      this.http.get<ToDosResponse>('http://localhost:4004/data/ToDos').pipe(map(ToDoResponse => ToDoResponse.value)).subscribe((response) => {
      //this.myToDos = response;
      this.ToDos = response;
      console.log(this.ToDos);
      this.ToDosTitle = response[0].title;
    });
  }

  /**
   * onPress
element:ToDo   */
  public onPress(element:ToDo) {
    console.log(element);
  }
  }
