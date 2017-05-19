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
    'age': 0,
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
    'address': [
        {
            'oldAddress': 
              {
                'no': 0,
                'moo': 0,
                'soi': '',
                'road': '',
                'subDistrict': '',
                'district': '',
                'province': '',
                'zipCode': ''
              }
        },
        {
            'currentAddress': 
              {
                'no': 0,
                'moo': 0,
                'soi': '',
                'road': '',
                'subDistrict': '',
                'district': '',
                'province': '',
                'zipCode': ''
              }
        }
    ]

  };

  oldAddress = {'no': '','moo': '','soi': '','road': '','subDistrict': '','district': '','province': '','zipcode': ''};
  currentAddress = {'no': '','moo': '','soi': '','road': '','subDistrict': '','district': '','province': '','zipcode': ''};
  personality = {'face': '', 'skin': '', 'body': '', 'mole': '', 'stigma': '', 'tattoo': '', 'scar': '', 'speak': '', 'stance': '', 'handicap': ''}
  titles = [
    {'code': 'Mr','desc': 'นาย'},
    {'code': 'Ms','desc': 'นาง'},
    {'code': 'Mrs','desc': 'นางสาว'}
  ];
  gender = '';

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
        this.currentAddress = Object.assign({}, this.oldAddress)
    } else {
        this.currentAddress = {'no': '','moo': '','soi': '','road': '','subDistrict': '','district': '','province': '','zipcode': ''};
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
                  'gender': this.gender,
                  'ethnicity': '',
                  'religion': '',
                  'status': '',
                  'education': '',
                  'career': '',
                  'salary': '',
                  'medicalPrivilege': '',
                  'universalHealthInsuranceCardNo': '',
                  'personality': [],
                  'selfHelp': 'String',
                  'issue': []
                  },
              'address': [
                  {
                      'oldAddress': {
                          'no': 0,
                          'moo': 0,
                          'soi': '',
                          'road': '',
                          'subDistrict': '',
                          'district': '',
                          'province': '',
                          'zipCode': ''
                      }
                  },
                  {
                      'currentAddress': {
                          'no': 0,
                          'moo': 0,
                          'soi': '',
                          'road': '',
                          'subDistrict': '',
                          'district': '',
                          'province': '',
                          'zipCode': ''
                      }
                  }
              ]
      };
      
      console.log(this.dataForSubmit);
  };

      
}
