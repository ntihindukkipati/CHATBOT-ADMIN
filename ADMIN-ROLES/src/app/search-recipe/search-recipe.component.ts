import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";

declare const responsiveVoice: any;

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  // @ts-ignore
  @ViewChild('recipe') recipes: ElementRef;
  // @ts-ignore
  @ViewChild('place') places: ElementRef;
  recipeValue: any;
  placeValue: any;
  venueList = [];
  recipeList = [];
  nutritionValue: any;
  audioText: any;


  currentLat: any;
  currentLong: any;
  geolocationPosition: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
      })
  }

  getVenues() {

    this.recipeValue = this.recipes.nativeElement.value;
    this.placeValue = this.places.nativeElement.value;

    if(this.recipeValue !== null) {
      this.http.get('https://api.edamam.com/search?q=' + this.recipeValue + '&app_id=7a86d517&app_key=8928ec8d349b8138d340dd196456e889&from=0&to=3')
        .subscribe((data: any)=>{
          for (var i = 0; i < data.hits.length; i++) {
            this.recipeList[i] = {
              "name": data.hits[i].recipe.label,
              "url": data.hits[i].recipe.url,
              "icon": data.hits[i].recipe.image
            };
            console.log(data);

          }
        });
    }

    if(this.recipeValue !== null) {
      this.http.get('https://api.nutritionix.com/v1_1/search/' + this.recipeValue + '?results=0:1&fields=*&appId=716e3914&appKey=7d1313180863210ce537edcf493d9d4f')
        .subscribe((data: any) => {
          this.nutritionValue = data;
          console.log('nutrition');
          console.log(data);
          console.log('end');
          this.audioText="If you are serving "+this.recipeValue+" in "+this.nutritionValue.hits[0].fields.nf_serving_weight_grams+" grams then you will get "+this.nutritionValue.hits[0].fields.nf_calories+" calories";
          console.log(this.audioText);
          responsiveVoice.speak(this.audioText);

        })
    }


    if (this.placeValue != null && this.placeValue != "" && this.recipeValue != null && this.recipeValue != "") {
      this.http.get("https://api.foursquare.com/v2/venues/search" +
        "?client_id=3PPNMTIKJJNDVYPFOBGSHHV2PR5A2P05PYHXDN2MKSKTTBSX" +
        "&client_secret=0QPHT0F5RS043F4TB4KKPQSHKSAXKE5ZNOYGB5KL2MBDYAG4" +
        "&v=20160215&limit=5" +
        "&near=" + this.placeValue +
        "&query=" + this.recipeValue)
        .subscribe((data: any) => {
          for (var i = 0; i < data.response.venues.length; i++) {
            this.venueList[i] = {
              "name": data.response.venues[i].name,
              "id": data.response.venues[i].id,
              "location": data.response.venues[i].location
            };
            console.log(this.venueList[i]);

          }

        })
    }
  }
}
