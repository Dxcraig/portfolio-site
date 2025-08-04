import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './photos.component.html'
})
export class PhotosComponent {
  
  professionalPhotos = [
    {
      src: '/assets/photos/profile-1.jpeg',
      alt: 'Nicholas Acquah Wilson - Professional Photo 1',
      title: 'Professional Portrait'
    },
    {
      src: '/assets/photos/profile-2.jpeg', 
      alt: 'Nicholas Acquah Wilson - Professional Photo 2',
      title: 'Business Portrait'
    }
  ];

}
