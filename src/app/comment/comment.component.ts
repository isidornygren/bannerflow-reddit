import { Component, OnInit, Input } from '@angular/core';
import { Child} from '../types/post';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  @Input() comment?: Child;
  @Input() nested?: number;

  getNestedBackgroundColour() {
    const start = 15;

    if(this.nested){
      const hexValue = (start - this.nested).toString(16);
      const prevHexValue = (start - this.nested + 1).toString(16)
      return {'background': `linear-gradient(to right, #${prevHexValue}${prevHexValue}${prevHexValue}, #${hexValue}${hexValue}${hexValue})`};
    }
    return {};
  }
}
