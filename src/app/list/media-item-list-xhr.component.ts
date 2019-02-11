import { Component } from '@angular/core';
import { TestObjectService } from "../services/object-helper-xhr.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent {

  medium = '';
  mediaItems = [];

  constructor(
    private testObjectService: TestObjectService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // mediums default value all will be passed to params
      let medium = params['list'];
      // This makes sure that when a new item is added, list is refreshed again
      if (medium.toLowerCase() === 'all') {
        medium = '';
      }
    })
  }

  deleteValue(mediaItem) {
    this.testObjectService.delete(mediaItem).subscribe(() => {
      this.getMediaItems(this.medium);
    });
  }

  getMediaItems(medium) {
    this.medium = medium;
    this.testObjectService.get1(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      });
  }
}
