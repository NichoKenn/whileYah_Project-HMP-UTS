import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pengaturan',
  templateUrl: './pengaturan.page.html',
  styleUrls: ['./pengaturan.page.scss'],
  standalone: false,
})
export class PengaturanPage implements OnInit {
  isDarkMode = false;
  constructor() {}

  ngOnInit() {
    this.isDarkMode = document.body.classList.contains('dark');
  }

  gantiTema(event: any) {
    const isChecked = event.detail.checked;
    if (isChecked) {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    }
  }
}
