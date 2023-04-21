import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Shift } from '../models/shiftDto';

@Injectable({
  providedIn: 'root'
})
export class ShiftService {
  private apiUrl: string | undefined;

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.api_base_url + "/Shift";
  }

  public getShifts() : Observable<Shift[]> {
    return this.http.get<Shift[]>(this.apiUrl!);
  }

  public getShift(id : string) : Observable<Shift[]> {
    return this.http.get<Shift[]>(this.apiUrl! + `/${id}`)
  }

  public postShift(order : Shift) : Observable<Object> {
    return this.http.post<Object>(this.apiUrl!, order);
  }

  public updateShift(order : Shift) : Observable<Object> {
    return this.http.put<Object>(this.apiUrl!, order);
  }
}
