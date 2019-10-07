import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-l-dashboard',
  templateUrl: './l-dashboard.component.html',
  styleUrls: ['./l-dashboard.component.css']
})
export class LDashboardComponent implements OnInit {

  @ViewChild('prof', {static: false}) prof: ElementRef;
  @ViewChild('address', {static: false}) address: ElementRef;
  @ViewChild('phone', {static: false}) phone: ElementRef;
  @ViewChild('email', {static: false}) email: ElementRef;
  @ViewChild('dProfName', {static: false}) dProfName: ElementRef;
  @ViewChild('eqSet', {static: false}) eqSet: ElementRef;
  @ViewChild('q1', {static: false}) q1: ElementRef;
  @ViewChild('q2', {static: false}) q2: ElementRef;
  @ViewChild('q3', {static: false}) q3: ElementRef;
  @ViewChild('q4', {static: false}) q4: ElementRef;
  @ViewChild('q5', {static: false}) q5: ElementRef;
  @ViewChild('dqSet', {static: false}) dqSet: ElementRef;
  addShown: boolean = false;
  editShown: boolean = false;
  qaddShown: boolean = false;
  qeditShown: boolean = false;
  delQShown: boolean = false;
  delShown: boolean = false;
  showEditButton: boolean = true;
  questionShow: boolean = false;
  showProfDet: boolean = false;
  buttonShow: boolean = true;
  showProfOptions: boolean = false;
  showQuesOptions: boolean = false;
  aEmail: any;
  delProfName: any;
  aProf: any;
  aAddress: any;
  aPhone: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showAddProf() {
    this.addShown = ! this.addShown;
    this.editShown = false;
    this.delShown = false;
  }
  showEditProf() {
    this.editShown = ! this.editShown;
    this.addShown = false;
    this.delShown = false;
  }
  showDelProf() {
    this.delShown = ! this.delShown;
    this.editShown = false;
    this.addShown = false;
  }
  addProf() {
    this.aProf = this.prof.nativeElement.value;
    this.aAddress = this.address.nativeElement.value;
    this.aEmail = this.email.nativeElement.value;
    this.aPhone = this.phone.nativeElement.value;
    if (this.aProf.length <= 0 || this.aAddress.length <= 0 || this.aEmail.length <= 0 || this.aPhone.length <= 0 ) {
      alert('Please fill all the fields');
    } else {
      console.log('orgName:' + this.aProf);
      alert('Professor added successfully');
    }
  }

  editProf() {
    this.showProfDet = ! this.showProfDet;
    this.showEditButton = false;
  }
  saveProfessor() {
    this.showEditButton = true;
    this.showProfDet = false;
  }

  showProf() {
    this.showProfOptions = ! this.showProfOptions;
    this.showQuesOptions = false;
    this.qeditShown = false;
    this.delQShown = false;
    this.qaddShown = false;
  }

  showQues() {
    this.showQuesOptions = ! this.showQuesOptions;
    this.showProfOptions = false;
    this.editShown = false;
    this.delShown = false;
    this.addShown = false;
  }
  delProf() {
    this.aProf = this.aProf.nativeElement.value;
    console.log('to be deleted' + this.aProf);
    alert('Deleted Successfully');
  }
  showAddQues() {
    this.qaddShown = ! this.qaddShown;
    this.qeditShown = false;
    this.delQShown = false;
  }
  showEditQues() {
    this.qeditShown = ! this.qeditShown;
    this.qaddShown = false;
    this.delQShown = false;
  }
  showDelQues() {
    this.delQShown = ! this.delQShown;
    this.qeditShown = false;
    this.qaddShown = false;
  }
  addQuestions() {
    if (this.eqSet.nativeElement.value.length <= 0 || this.q1.nativeElement.value.length <= 0
    || this.q2.nativeElement.value.length <= 0 || this.q2.nativeElement.value.length <= 0
    || this.q3.nativeElement.value.length <= 0 || this.q4.nativeElement.value.length <= 0 || this.q5.nativeElement.value.length <= 0) {
      alert('Fill all the questions');
    } else {
      alert('Questions added successfully');
    }

  }

  editQuestions() {
    if (this.eqSet.nativeElement.value.length <= 0) {
      alert('Select a question set you want to edit');
    } else {
      this.questionShow = ! this.questionShow;
      this.buttonShow = false;
    }
  }

  saveQuestions() {

  }

  delQuestions() {
    if (this.dqSet.nativeElement.value.length <= 0){
      alert('Select a question set');
    } else {
      alert('Questions under this Question Set deleted successfully');
    }

  }

}
