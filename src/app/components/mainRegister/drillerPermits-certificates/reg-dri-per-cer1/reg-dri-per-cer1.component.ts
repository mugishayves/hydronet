import { Component } from '@angular/core';
import { UploadFileComponent } from '../../../upload-file/upload-file.component';

@Component({
  selector: 'reg-dri-per-cer1',
  standalone: true,
  imports: [UploadFileComponent],
  template: `
    <div class="p-5 h-full overflow-y-auto">
      <div class="flex items-center justify-center">
        <img src="../../../assets/companyRegProgress1.png" alt="" />
      </div>
      <div class="bg-white p-2 rounded-md my-4  ">
        <div class="flex gap-5 rounded-md  p-4 ">
          <div class="w-[50%] shadow-md  bg-white p-4 rounded-md">
            <p class="text-[#121212] text-lg font-bold">
              Manage Your Registration easily with a Hydronet Driller Account
            </p>
            <p class="text-[#121212] text-[11px]">
              <a href="" class="text-[#39B6CC]">Login</a> If you have an Account
              with us or Complete the SIgnup Process to continue wit your
              Registration
            </p>
            <div class="flex justify-end my-2">
              <button
                class="bg-[#39B6CC] text-white px-4 py-2 rounded-lg text-sm"
              >
                Add more
              </button>
            </div>
            <form>
              <div class="mt-4">
                <select
                  class="px-5 py-2  bg-inherit outline-none border-b-[#121212] border-b  "
                >
                  <option value="">Select your company category</option>
                  <option value="">Select your company category</option>
                  <option value="">Select your company category</option>
                </select>
                <div class="flex gap-2 items-center my-2 w-[50%]">
                  <input type="checkbox" name="" id="" />
                  <p class="text-[14px] text-[#121212]">
                    It’s Government Authority
                  </p>
                </div>
                <div class="my-2">
                  <p class="text-[#8E8E8E] text-[13px]">
                    Attach a scan copy, file should not exceed 2MB
                  </p>
                  <div class="w-[60%]">
                    <app-upload-file />
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <select
                  class="px-5 py-2  bg-inherit outline-none border-b-[#121212] border-b  "
                >
                  <option value="">Select your company category</option>
                  <option value="">Select your company category</option>
                  <option value="">Select your company category</option>
                </select>
                <div class="flex gap-2 items-center my-2 w-[50%]">
                  <input type="checkbox" name="" id="" />
                  <p class="text-[14px] text-[#121212]">
                    It’s Government Authority
                  </p>
                </div>
                <div class="my-2">
                  <p class="text-[#8E8E8E] text-[13px]">
                    Attach a scan copy, file should not exceed 2MB
                  </p>
                  <div class="w-[60%]">
                    <app-upload-file />
                  </div>
                </div>
              </div>
              <div class="flex gap-2 items-center my-2">
                <input type="checkbox" name="" id="" />
                <p class="text-[14px] text-[#121212]">
                  I certify to providing correct and authentic information
                </p>
              </div>

              <div class="text-[#525967] text-sm my-2">
                Curating and advising outstanding impact projects is our bread
                and butter- and it's also a lot of work 😅. Every listing on
                this site is copy written, edited, and curated by our internal
                team. We also produce and edit most project videos for our small
                <p class="text-[#9ABAAD]">more...</p>
              </div>
            </form>
          </div>
          <div class="w-[50%] h-full">
            <div class="h-fit my-2">
              <p class="text-[#043924] text-[20px] font-bold my-2"></p>
              <div class="flex gap-3 h-full">
                <div class="h-full w-[30%]"></div>
                <div class="h-[150px] w-1 bg-[#148A92]"></div>
                <div class="flex flex-col justify-between">
                  <div>
                    <p class="text-[#596574] text-sm my-1">Total Renewals 6</p>
                    <div class="flex items-center gap-2 my-1">
                      <p class="text-[#596574] text-sm">License Expiry Date</p>
                      <div
                        class="px-2 bg-[#F36262] font-bold text-sm text-white rounded-full"
                      >
                        12th Feburary 2024
                      </div>
                    </div>
                    <div class="flex items-center gap-2 my-1">
                      <p class="text-[#596574] text-sm">Location rating</p>
                      <div class="flex gap-2">
                        <img src="../../../assets/star.svg" alt="" />
                        <img src="../../../assets/star.svg" alt="" />
                        <img src="../../../assets/star.svg" alt="" />
                        <img src="../../../assets/star.svg" alt="" />
                        <img src="../../../assets/star.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-end w-full mb-3">
                    <button
                      class="bg-[#148A92] px-4 py-1 rounded-md text-white text-[13px] font-bold"
                    >
                      Renew License
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <input
              type="submit"
              value="Next"
              class="text-white bg-[#0CB9DE] w-full py-2 rounded-xl font-bold my-2"
            />
          </div>
        </div>
      </div>
    </div>
  `,
})
export class RegDriPerCer1Component {}
