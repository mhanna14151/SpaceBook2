import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {environment} from "../../environments/environment";

@Injectable()
export class PictureServiceClient{
  constructor(private router: Router, private http: Http){}
  baseURL = environment.baseUrl;
  api = {
    'createPicture': this.createPicture,
    'findPictureById': this.findPictureById,
    'findPicturesByAlbum': this.findPicturesByAlbum,
    'updatePicture': this.updatePicture,
    'deletePicture': this.deletePicture
  };

  createPicture(albumId: String, picture: any) {
    const url = this.baseURL + '/api/album/' + albumId + '/pic';
    return this.http.post(url, picture)
      .map((res: Response) => {
        return res.json();
      });
  }

  findPictureById(picId: String) {
    const url = this.baseURL + '/api/pic/' + picId;
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  findPicturesByAlbum(albumId: String) {
    const url = this.baseURL + '/api/album/' + albumId + '/picture';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  updatePicture(picId: String, picture: any) {
    const url = this.baseURL + '/api/pic/' + picId;
    return this.http.put(url, picture)
      .map((res: Response) => {
        return res.json();
      });
  }

  deletePicture(picId: String) {
    const url = this.baseURL + '/api/pic/' + picId;
    return this.http.delete(url);
  }

}
