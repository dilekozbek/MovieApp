import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb(){
    const movies = [
      {id: 1, name: "movie1",description:"good movie", imageUrl:"1.jpg"},
      {id: 2, name: "movie2",description:"bad movie", imageUrl:"2.jpg"},
      {id: 3, name: "movie3",description:"perfect movie", imageUrl:"3.jpg"},
      {id: 4, name: "movie4",description:"bad movie", imageUrl:"4.jpg"},
      {id: 5, name: "movie5",description:"so-so movie", imageUrl:"5.jpg"},
      {id: 6, name: "movie5",description:"nice movie", imageUrl:"6.jpg"},
      {id: 7, name: "movie5",description:"good movie", imageUrl:"7.jpg"}
    ];
    return {movies};
  }

  constructor() { }
}
