import { AfterViewInit, Component, ElementRef, Input, ViewChild, signal } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent implements AfterViewInit {
  @Input({required: true}) audioUrl!: string;
  @ViewChild('wave') container !: ElementRef;
  private ws!: WaveSurfer;
  isPlay = signal(false);

  ngAfterViewInit(){
    this.ws = WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement
    })
    this.ws.on('play', () => this.isPlay.set(true));
    this.ws.on('pause', () => this.isPlay.set(false));
  }

  playPause(){
    this.ws.playPause()
  }
}
