import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'project';
  // need to lift enywhere  to another component!
  services: any = [
    {
      id: 1,
      title: 'ЭЭГ',
      image: './assets/images/eeg.jpg',
      alt: 'img-1',
      text: `Каждому водителю требуется данное обследование`,
    },
    {
      id: 2,
      title: 'УЗИ',
      image: './assets/images/ultra.jpg',
      alt: 'img-2',
      text: `Проводим обследование сердца, щитовидной железы, брюшной полости, почек. Консультируем по гинекологии и урологии.`,
    },
    {
      id: 3,
      title: 'Медицинский осмотр',
      image: './assets/images/service-1.png',
      alt: 'img-3',
      text: `Плановый медосмотр а также при поступлении на работу`,
    },
    {
      id: 4,
      title: 'Больничный лист, справки',
      image: './assets/images/bolnichniy-list.jpg',
      alt: 'img-4',
      text: `Выдаем больничные листы, справки, санитарные книжки`,
    },
    {
      id: 5,
      title: 'Терапевт',
      image: './assets/images/general-doctor.jpg',
      alt: 'img-5',
      text: `Консультация терапевта + лечение с выдачей больничного листа`,
    },
    {
      id: 6,
      title: 'Эндокринолог',
      image: './assets/images/endoctynologist.jpg',
      alt: 'img-6',
      text: `Консультация + УЗИ`,
    },
    {
      id: 7,
      title: 'Невролог',
      image: './assets/images/neurolog.jpg',
      alt: 'img-7',
      text: `Полное обследование, лечение + больничный лист`,
    },
    {
      id: 8,
      title: 'ЛОР',
      image: './assets/images/otorynolaringologist.jpg',
      alt: 'img-8',
      text: `Полное обследование (мазки), лечение + больничный лист.`,
    },
    {
      id: 9,
      title: 'Гинеколог',
      image: './assets/images/gynecologyst.jpg',
      alt: 'img-9',
      text: `Полное обследование, лечение + больничный лист, УЗИ`,
    },
    {
      id: 10,
      title: 'Психолог',
      image: './assets/images/psycology.jpg',
      alt: 'img-10',
      text: `Консультация детского и семейного психолога`,
    },
  ];
  serviceCopy = this.services.slice(0, 4);

  extraActivatedNumber!: number | null;
  servicesAreExpended: boolean = false;

  ngOnInit() {
    // console.log(document.documentElement.scrollHeight);
  }

  // ngAfterViewInit(): void {
  //   console.log('1');
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(document.documentElement.scrollHeight);
  // }

  activateExtra(service: any) {
    this.extraActivatedNumber =
      this.extraActivatedNumber == service.id ? -1 : service.id;
  }

  deactivateExtra() {
    this.extraActivatedNumber = -1;
  }

  expandServices() {
    this.serviceCopy = this.services.slice(0, this.services.length);
    this.servicesAreExpended = true;
  }

  shrinkServices() {
    this.serviceCopy = this.services.slice(0, 4);
    this.servicesAreExpended = false;
  }

  goToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
