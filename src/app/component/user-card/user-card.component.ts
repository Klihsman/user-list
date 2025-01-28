import { Component, Input } from '@angular/core';
import IUser from '../../types/user.type';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.sass',
})
export class UserCardComponent {
  @Input() user: IUser = { email: '', name: '' };
}
