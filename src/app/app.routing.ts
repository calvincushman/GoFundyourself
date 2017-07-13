import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { AddCampaignComponent } from './add-campaign/add-campaign.component';

const appRoutes: Routes = [
{
  path: '',
  component: WelcomeComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'campaigns',
  component: CampaignsComponent
},
{
  path: 'campaign-detail',
  component: CampaignDetailComponent
},
{
  path: 'add-campaign',
  component: AddCampaignComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
