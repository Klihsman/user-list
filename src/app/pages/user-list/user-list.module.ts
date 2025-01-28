import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from './user-list-routing.module';
import { UserService } from '../../services/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from '../../component/user-card/user-card.component';
import { FormsModule } from '@angular/forms';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    UserListRoutingModule,
    HttpClientModule,
    UserCardComponent,
    FormsModule,
    NgbToast,
  ],
  providers: [UserService],
})
export class UserListModule {}
