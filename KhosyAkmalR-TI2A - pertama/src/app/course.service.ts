import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  CourseService(): any[] {
    throw new Error("Method not implemented.");
  }

  constructor() { }

  getKhosy(){
    return [
      {id:0, hobby:"Futsal", ket:"setiap minggu minimal sekali"},
      {id:1, hobby:"Game", ket:"pada saat waktu luang"},
      {id:2, hobby:"Mendengarkan Lagu", ket:"mendengarkan pada saat waktu senggang"}
    ]
  }
}
