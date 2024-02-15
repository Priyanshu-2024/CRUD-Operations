import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  carArr: any[] = [];

  car: any = {
    sr: 0,
    brand: '',
    model: '',
    showroom: '',
    dealer: '',
  };
  ngOnInit(): void {
    const localdata = localStorage.getItem('car');
    if (localdata != null) {
      this.carArr = JSON.parse(localdata);
    }
  }
  onedit(car1: any) {
    this.car = car1;
  }

  adddata(data: any) {
    this.car.sr = this.carArr.length + 1;
    this.carArr.push(this.car);
    localStorage.setItem('car', JSON.stringify(this.carArr));
    this.car = {
      sr: 0,
      brand: '',
      model: '',
      showroom: '',
      dealer: '',
    };
  }
  updatedata() {
    const record = this.carArr.find((m) => m.sr == this.car.sr);
    record.brand = this.car.brand;
    record.model = this.car.model;
    record.showroom = this.car.showroom;
    record.dealer = this.car.dealer;
    localStorage.setItem('car', JSON.stringify(this.carArr));
    this.car = {
      sr: 0,
      brand: '',
      model: '',
      showroom: '',
      dealer: '',
    };
  }
  deletedata(id: number) {
    for (let i = 0; i < this.carArr.length; i++) {
      if (this.carArr[i].sr == id) {
        this.carArr.splice(i, 1);
      }
    }
    localStorage.setItem('car', JSON.stringify(this.carArr));
  }

  click() {
    this.car = {
      sr: 0,
      brand: '',
      model: '',
      showroom: '',
      dealer: '',
    };
  }
  onclick() {
    this.car = {
      sr: 0,
      brand: '',
      model: '',
      showroom: '',
      dealer: '',
    };
  }
}
