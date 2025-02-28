import { Component, OnInit, inject } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [WelcomeComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
})
export class AuthLayoutComponent {}
