import { Component, OnInit } from '@angular/core';
import { Tourist } from '../tourist';
import { TouristService } from '../tourist.service';

@Component({
  selector: 'app-show-tourist',
  templateUrl: './show-tourist.component.html',
  styleUrls: ['./show-tourist.component.css']
})
export class ShowTouristComponent implements OnInit {

  tourists!: Tourist[];
  constructor(private touristService: TouristService) { }

  ngOnInit(): void {

    this.touristService.getTourist().subscribe((data: Tourist[]) => {
      console.log(data);
      this.tourists = data;
    })

  }

}
