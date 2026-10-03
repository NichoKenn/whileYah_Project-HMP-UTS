import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-pengaturan',
  templateUrl: './pengaturan.page.html',
  styleUrls: ['./pengaturan.page.scss'],
  standalone: false,
})
export class PengaturanPage implements OnInit {
  isDarkMode = false;
  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {
    this.isDarkMode = document.body.classList.contains('dark');
  }

  gantiTema(event: any) {
    const isChecked = event.detail.checked;
    const bodyElement = document.body;
    const animation = this.animationCtrl
      .create()
      .addElement(bodyElement)
      .duration(400)
      .keyframes([
        { offset: 0, opacity: '1' },
        { offset: 0.5, opacity: '0.4' },
        { offset: 1, opacity: '1' },
      ]);
    animation.play();

    setTimeout(() => {
      if (isChecked) {
        bodyElement.classList.remove('light');
        bodyElement.classList.add('dark');
      } else {
        bodyElement.classList.remove('dark');
        bodyElement.classList.add('light');
      }
    }, 150);
  }
}
