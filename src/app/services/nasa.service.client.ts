import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class NasaServiceClient {

  imgSearch: any;

  searchAsteroid(asteroidId: String) {
    const url = 'https://api.nasa.gov/neo/rest/v1/neo/' + asteroidId + '?api_key=qnRIVwggS9kblyYoKRBAfyw9UymHsMx8COLqcNyd';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }

  searchImg(params: String) {
    const url = 'https://images-api.nasa.gov/search?q=' + params + '&media_type=image';
    return this.http.get(url)
      .map((response: Response) => {
        this.imgSearch = response.json();
        return response.json();
      });
  }
  getAPOD() {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=ZC1UpuaKUg9oUmNxnAcfI1s7KH7lIoN3Av2urJNr';
    return this.http.get(url)
      .map((response: Response) => {
      return response.json();
    });
  }

  getAPODPictureOfDate(params: Date) {
    const url = 'https://api.nasa.gov/planetary/apod?api_key=ZC1UpuaKUg9oUmNxnAcfI1s7KH7lIoN3Av2urJNr';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
      });
  }
  requestDetails(id: string) {
      const item = this.imgSearch.collection.items[id];
      return item;
  }



  constructor(private http: Http) {}


}
