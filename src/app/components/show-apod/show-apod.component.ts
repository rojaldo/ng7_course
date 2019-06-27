import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-show-apod',
  templateUrl: './show-apod.component.html',
  styleUrls: ['./show-apod.component.scss']
})
export class ShowApodComponent implements OnInit, OnChanges {
  @Input() content: any;
  playerVars = {
    cc_lang_pref: 'en'
  };

  id = '';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: any): void {
    if (this.content.media_type === 'video') {
      this.id = this.youtube_parser(this.content.videoURL);
    }
  }

  youtube_parser(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : false;
  }


}
