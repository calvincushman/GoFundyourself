import { Injectable } from '@angular/core';
import { Campaign } from './campaign.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CampaignService {
  campaigns: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.campaigns = database.list('campaigns');
  }

  getCampaigns() {
    return this.campaigns;
  }

  addCampaign(newCampaign: Campaign) {
    this.campaigns.push(newCampaign);
  }

  getCampaignById(campaignId: string) {
    return this.database.object('campaigns/' + campaignId);
  }

}
