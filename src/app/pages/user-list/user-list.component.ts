import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user-service.service';
import IUser from '../../types/user.type';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.sass',
})
export class UserListComponent implements OnInit {
  users: IUser[] = [];
  filterText: string = '';
  showErrorToast = false;
  showSuccessToast = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.showSuccessToast = true;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
        this.showErrorToast = true;
      },
    });
  }

  filterUsers(): IUser[] {
    return this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(this.filterText.toLowerCase()) ||
        user.email.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }
}
