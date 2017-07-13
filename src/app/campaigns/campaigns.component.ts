import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Campaign } from '../campaign.model';
import { CampaignService } from '../campaign.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.css'],
  providers: [CampaignService]
})
export class CampaignsComponent implements OnInit {
  campaigns: FirebaseListObservable<any[]>;
  currentCampaign: string = this.router.url;

  constructor(private router: Router, private campaignService: CampaignService) { };

  ngOnInit() {
    this.campaigns = this.campaignService.getCampaigns();
  }

  goToDetailPage(clickedCampaign) {
    this.router.navigate(['campaigns', clickedCampaign.$key]);
  };

}
