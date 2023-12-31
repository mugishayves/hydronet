import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrefferedSponsoredChoice } from '../../interfaces/preffered-sponsored-choice';
import { PrefferedSponsoredChoiceComponent } from '../../components/preffered-sponsored-choice/preffered-sponsored-choice.component';
import { LicenseBoxProps } from '../../interfaces/license-box-props';
import { LicenseBoxComponent } from '../../components/license-box/license-box.component';
import { DrillerLicenseComponent } from '../../components/driller-license/driller-license.component';
import { DrillerLicenseProps } from '../../interfaces/driller-license-props';
import { DrillerLicenseListComponent } from '../../components/driller-license-list/driller-license-list.component';
import { FeaturedBoxComponent } from '../../components/featured-box/featured-box.component';
import { FeaturedCarouselComponent } from '../../components/featured-carousel/featured-carousel.component';

@Component({
  selector: 'app-validate-drill-search-results',
  standalone: true,
  imports: [
    CommonModule,
    PrefferedSponsoredChoiceComponent,
    DrillerLicenseComponent,
    DrillerLicenseListComponent,
    FeaturedBoxComponent,
    FeaturedCarouselComponent,
  ],
  template: `
    <div>
      <div class="bg-[#E7F4F5]">
        <div class="flex gap-3 items-center bg-[#BEE8EB] px-8 py-2">
          <p class="text-xl lg:text-2xl text-[#46777B]">Search Result |</p>
          <p class="text-xl lg:text-2xl text-[#46777B]">153</p>
          <p class="text-base text-[#46777B]">Results Found</p>
        </div>
        <div class="bg-white rounded-md p-4 border shadow-sm m-2">
          <div class="px-10 py-2 bg-[#E7F4F5] w-fit rounded-md">
            <p class="text-[#121212] text-[20px] font-bold">Featured</p>
          </div>
          <div class="">
            <app-featured-carousel [licenses]="slides" />
          </div>
        </div>
        <div class="bg-white rounded-md p-4 border shadow-sm m-2">
          <div class="flex flex-col sm:flex-row gap-1 justify-between ">
            <div class="flex gap-2 items-center">
              <img src="../../../assets/filter.svg" alt="" class="w-5 h-5" />
              <select
                class="border-[#0CB9DE] border outline-none text-[#0CB9DE] px-2 py-1 rounded-full bg-white"
              >
                <option value="">Victoria Island</option>
                <option value="">Victoria Island</option>
                <option value="">Victoria Island</option>
                <option value="">Victoria Island</option>
              </select>
              <select
                class="border-[#0CB9DE] border outline-none text-[#0CB9DE] px-2 py-1 rounded-full bg-white"
              >
                <option value="">Location</option>
                <option value="">Location</option>
                <option value="">Location</option>
                <option value="">Location</option>
              </select>
            </div>
            <div
              class="border-[#63CCD3] border-2 rounded-full hidden  sm:flex  dm items-center  "
            >
              <div
                *ngIf="displayWay == 'list'; else notList"
                class="flex gap-2 items-center rounded-full   h-full px-2 py-1 bg-[#0CB9DE]"
              >
                <img
                  src="../../../assets/showListSel.svg"
                  alt=""
                  class="w-5 h-5"
                />
              </div>
              <ng-template #notList>
                <button
                  (click)="changeDisplayWay('list')"
                  class="flex gap-2 items-center rounded-full text-white bg-white px-2 py-1 h-full"
                >
                  <img
                    src="../../../assets/showList.svg"
                    alt=""
                    class="w-5 h-5"
                  />
                </button>
              </ng-template>
              <div
                *ngIf="displayWay == 'grid'; else notGrid"
                class="flex gap-2 items-center rounded-full  bg-[#0CB9DE] px-2 py-1 h-full"
              >
                <img
                  src="../../../assets/showGridSel.svg"
                  alt=""
                  class="w-5 h-5"
                />
              </div>
              <ng-template #notGrid>
                <button
                  (click)="changeDisplayWay('grid')"
                  class="flex gap-2 items-center rounded-full text-white bg-white]  px-2 py-1 h-full"
                >
                  <img
                    src="../../../assets/showGrid.svg"
                    alt=""
                    class="w-5 h-5"
                  />
                </button>
              </ng-template>
            </div>
          </div>
          <div class="hidden sm:block">
            <div
              *ngIf="displayWay == 'grid'; else notGridList"
              class="grid grid-cols-2 gap-2"
            >
              <app-driller-license
                *ngFor="let choi of licenseBoxList"
                [oneChoice]="choi"
              />
            </div>
            <ng-template #notGridList>
              <div class="grid grid-cols-1 gap-2">
                <app-driller-license-list
                  *ngFor="let choi of licenseBoxList"
                  [oneChoice]="choi"
                />
              </div>
            </ng-template>
          </div>
          <div class="grid  sm:hidden grid-cols-1 gap-2">
            <app-driller-license-list
              *ngFor="let choi of licenseBoxList"
              [oneChoice]="choi"
            />
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ValidateDrillSearchResultsComponent {
  displayWay: 'grid' | 'list';
  constructor() {
    this.displayWay = 'list';
  }
  changeDisplayWay(way: 'grid' | 'list') {
    this.displayWay = way;
  }
  slides = [
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      levels: [60, 70, 20, 40],
      subtitle: 'Subtitle 1',
      body: 'Description of License 1. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 2',
      levels: [80, 50, 30, 60],
      subtitle: 'Subtitle 2',
      body: 'Description of License 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 3',
      levels: [40, 60, 80, 20],
      subtitle: 'Subtitle 3',
      body: 'Description of License 3. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 4',
      levels: [90, 30, 50, 70],
      subtitle: 'Subtitle 4',
      body: 'Description of License 4. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 5',
      levels: [50, 80, 40, 90],
      subtitle: 'Subtitle 5',
      body: 'Description of License 5. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
  licenseBoxList: DrillerLicenseProps[] = [
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      levels: [60, 70, 20, 40],
      subtitle: 'fasdfasdfasdf',
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      levels: [60, 70, 20, 40],
      subtitle: 'fasdfasdfasdf',
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      levels: [60, 70, 20, 40],
      subtitle: 'fasdfasdfasdf',
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      levels: [60, 70, 20, 40],
      subtitle: 'fasdfasdfasdf',
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      levels: [60, 70, 20, 40],
      subtitle: 'fasdfasdfasdf',
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      levels: [60, 70, 20, 40],
      subtitle: 'fasdfasdfasdf',
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      levels: [60, 70, 20, 40],
      subtitle: 'fasdfasdfasdf',
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      levels: [60, 70, 20, 40],
      subtitle: 'fasdfasdfasdf',
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      levels: [60, 70, 20, 40],
      subtitle: 'fasdfasdfasdf',
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      levels: [60, 70, 20, 40],
      subtitle: 'fasdfasdfasdf',
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      levels: [60, 70, 20, 40],
      subtitle: 'fasdfasdfasdf',
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      levels: [60, 70, 20, 40],
      subtitle: 'fasdfasdfasdf',
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
  ];
  featured: DrillerLicenseProps[] = [
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      levels: [60, 70, 20, 40],
      subtitle: 'fasdfasdfasdf',
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      levels: [60, 70, 20, 40],
      subtitle: 'fasdfasdfasdf',
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      levels: [60, 70, 20, 40],
      subtitle: 'fasdfasdfasdf',
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      levels: [60, 70, 20, 40],
      subtitle: 'fasdfasdfasdf',
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
    {
      image: '../../../assets/licenseImage.png',
      title: 'License 1',
      levels: [60, 70, 20, 40],
      subtitle: 'fasdfasdfasdf',
      body: 'Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua Description of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaDescription of License 1.Sed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliquaSed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    },
  ];
}
