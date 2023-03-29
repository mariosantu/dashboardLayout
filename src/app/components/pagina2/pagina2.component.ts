import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component {


  playSong() {
    let audio = new Audio();
    audio.src = "../../../assets/audio/uta.mp3";
    audio.load();
    audio.play();
  }
}
