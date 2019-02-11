import { Component } from '@angular/core';
import { TestObjectService } from "../services/object-helper.service";

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent {

  mediaItems;
  constructor(
    private testObjectService: TestObjectService,
  ) {}

  ngOnInit() {
    this.mediaItems = this.testObjectService.get();
  }

  deleteValue(mediaItem) {
    this.testObjectService.delete(mediaItem);
  }
}
