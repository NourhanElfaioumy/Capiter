import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AllUserComponent } from './all-user/all-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SingleUserComponent } from './single-user/single-user.component';

@NgModule({
  declarations: [AllUserComponent, UpdateUserComponent, SingleUserComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule],
})
export class UsersModule {}
