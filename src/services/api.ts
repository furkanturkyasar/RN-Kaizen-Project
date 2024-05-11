
import { ajax } from 'rxjs/ajax';
import Config from 'react-native-config';
import { catchError, of } from 'rxjs';


export const fetchTagsList = () => {
 
    let url: string = `${Config.BASE_API_URL}tags/list`;

    return ajax({
      url: url,
      method: 'GET',
      headers: {
        Accept: 'application/json',
        "X-Country-Id": "TR",
        "X-Language-Id": "TR"
      }
    }).pipe(
      catchError(error => {
        console.error('Error fetching tags list:', error);
        return of(error);
    })
    )
};

export const fetchPromotionsList = () => {
 
  let url: string = `${Config.BASE_API_URL}promotions/list?Channel=PWA`;

  console.log("url: ", url)

  return ajax({
    url: url,
    method: 'GET',
    headers: {
      Accept: 'application/json',
      "X-Country-Id": "TR",
      "X-Language-Id": "TR"
    }
  }).pipe(
    catchError(error => {
      console.error('Error fetching promotion list:', error);
      return of(error);
  })
  )
};


export const fetchPromotionDetail = (id: number) => {
 
    let url: string = `${Config.BASE_API_URL}promotions?Id=${id}`;

   
  
    return ajax({
      url: url,
      method: 'GET',
      headers: {
        Accept: 'application/json',
        "X-Country-Id": "TR",
        "X-Language-Id": "TR"
      }
    }).pipe(
      catchError(error => {
        console.error('Error fetching promotion detail:', error);
        return of(error);
    })
    )
};
