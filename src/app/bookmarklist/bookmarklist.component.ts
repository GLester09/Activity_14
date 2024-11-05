import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-bookmarklist',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './bookmarklist.component.html',
  styleUrl: './bookmarklist.component.css'
})
export class BookmarklistComponent {
url: string = '';
displayedUrl: string = '';

displayUrl(){
   if(this.url.startsWith('http://') || this.url.startsWith('https://')){
    this.displayedUrl = this.url;
   }else{
    this.displayedUrl = 'http://' + this.url;
   }
}

}
