import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {environment} from "../../environments/environment";

@Injectable()
export class AlbumServiceClient {
  constructor(private router: Router, private http: Http) {
  }

  baseURL = environment.baseUrl;


  api = {
    'createAlbum': this.createAlbum,
    'findAlbumById': this.findAlbumById,
    'findAllAlbumsByUser': this.findAllAlbumsByUser,
    'updateAlbum': this.updateAlbum,
    'deleteAlbum': this.deleteAlbum
  };

  createAlbum(userId: String, album: any){
    const url = this.baseURL + '/api/user/' + userId + '/album';
    return this.http.post(url, album)
      .map((res: Response) => {
        return res.json();
      });
  }

  findAlbumById(albumId: String) {
    const url = this.baseURL + '/api/album/' + albumId;
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  findAllAlbumsByUser(userId: String) {
    const url = this.baseURL + '/api/user/' + userId + '/album';
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
  }

  updateAlbum(albumId: String, album: any) {
    const url = this.baseURL + '/api/album/' + albumId;
    return this.http.put(url, album)
      .map((res: Response) => {
        return res.json();
      });
  }

  deleteAlbum(albumId: String) {
    const url = this.baseURL + '/api/album/' + albumId;
    return this.http.delete(url);
  }

}
