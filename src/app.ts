import { autoinject } from 'aurelia-framework';
import { Def } from './def';
import { DictionaryService } from './dictionary.service';


@autoinject
export class App {
  flag = false;
  entries: Def[] = [];
  searchKey = "";
  constructor(private dictService: DictionaryService) { }
  async search() {
    this.searchKey = this.searchKey.toLowerCase();
    console.log("You searched for", this.searchKey);
    let res = await this.dictService.getDefinitions(this.searchKey);
    this.entries = res;
    if (this.entries) {
      this.flag = true;
    }
  }
}





