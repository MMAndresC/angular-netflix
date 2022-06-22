import { FilmsInterface } from './models/netflix.interfaces';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public filmsTop5: FilmsInterface = {
    title: 'Top 5 mas populares',
    gallery: [
      {
        src: '../assets/images/Top10/1-papel.webp',
        alt: 'Casa de papel',
      },
      {
        src: '../assets/images/Top10/2-reina.webp',
        alt: 'Reina',
      },
      {
        src: '../assets/images/Top10/3-titanes.webp',
        alt: 'Titanes',
      },
      {
        src: '../assets/images/Top10/4-lostinspace.webp',
        alt: 'Lost in space',
      },
      {
        src: '../assets/images/Top10/7-blacklist.webp',
        alt: 'Blacklist',
      },
    ],
  };

  public anime: FilmsInterface = {
    title: 'anime',
    gallery: [
      {
        src: '../assets/images/Anime/gundam.webp',
        alt: 'Gundam',
      },
      {
        src: '../assets/images/Anime/evangelion.webp',
        alt: 'Evangelion',
      },
      {
        src: '../assets/images/Anime/gitsarise.webp',
        alt: 'Ghost in the shell Arise',
      },
      {
        src: '../assets/images/Anime/mononoke.webp',
        alt: 'La princesa Mononoke',
      },
      {
        src: '../assets/images/Anime/perfectblue.webp',
        alt: 'Perfect Blue',
      },
      {
        src: '../assets/images/Anime/porcorosso.webp',
        alt: 'Porco Rosso',
      },
    ],
  };

  public sciFi: FilmsInterface = {
    title: 'sci-fi',
    gallery: [
      {
        src: '../assets/images/Sci-fi/12monos.webp',
        alt: '12 Monos',
      },
      {
        src: '../assets/images/Sci-fi/startrek.webp',
        alt: 'Star Treck',
      },
      {
        src: '../assets/images/Sci-fi/doom.webp',
        alt: 'Doom',
      },
      {
        src: '../assets/images/Sci-fi/transformers.webp',
        alt: 'Transformers',
      },
      {
        src: '../assets/images/Sci-fi/core.webp',
        alt: 'Core',
      },
      {
        src: '../assets/images/Sci-fi/deepimpact.webp',
        alt: 'Deep Impact',
      },
    ],
  };

  public accion: FilmsInterface = {
    title: 'accion',
    gallery: [
      {
        src: '../assets/images/Accion/heat.webp',
        alt: 'Heat',
      },
      {
        src: '../assets/images/Accion/equalizer2.webp',
        alt: 'Equalizer 2',
      },
      {
        src: '../assets/images/Accion/johnwick2.webp',
        alt: 'John Wick 2',
      },
      {
        src: '../assets/images/Accion/killbill2.webp',
        alt: 'Kill Bill 2',
      },
      {
        src: '../assets/images/Accion/terminator2.webp',
        alt: 'Terminator 2',
      },
      {
        src: '../assets/images/Accion/elprotector.webp',
        alt: 'El protector',
      },
    ],
  };

  public drama: FilmsInterface = {
    title: 'drama',
    gallery: [
      {
        src: '../assets/images/Drama/clublucha.webp',
        alt: 'Club de la lucha',
      },
      {
        src: '../assets/images/Drama/1917.webp',
        alt: '1917',
      },
      {
        src: '../assets/images/Drama/millaverde.webp',
        alt: 'La milla verde',
      },
      {
        src: '../assets/images/Drama/scarface.webp',
        alt: 'Scarface',
      },
      {
        src: '../assets/images/Drama/naufrago.webp',
        alt: 'Naufrago',
      },
      {
        src: '../assets/images/Drama/arrival.webp',
        alt: 'Arrival',
      },
    ],
  };

  public comedia: FilmsInterface = {
    title: 'comedia',
    gallery: [
      {
        src: '../assets/images/Comedia/rickandmorty.webp',
        alt: 'Rick and Morty',
      },
      {
        src: '../assets/images/Comedia/cazafantasmas.webp',
        alt: 'Cazafantasmas',
      },
      {
        src: '../assets/images/Comedia/juerga.webp',
        alt: 'Juerga hasta el fin',
      },
      {
        src: '../assets/images/Comedia/casi300.webp',
        alt: 'Casi 300',
      },
      {
        src: '../assets/images/Comedia/regresofuturo.webp',
        alt: 'Regreso al futuro',
      },
      {
        src: '../assets/images/Comedia/scarymovie3.webp',
        alt: 'Scary movie 3',
      },
    ],
  };
}
