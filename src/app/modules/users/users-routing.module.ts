import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRequierGuard } from 'src/app/guards/auth/auth-requier.guard';
import { AllUserComponent } from './all-user/all-user.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {
    path: '',
    component: AllUserComponent,
    canActivate: [AuthRequierGuard],
  },
  {
    path: 'update/:id',
    component: UpdateUserComponent,
    canActivate: [AuthRequierGuard],
  },
  {
    path:'single-user/:id',
    component:SingleUserComponent,
    canActivate: [AuthRequierGuard],

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
