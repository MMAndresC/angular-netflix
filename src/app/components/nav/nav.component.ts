import { NavInterface } from './../../models/netflix.interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public navBar: NavInterface;
  public isTablet : boolean = false;

  constructor() { 
    this.navBar = {
      logo: {
        src: '../../assets/images/LOGO/logo.png',
        alt: 'Logo Netflix-falso'
      },
      optionsMenu:[
      {
        title: 'Inicio',
        link: '#inicio'
      },
      {
        title: 'TOP 5',
        link: '#top'
      },
      {
        title: 'Anime',
        link: '#anime'
      },
      {
        title: 'Sci-Fi',
        link: '#sci-fi'
      },
      {
        title: 'Accion',
        link: '#accion'
      },
      {
        title: 'Drama',
        link: '#drama'
      },
      {
        title: 'Comedia',
        link: '#comedia'
      }
      ],
      menuIcon:{
        text: 'Menu',
        image: {
          src: '../../assets/images/Icons/menu_icon_white.png',
          alt: 'menu icon'
        }
      },
      optionsClient: [
        {
          src: '../../assets/images/Icons/zoom-32.png',
          alt: 'search icon'
        },
      {
        src: '../../assets/images/Icons/bell-3-32.png',
        alt: 'notification icon'
      },
      ],
      loginClient:[
      {
        src: '../../assets/images/Icons/vi_icon.jpg',
        alt: 'login icon'
      },
      {
        src: '../../assets/images/Icons/expand_more_white.png',
        alt: 'expand menu icon'
      }
      ]

    }
  }

  ngOnInit(): void {
  }

  

}
