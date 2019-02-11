import {Injectable} from "@angular/core";

@Injectable()
export class TestObjectService {

  get() {
    return this.mediaItems;
  }

  add(testObj) {
    this.mediaItems.push(testObj);
  }

  delete(testObj) {
    let index = this.mediaItems.indexOf(testObj);
    if (index>=0) {
      this.mediaItems.splice(index,1);
    }
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
