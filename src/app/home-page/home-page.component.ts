import { ConfirmationService } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';
import { ElderUserService } from '../elder-user.service';
import { LoadingComponent } from '../loading/loading.component'
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [ConfirmationService]
})
export class HomePageComponent implements OnInit {

  constructor(private elderUserService: ElderUserService, private confirmationService: ConfirmationService) { }

  // Initial value
  private elderUserDatas = [];
  isLoaded = false;
  msgs: Message[] = [];
  // ============================================

  setFullName(): void {
    if (this.elderUserDatas.length > 0) {
      this.elderUserDatas.forEach(function (userItem, userIndex) {
        userItem.fullName = userItem.title + ' ' + userItem.firstName + '  ' + userItem.lastName;
      });
    } else {
      this.elderUserDatas = [];
    }
    this.isLoaded = true;
    console.log(this.elderUserDatas);
  }

  confirmDeleteDialog(idNumber) {
    this.confirmationService.confirm({
      message: 'ยืนยันการลบช้อมูล',
      accept: () => {
        //Actual logic to perform a confirmation
        // console.log(userData);
        this.deleteUser(idNumber);
      }
    });
  }

  deleteUser(userData) {
    this.elderUserService.deleteUserByIDNumber(userData.idNumber).subscribe(
      (data) => console.log(data),
      (error) => console.log(error),
      () => {
        this.showSuccessMsg(userData.fullName);
        this.queryUser();
      }
    )
  }

  queryUser() {
    this.isLoaded = false;
    this.elderUserService.getElderAllUser().subscribe(
      (data) => this.elderUserDatas = data.data,
      (error) => console.log(error),
      () => this.setFullName()
    )
  }

  showSuccessMsg(msg) {
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'ทำรายการสำเร็จ', detail: 'ลบข้อมูลผู้สูงอายุ ' + msg + ' เรียบร้อย' });
    // setTimeout(() => {
    //   this.msgs = [];
    // }, 1000);
  }

  hide() {
    this.msgs = [];
  }

  ngOnInit() {
    this.queryUser();

  }



}
