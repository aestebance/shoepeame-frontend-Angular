import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() productList: any;
  @Output() galleryEmitter = new EventEmitter();
  @Output() searchBarEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    (this.productList === undefined) ? this.productList = [] : null;
  }

  searchBarChanges(changes): void {
    this.searchBarEmitter.emit(changes);
  }

  showGrid(): any {
    this.galleryEmitter.emit(
      {
        gallery: false,
        grid: true
      }
    );
  }
}
