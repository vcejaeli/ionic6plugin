import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Haptics } from '@capacitor/haptics';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {

  }

  printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
  
    console.log('Current position:', coordinates);
  };  

  hapticsVibrate = async () => {
    alert('hello');
    await Haptics.vibrate();
  };
}
