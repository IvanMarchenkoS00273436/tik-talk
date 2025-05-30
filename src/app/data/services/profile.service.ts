import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  http: HttpClient = inject(HttpClient);
  baseApiUrl: string = 'https://icherniakov.ru/yt-course/';

  constructor() { }
  
  getTestAccounts(): any {
    return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`);
  }
}
