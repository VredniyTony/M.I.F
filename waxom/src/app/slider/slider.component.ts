import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  images;

  constructor() {
  }

  ngOnInit() {
    this.images = [
      {
        image: '../../assets/photo.png',
        title1: 'Unique and Modern Design',
        title2: 'Portfolio PSD Template',
        description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil',
        button: 'get started'
      },
      {
        image: '../../assets/photo.png',
        title1: 'Unique and Modern Design',
        title2: 'Portfolio PSD Template',
        description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil',
        button: 'get started'
      },
      {
        image: '../../assets/photo.png',
        title1: 'Unique and Modern Design',
        title2: 'Portfolio PSD Template',
        description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil',
        button: 'get started'
      },
      {
        image: '../../assets/photo.png',
        title1: 'Unique and Modern Design',
        title2: 'Portfolio PSD Template',
        description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil',
        button: 'get started'
      },
      {
        image: '../../assets/photo.png',
        title1: 'Unique and Modern Design',
        title2: 'Portfolio PSD Template',
        description: 'Nam liber tempor cum soluta nobis eleifend option congue nihil',
        button: 'get started'
      }
    ];
  }
}

