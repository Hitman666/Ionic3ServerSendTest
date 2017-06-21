import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http'; //https://stackoverflow.com/questions/43609853/angular-4-and-ionic-3-no-provider-for-http

@Component({
 	selector: 'page-home',
  	templateUrl: 'home.html'
})

export class HomePage {
    data:any = {};

    constructor(public navCtrl: NavController, public http: Http) {
        this.data.username = '';
        this.data.response = '';

        this.http = http;
 	}

	 submit() {
        var link = 'http://nikola-breznjak.com/_testings/ionicPHP/api.php';
        var myData = JSON.stringify({username: this.data.username});
        
        this.http.post(link, myData)
        .subscribe(data => {
        	this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
        }, error => {
            console.log("Oooops!");
        });
  }
}
