import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})

export class SearchFormComponent implements OnInit {

  private artist : string;
  private url = {
    itunes : "https://itunes.apple.com",
    deezer : "https://cors-anywhere.herokuapp.com/https://api.deezer.com"
  }

  private data = {
    itunes : { },
    deezer : { }
  }

  // constructor(private http : HttpClient) { }

  async getJson() {
    try {
      await this.http.get(this.url.itunes + "/search?term=" + this.artist + "&entity=album")
        .subscribe(responseList => {
          this.itunes = responseList;  
      });
      await this.http.get(this.url.deezer + "/search/album?q=" + this.artist)
        .subscribe(responseList => {
          this.deezer = responseList;
    });

      // this.data.itunes = itunes;
      // this.data.deezer = deezer;
      // console.log(itunes)

    } catch(e) {
        console.log(e);
    }

  }

 search(artist) {
   this.artist = artist.value;
    this.getJson();
    // search_album.set_json().then(function() {
    //   search_album.itunes();
    //   search_album.deezer();
    // });
  }

  ngOnInit() {
  }
}

// export class albums {
  


//   async getJson() {
//     try {
//       await this.http.get(this.url.itunes + "/search?term=" + this.artist + "&entity=album")
//         .subscribe(responseList => {
//           this.data.itunes = responseList;  
//       });
//       await this.http.get(this.url.deezer + "/search/album?q=" + this.artist)
//         .subscribe(responseList => {
//           this.data.deezer = responseList;
//     });

//       // this.data.itunes = itunes;
//       // this.data.deezer = deezer;
//       // console.log(itunes)

//     } catch(e) {
//         console.log(e);
//     }

//   }

//   get_json(): Observable<any[]> {
//     const itunes = this.http.get(this.url.itunes + "/search?term=" + this.artist + "&entity=album");
//     const deezer = this.http.get(this.url.deezer + "/search/album?q=" + this.artist);
//     return forkJoin([itunes, deezer]);
//   }
//   set_json(){
//     let self = this;
//     return new Promise((res, rej) => {
//         self.get_json().subscribe(responseList => {
//         this.data.itunes = responseList[0];
//         this.data.deezer = responseList[1];
//         res()
//       });
//     });
//   }

//   itunes() {
//     console.log(this.data.itunes)
//     // this.data.itunes.results.map(cur => {
//     //   this.draw(this.result_field.itunes, cur.collectionViewUrl, cur.collectionName)
//     // });
//   }
//   deezer() {
//     console.log(this.data.deezer)   
//     // this.data.deezer.data.map(cur => {
//     //   this.draw(this.result_field.deezer, cur.cover, cur.title)
//     // })
//   }
//   // draw(parent, img, title) {
//   //   let data = `<div><img src='${img}'><p>${title}</p></div>`
//   //   parent.insertAdjacentHTML(data)
//   //   console.log(data);
//   // }
// }