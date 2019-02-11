import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nama = 'KhosyAkmalR-TI2A';
  alamat = 'Jalan Saxofone';

  hari = Date.now();

  Hobb: any[];
  constructor(private courseServ:CourseService) { }

  ngOnInit() {
    this.Hobb = this.courseServ.getKhosy();
  }

}
