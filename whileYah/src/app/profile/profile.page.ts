import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {
  namaPengguna: string = 'Marni';
  isLogin = false;
  constructor(
    private login: Login,
    private router: Router,
    private animationCtrl: AnimationController,
  ) {}

  ngOnInit() {
    this.isLogin = this.login.isLogin;
    if (!this.isLogin) {
      this.router.navigate(['/login']);
    }
  }

  ionViewDidEnter() {
    this.profilIn();
    this.LeftFade();
    this.rightFade();
  }

  profilIn() {
    const avatarElement = document.querySelector('#myAvatar') as HTMLElement;
    const animation = this.animationCtrl
      .create()
      .addElement(avatarElement)
      .duration(1000)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'rotateY(360deg) scale(1)', opacity: '0' },
        { offset: 0.3, transform: 'rotateY(0deg) scale(1.2)', opacity: '1' },
        { offset: 0.5, transform: 'rotateY(0deg) scale(1.2)', opacity: '1' },
        { offset: 0.7, transform: 'rotateY(0deg) scale(1)', opacity: '1' },
      ]);
    animation.fill('forwards').play();
  }

  LeftFade() {
    const avatarElement = document.querySelector('#infoProfil') as HTMLElement;
    const animation = this.animationCtrl
      .create()
      .addElement(avatarElement)
      .duration(300)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'translate(-30px, 0px)', opacity: '0' },
        { offset: 0.5, transform: 'translate(-15px, 0px)', opacity: '1' },
        { offset: 1, transform: 'translate(0px, 0px)', opacity: '1' },
      ]);
    animation.fill('forwards').play();
  }

  rightFade() {
    const avatarElement = document.querySelector('#infoPribadi') as HTMLElement;
    const animation = this.animationCtrl
      .create()
      .addElement(avatarElement)
      .duration(300)
      .iterations(1)
      .keyframes([
        { offset: 0, transform: 'translate(30px, 0px)', opacity: '0' },
        { offset: 0.5, transform: 'translate(15px, 0px)', opacity: '1' },
        { offset: 1, transform: 'translate(0px, 0px)', opacity: '1' },
      ]);
    animation.fill('forwards').play();
  }
}
