import { Text } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Tourist } from '../tourist';
import { TouristService } from '../tourist.service';

@Component({
  selector: 'app-register-tourist',
  templateUrl: './register-tourist.component.html',
  styleUrls: ['./register-tourist.component.css']
})
export class RegisterTouristComponent implements OnInit {
  
  tourist: Tourist = new Tourist();

  constructor(private touristService: TouristService) { }

  ngOnInit(): void {

  }

  touristRegister() {
    console.log(this.tourist);
    this.touristService.registerTourist(this.tourist).subscribe(data => {
      alert("Successfully Registered !!!");
    }, error=>alert("Sorry. Tourist Not Registered !!!"));
  }

}
