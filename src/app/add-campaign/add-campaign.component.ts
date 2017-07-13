import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../campaign.service';
import { Campaign } from '../campaign.model';

@Component({
  selector: 'add-campaign',
  templateUrl: './add-campaign.component.html',
  styleUrls: ['./add-campaign.component.css'],
  providers: [CampaignService]
})
export class AddCampaignComponent implements OnInit {

  constructor(private campaignService: CampaignService) { }

  ngOnInit() {
  }

  submitForm(title: string, description: string, target: number, rewards: string) {
    var newCampaign: Campaign = new Campaign(title, description, target, rewards);
    this.campaignService.addCampaign(newCampaign);
  }

}
