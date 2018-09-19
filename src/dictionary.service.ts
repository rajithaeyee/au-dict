import { HttpClient, json } from 'aurelia-fetch-client';
import { autoinject } from 'aurelia-framework';

@autoinject
export class DictionaryService {
  constructor(private http:HttpClient){
  }
  async getDefinitions(sk:string){
   let result =  await this.http.fetch('https://owlbot.info/api/v2/dictionary/'+sk);
   return result.json();
  }
}