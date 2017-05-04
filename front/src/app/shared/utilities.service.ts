import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {

     constructor() {
        
     }

    /*
    * retorna o valor do local storage
    *
    * @param string - field
    * @return false = nao encotnrado, string caso encontrar
    */

    getLocalStorage(field: string, format: string) {
        let value: any = localStorage.getItem(field);

        if(value) {

            switch(format) {
                case 'object':
                    try {
                        return JSON.parse(value);
                    } catch(e) {
                        console.log("localStorage '"+field+"' não esta em formato de objeto");
                    }
                break;

                default:
                    return value;
            }

            return value; 
            
        } else {
            return false;
        }
    }

    /*
    * Salva o valor em local storage
    *
    * @param string - field
    * @param string - value
    */

    setLocalStorage(field: string, value: any) {
        localStorage.setItem(field, value);
    }

    /*
    * Remove localstorage e limpa variavel
    *
    * @param string - field
    */

    removeLocalStorage(field: string) {
        localStorage.removeItem(field);
    }

    /*
    * Verifica se o usuario tem token no localstorage (logado)
    */

    checkLogin() {
        let token = this.getLocalStorage("token", "");

        if(token != undefined && token != '') 
            return true;
        else
            return false;
    }
    
}
