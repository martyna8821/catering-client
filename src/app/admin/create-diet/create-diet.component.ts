import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DietService } from 'src/app/shared/service/DietService';
import { Router } from '@angular/router';
import { DietInput } from 'src/app/shared/model/DietInput';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { TokenStorageService } from 'src/app/authentication/service/token-storage.service';
import {MessageService} from 'primeng/api';
import { UserService } from 'src/app/shared/service/UserService';
import { User } from 'src/app/shared/model/User';
import { LabelInput } from 'src/app/authentication/model/LabelInput';



@Component({
  selector: 'app-create-diet',
  templateUrl: './create-diet.component.html',
  styleUrls: ['./create-diet.component.css'],
  providers: [MessageService]
})
export class CreateDietComponent implements OnInit {

  basicDietInfo: FormGroup;
  dietitians: User[];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  caloricVersionsCtrl = new FormControl();
  filteredCaloricVersions: Observable<string[]>;
  caloricVersionsList: string[] = [];
  allCaloricVersionsList = ["1000", "1500", "2000", "2200"];
  @ViewChild('caloricVersionInput', {static: false}) caloricVersionInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;


  labels: LabelInput[] = [{name: "wegetariańska", checked: false}, 
                          {name: "wegańska", checked : false}, 
                          {name: "bezglutenowa", checked: false},
                          {name: "bez laktozy", checked: false}];

  uploadedImageData: string;
  imageFilename: string;

  dietToCreate: DietInput = {name: ' ', description: ' ', price: 100, labels: [], forbiddenIngredients:[], caloricVersions:[],
                             dietitianUsername: '', image: 'null'};

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private tokenService: TokenStorageService,
              private messageService: MessageService,
              private userService: UserService,
              private dietService:DietService){  
                this.filteredCaloricVersions = this.caloricVersionsCtrl.valueChanges.pipe(
                                                    startWith(null),
                                                    map((caloricVersion: string | null) => 
                                                            caloricVersion ? this._filter(caloricVersion) : this.allCaloricVersionsList));
          }
              
  ngOnInit() {

    this.basicDietInfo = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [100, Validators.required]
    });

    this.userService.getUsers().pipe(
     map( users => { this.dietitians = users;
        this.dietitians = users.filter(user => user.roles.includes('ROLE_DIETITIAN'))
      })
    )
    .subscribe();

    console.log(this.dietitians);


}

  createDiet(){
    this.dietToCreate.image = this.uploadedImageData;
    this.dietToCreate.caloricVersions = this.caloricVersionsList;
    this.labels.forEach( l => {if(l.checked) this.dietToCreate.labels.push(l.name);} ) ;  
    this.dietToCreate.dietitianUsername = this.tokenService.getUserName();
    this.dietService.add(this.dietToCreate).subscribe(
          res =>  this.router.navigateByUrl('/admin/manage-diet').then(() => {
            this.showSuccess();
          }),
          err => console.log("error adding new diet")
       );
  }

 myUploader(event){

   let reader = new FileReader();
   let file =event.files[0];
   this.imageFilename = file.name;
   reader.readAsDataURL(file);
   reader.onload = () => 
       this.uploadedImageData = reader.result.toString().split(',')[1];
   }

 
 add(event: MatChipInputEvent): void {
  
  if (!this.matAutocomplete.isOpen) {
    const input = event.input;
    const value = event.value;

      if ((value || '').trim()) {
      this.caloricVersionsList.push(value.trim());

    }

    if (input) {
      input.value = '';
    }

    this.caloricVersionsCtrl.setValue(null);
  }
}


remove(caloricVersion: string): void {
  const index = this.caloricVersionsList.indexOf(caloricVersion);

  if (index >= 0) {
    this.caloricVersionsList.splice(index, 1);
    this.allCaloricVersionsList.push(caloricVersion);
  }
}

selected(event: MatAutocompleteSelectedEvent): void {
  this.caloricVersionsList.push(event.option.viewValue);
  this.caloricVersionInput.nativeElement.value = '';
  this.caloricVersionsCtrl.setValue(null);
  
  this.allCaloricVersionsList = this.allCaloricVersionsList.filter(
                v => v !== event.option.value
  );
}

private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.allCaloricVersionsList.filter(calVersion => calVersion.toLowerCase().indexOf(filterValue) === 0);
}

showSuccess() {
  this.messageService.add({severity:'success', summary: 'Sukces', detail:'Pomyślnie dodano dietę'});
}

}

