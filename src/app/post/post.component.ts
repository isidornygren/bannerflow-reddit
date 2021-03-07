import { Component, OnInit, Input } from '@angular/core';
import { Image, Post } from '../types/feed';
import { Post as PostDetail} from '../types/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post?: Post | PostDetail;
  @Input() isNested?: boolean;
  
  thumb?: Image;

  ngOnInit(): void {
    this.thumb = this.post?.preview?.images?.[0];
    console.log(this.thumb);
  }
}
