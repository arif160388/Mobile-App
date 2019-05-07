import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
name1='';
name2='';
get score()
{
  const letter=(this.name1)+(this.name2).toLowerCase();
  let sum=0;
  for(let i=0;i<letter.length;i++)
  {
    sum=letter.charCodeAt(i);
  }
  return sum % 101;
}
}
