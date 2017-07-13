import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Campaign } from '../campaign.model';
import { CampaignService } from '../campaign.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.css'],
  providers: [ CampaignService ]
})
export class CampaignDetailComponent implements OnInit {
  campaignId: string;
  campaignToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private campaignService: CampaignService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.campaignId = urlParameters['id'];
    });
    this.campaignToDisplay = this.campaignService.getCampaignById(this.campaignId);
  }

}
