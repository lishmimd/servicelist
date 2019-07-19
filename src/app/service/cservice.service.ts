import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CserviceService {

 // constructor() { }
 signList = [{ firstName: 'LISHMI', lastName: 'MD', addressLine1:
'TFGGGYT', addressLine2: 'HBGTDH',  email: 'lishmi@gmail.com',cellPhone: '586764778678' },

  { firstName: 'tdy', lastName: 'jbhugd',addressLine1:'gfshguy', addressLine2:
'fdgby', email: 'fghh',cellPhone: '3423656' },

{ firstName: 'dgh', lastName: 'hgf',addressLine1:'hfyytj', addressLine2:
'fdgby', email: 'fghh',cellPhone: 'tgtgtg' },

  ];

  constructor()

  {
  }

  listArray()

  {

    return this.signList;
    

  }

}

