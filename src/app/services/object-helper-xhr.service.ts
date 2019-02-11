import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
@Injectable()
export class TestObjectService {

  constructor(private http: HttpClient) {}

  get() {
    // Url is mediaItems in xhr backend
    return this.http.get<TestObjectResponse>('mediaItems').pipe(
      map((response: TestObjectResponse) => {
        return response.testObjects;
      })
    )
  }

  get1(medium) {

    let getOptions = {
      params: {
        medium
      }
    };
    // getOptions is queryParam. Needs to be passed as an object
    // Url is mediaItems in xhr backend
    return this.http.get<TestObjectResponse>('mediaItems', getOptions).pipe(
      map((response: TestObjectResponse) => {
        return response.testObjects;
      })
    )
  }

  // in onSubmit button, add this.service.add(mediaItem).subscribe()
  add(testObj) {
    return this.http.post('mediaItems', testObj);
  }

  delete(testObj) {
    return this.http.delete('mediaItems/${mediaItem.id}');
  }

  mediaItems = [
    {
      id: 1,
      name: "Firebug",
      surname: "Series",
      class: "Science Fiction",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false
    },
    {
      id: 2,
      name: "The Small Tall",
      surname: "Movies",
      class: "Comedy",
      year: 2015,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 3,
      name: "The Redemption",
      surname: "Movies",
      class: "Action",
      year: 2016,
      watchedOn: null,
      isFavorite: false
    }, {
      id: 4,
      name: "Hoopers",
      surname: "Series",
      class: "Drama",
      year: null,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 5,
      name: "Happy Joe: Cheery Road",
      surname: "Movies",
      class: "Action",
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false
    }
  ];
}

export interface TestObject {
  id: number;
  name: string;
  surname: string;
  class: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}

export interface TestObjectResponse {
  testObjects: TestObject[];
}
