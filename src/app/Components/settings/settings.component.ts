import { Component, OnInit, Pipe } from '@angular/core';
import { Observable } from 'rxjs';
import { LocationsService } from 'src/app/Services/locations.service';
import { State } from '../../Interfaces/state';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { City } from 'src/app/Interfaces/city';
import { User } from 'src/app/Interfaces/User';
import { UsersService } from 'src/app/Services/users.service';





@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  
})


export class SettingsComponent implements OnInit {
  newPasswordMatches: boolean ;
  user: User;
  private model: any;
  statesArray = [];
  citiesArray = [];
  constructor(private location: LocationsService, private userServices: UsersService) { }

  ngOnInit() {
    this.newPasswordMatches = true ;
    this.getStates();
    this.getUser();
  }
  getStates() {
    this.location.getUSStates().subscribe((data: State[]) => {
      data.map(state => {
        this.statesArray.push(state.name + ' - ' + state.abbreviation);
      });

    });
  }
  checkPassWordMatch(argPassword , argConfirmPassword){

    this.newPasswordMatches = argPassword === argConfirmPassword;
  }
  getUser() {
    this.user = this.userServices.getUserInformation();
    
  }
  getCities(argState) {

    argState = argState.split('-')[0].trim();

    this.location.getUSCities(argState).subscribe((data: City[]) => {
      data.map((result: City) => {
        this.citiesArray.push(result.city);
      });
    

    });
  }
  searchState = (text$: Observable<string>) =>

    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term, index) => term.length < 2 ? []
        : this.statesArray.filter(v => {
          if (v.toLowerCase().indexOf(term.toLowerCase()) > -1) {

            return v.slice(0, 10);
          }
        })
      ))
  searchCity = (text$: Observable<string>) =>

    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term, index) => term.length < 2 ? []
        : this.citiesArray.filter(v => {
          if (v.toLowerCase().indexOf(term.toLowerCase()) > -1) {

            return v.slice(0, 10);
          }
        })
      ))

}
