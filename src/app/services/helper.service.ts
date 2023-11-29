import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  getFormControlError(frmGroup: FormGroup, controlName: string, isFormSubmited: boolean, label?: string) : string {
    let frmControls = frmGroup.controls as any;
    if(frmControls[controlName].invalid && (isFormSubmited || frmControls[controlName].dirty || frmControls[controlName].touched)){
      if(frmControls[controlName].errors?.['required']){
        return `${label ? label : controlName[0].toUpperCase() + controlName.substring(1).toLowerCase()} is required.`;
      }
      else if(frmControls[controlName].errors?.['email']){
        return `Incorrect ${label ? label : controlName.toLowerCase()} format.`;
      }
    }
    return '';
  }

}
