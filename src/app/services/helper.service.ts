import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  phpDateGMT7( theDate = new Date() ){

    let dateString:any = theDate.getFullYear();
    dateString += '-';
    if( (theDate.getMonth()+1) < 10 ){
      dateString +=  '0' + (theDate.getMonth()+1).toString();
    }
    else{
      dateString += (theDate.getMonth()+1).toString();
    }

    dateString += '-';
    if( theDate.getDate() < 10 ){
      dateString +=  '0' + theDate.getDate().toString();
    }
    else{
      dateString += theDate.getDate().toString();
    }

    return dateString;

  }


  phpTimeGMT7( theDate = new Date() ){

    let dateString = '';
    if( theDate.getHours() < 10 ){
      dateString += '0' + theDate.getHours().toString();
    }
    else{
      dateString += theDate.getHours().toString();
    }

    dateString += ':';
    if( theDate.getMinutes() < 10 ){
      dateString += '0' + theDate.getMinutes().toString();
    }
    else{
      dateString += theDate.getMinutes().toString();
    }

    dateString += ':';
    if( theDate.getSeconds() < 10 ){
      dateString += '0' + theDate.getSeconds().toString();
    }
    else{
      dateString += theDate.getSeconds().toString();
    }

    return dateString;

  }

}
