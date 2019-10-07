import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-g-dashboard',
  templateUrl: './g-dashboard.component.html',
  styleUrls: ['./g-dashboard.component.css']
})
export class GDashboardComponent implements OnInit {
  @ViewChild('orgName', {static: false}) orgName: ElementRef;
  @ViewChild('city', {static: false}) city: ElementRef;
  @ViewChild('state', {static: false}) state: ElementRef;
  @ViewChild('zip', {static: false}) zip: ElementRef;
  @ViewChild('dorgName', {static: false}) dorgName: ElementRef;
  addShown: boolean = false;
  editShown: boolean = false;
  delShown: boolean = false;
  showOrg: boolean = false;
  showButton: boolean = true;
  oName: any;
  delOrgName: any;
  ocity: any;
  ostate: any;
  ozip: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  showAddOrg() {
    this.addShown = ! this.addShown;
    this.editShown = false;
    this.delShown = false;
  }
  showEditOrg() {
    this.editShown = ! this.editShown;
    this.addShown = false;
    this.delShown = false;
  }
  showDelOrg() {
    this.delShown = ! this.delShown;
    this.editShown = false;
    this.addShown = false;
  }
  addOrg() {
    this.oName = this.orgName.nativeElement.value;
    this.ocity = this.city.nativeElement.value;
    this.ostate = this.state.nativeElement.value;
    this.ozip = this.zip.nativeElement.value;
    if (this.oName.length <= 0 || this.ocity.length <= 0 || this.ostate.length <= 0 || this.ozip.length <= 0 ) {
      alert('Please fill all the fields');
    } else {
      console.log('orgName:' + this.oName);
      alert('item added successfully');
    }
  }

  editOrg() {
    this.showOrg = ! this.showOrg;
    this.showButton = false;
  }

  saveOrganisation() {
    alert("Organisation saved successfully");
    this.showOrg = false;
    this.showButton = true;
  }

  delOrg() {
    this.delOrgName = this.dorgName.nativeElement.value;
    console.log('to be deleted' + this.delOrgName);
    alert('Deleted Successfully');
  }

}
