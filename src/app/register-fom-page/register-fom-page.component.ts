import { Component, OnInit } from '@angular/core';
import { ElderUserService } from '../elder-user.service';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-register-fom-page',
  templateUrl: './register-fom-page.component.html',
  styleUrls: ['./register-fom-page.component.css'],
  providers: [ConfirmationService]
})

export class RegisterFomPageComponent implements OnInit {

  // Initial variable
  data = { 
    'idNumber': '',
    'title': '',
    'firstName': '',
    'lastName': '',
    'age': '',
    'acceptDate': '',
    'acceptTime': '',
    'homeName': '',
    'homeOther': '',
    'relative': {
        'relativeType': '',
        'title': '',
        'firstName': '',
        'lastName': '',
        'contractAddress': '',
        'relation': '',
        'tel': '',
        'organizationName': '',
        'organizationTel': ''
    },
    'information': {
        'gender': '',
        'ethnicity': '',
        'religion': '',
        'status': '',
        'education': '',
        'career': '',
        'salary': '',
        'medicalPrivilege': '',
        'universalHealthInsuranceCardNo': '',
        'personality': [],
        'selfHelp': '',
        'issue': []
    },
    'address': {
            'oldAddress': {
                'no': '',
                'moo': '',
                'soi': '',
                'road': '',
                'subDistrict': '',
                'district': '',
                'province': '',
                'zipCode': ''
                
            },
            'currentAddress': {
                'no': '',
                'moo': '',
                'soi': '',
                'road': '',
                'subDistrict': '',
                'district': '',
                'province': '',
                'zipCode': ''
            }
    }
  };

  oldAddress = {'no': '','moo': '','soi': '','road': '','subDistrict': '','district': '','province': '','zipcode': ''};
  currentAddress = {'no': '','moo': '','soi': '','road': '','subDistrict': '','district': '','province': '','zipcode': ''};
  personality = {'face': '', 'skin': '', 'body': '', 'mole': '', 'stigma': '', 'tattoo': '', 'scar': '', 'speak': '', 'stance': '', 'handicap': ''};
  
  titles = [
    {'code': 'Mr','desc': 'นาย'},
    {'code': 'Ms','desc': 'นาง'},
    {'code': 'Mrs','desc': 'นางสาว'}
  ];

  dataForSubmit = {};

  elderUser = [];

  // ============================================================

  constructor(private elderUserService : ElderUserService) { }

  ngOnInit() {
  }

  test (value) {
    console.log(value);
  }

  userSameOldAddress (isUserSameOldAddress) {
    if (isUserSameOldAddress) {
        this.data.address.currentAddress = Object.assign({}, this.data.address.oldAddress)
    } else {
        this.data.address.currentAddress = {'no': '','moo': '','soi': '','road': '','subDistrict': '','district': '','province': '','zipCode': ''};
    };
  };

  getUser() {
    this.elderUserService
      .getElderAllUser().subscribe(
                 (data) => this.elderUser = data,
                 (error) => console.log(error),
                 () => console.log(this.elderUser)
               );
  };

  addNewUser() {
      this.dataForSubmit = {
              'idNumber': this.data.idNumber,
              'title': this.data.title,
              'firstName': this.data.firstName,
              'lastName': this.data.lastName,
              'age': this.data.age,
              'acceptDate': this.data.acceptDate,
              'acceptTime': this.data.acceptTime,
              'homeName': this.data.homeName == 'other' ? this.data.homeOther : this.data.homeName,
              'relative': {
                  'relativeType': '',
                  'title': this.data.relative.title,
                  'firstName': this.data.relative.firstName,
                  'lastName': this.data.relative.lastName,
                  'contractAddress': this.data.relative.contractAddress,
                  'relation': this.data.relative.relation,
                  'tel': this.data.relative.tel,
                  'organizationName': this.data.relative.organizationName,
                  'organizationTel': this.data.relative.organizationTel,
              },
              'information': {
                  'gender': this.data.information.gender,
                  'ethnicity': this.data.information.ethnicity,
                  'religion': this.data.information.religion,
                  'status': this.data.information.status,
                  'education': this.data.information.education,
                  'career': this.data.information.career,
                  'salary': this.data.information.salary,
                  'medicalPrivilege': this.data.information.medicalPrivilege == 'บัตรประกันสุขภาพถ้วนหน้า เลขที่' ? this.data.information.medicalPrivilege + ' ' + this.data.information.universalHealthInsuranceCardNo : this.data.information.medicalPrivilege,
                  'universalHealthInsuranceCardNo': this.data.information.universalHealthInsuranceCardNo,
                  'personality': [],
                  'selfHelp': this.data.information.selfHelp,
                  'issue': []
                  },
              'address': [
                  {
                      'oldAddress': {
                          'no': this.data.address.oldAddress.no,
                          'moo': this.data.address.oldAddress.moo,
                          'soi': this.data.address.oldAddress.soi,
                          'road': this.data.address.oldAddress.road,
                          'subDistrict': this.data.address.oldAddress.subDistrict,
                          'district': this.data.address.oldAddress.district,
                          'province': this.data.address.oldAddress.province,
                          'zipCode': this.data.address.oldAddress.zipCode
                      }
                  },
                  {
                      'currentAddress': {
                          'no': this.data.address.currentAddress.no,
                          'moo': this.data.address.currentAddress.moo,
                          'soi': this.data.address.currentAddress.soi,
                          'road': this.data.address.currentAddress.road,
                          'subDistrict': this.data.address.currentAddress.subDistrict,
                          'district': this.data.address.currentAddress.district,
                          'province': this.data.address.currentAddress.province,
                          'zipCode': this.data.address.currentAddress.zipCode
                      }
                  }
              ]
      };

    this.elderUserService.createUser(this.dataForSubmit).subscribe(
        (result) => console.log(result),
        (error) => console.log(error),
        // () => 
    );

      console.log(this.dataForSubmit);
  };

      
}
