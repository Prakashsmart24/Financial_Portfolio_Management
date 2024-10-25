import { Component, OnInit } from '@angular/core';
import { TitleService } from '../services/title.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements OnInit{
  title: string = "";

  constructor(private  titleService: TitleService,private router: Router){

  }


  ngOnInit(): void {
    this.titleService.currentTitle.subscribe(title => {
      this.title = title;
    });

    this.updateTitle(this.router.url);


  }

updateTitle(Url: string){
  if(Url.includes('forms')){
    this.titleService.changeTitle('Investment Form');
  }else{
    this.titleService.changeTitle('Dashboard')
  }
}

}
