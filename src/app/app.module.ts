import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {DisplayhelloworldComponent} from "./displayhelloworld/displayhelloworld.component";
import { ShowhellobuttonComponent } from './showhellobutton/showhellobutton.component';
import { DisplaynameComponent } from './displayname/displayname.component';
import { CounterComponent } from './counter/counter.component';
import { SimpleformComponent } from './simpleform/simpleform.component';
import { UserageComponent } from './userage/userage.component';
import { UsergreetingComponent } from './usergreeting/usergreeting.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TextlegnthComponent } from './textlegnth/textlegnth.component';
import { CurrencyconverterComponent } from './currencyconverter/currencyconverter.component';
import { EvenoddcheckerComponent } from './evenoddchecker/evenoddchecker.component';
import { WordreverserComponent } from './wordreverser/wordreverser.component';
import { ShowdateComponent } from './showdate/showdate.component';
import { ShowusernameComponent } from './showusername/showusername.component';
import { MultiplicationtableComponent } from './multiplicationtable/multiplicationtable.component';
import { SimpleloginComponent } from './simplelogin/simplelogin.component';
import { FahrenheittocelciusComponent } from './fahrenheittocelcius/fahrenheittocelcius.component';
import { BookmarklistComponent } from './bookmarklist/bookmarklist.component';
import { CharactercounterComponent } from './charactercounter/charactercounter.component';
import { PalindromecheckerComponent } from './palindromechecker/palindromechecker.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { FactorialcalculatorComponent } from './factorialcalculator/factorialcalculator.component';
import { TodomanagerComponent } from './todomanager/todomanager.component';
import { GuessnumbergameComponent } from './guessnumbergame/guessnumbergame.component';
import { WordcounterComponent } from './wordcounter/wordcounter.component';
import { RandomnumbergeneratorComponent } from './randomnumbergenerator/randomnumbergenerator.component';
import { MultiplicationcheckerComponent } from './multiplicationchecker/multiplicationchecker.component';
import { UppercaseconverterComponent } from './uppercaseconverter/uppercaseconverter.component';
import { WordshufflerComponent } from './wordshuffler/wordshuffler.component';
import { BmisolverComponent } from './bmisolver/bmisolver.component';
import { UsernamevalidatorComponent } from './usernamevalidator/usernamevalidator.component';
import { InterestcalculatorComponent } from './interestcalculator/interestcalculator.component';
import { CompoundinterestcalculatorComponent } from './compoundinterestcalculator/compoundinterestcalculator.component';
import { FibonaccigeneratorComponent } from './fibonaccigenerator/fibonaccigenerator.component';
import { OddsumcalculatorComponent } from './oddsumcalculator/oddsumcalculator.component';
import { CurrencyformatterComponent } from './currencyformatter/currencyformatter.component';
import { RandomquotedisplayComponent } from './randomquotedisplay/randomquotedisplay.component';
import { UppercasegreetingComponent } from './uppercasegreeting/uppercasegreeting.component';
import { DivisioncheckerComponent } from './divisionchecker/divisionchecker.component';

const routes: Routes = [
  {path: 'display', component: DisplayhelloworldComponent},
  {path:'show', component: ShowhellobuttonComponent},
  {path:'name', component: DisplaynameComponent},
  {path: 'counter', component: CounterComponent},
  {path: 'simple', component: SimpleformComponent},
  {path: 'userage', component: UserageComponent},
  {path: 'usergreeting', component: UsergreetingComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'textlegnth', component: TextlegnthComponent},
  {path: 'currencyconverter', component: CurrencyconverterComponent},
  {path: 'evenoddchecker', component: EvenoddcheckerComponent},
  {path: 'wordreserver', component: WordreverserComponent},
  {path: 'showdate', component: ShowdateComponent},
  {path: 'showusername', component: ShowusernameComponent},
  {path: 'multiplicationtable',component:MultiplicationtableComponent},
  {path: 'simplelogin', component: SimpleloginComponent},
  {path: 'fahrenheittocelsius', component: FahrenheittocelciusComponent},
  {path: 'bookmarklist', component:BookmarklistComponent},
  {path: 'charactercounter', component: CharactercounterComponent},
  {path: 'palindromechecker', component: PalindromecheckerComponent},
  {path: 'temperature', component:TemperatureComponent},
  {path: 'shoppinglist', component:ShoppinglistComponent},
  {path: 'factorial', component:FactorialcalculatorComponent},
  {path: 'todo', component:TodomanagerComponent},
  {path: 'guess', component:GuessnumbergameComponent},
  {path: 'wordcounter', component:WordcounterComponent},
  {path: 'random', component:RandomnumbergeneratorComponent},
  {path: 'multiplicationchecker', component:MultiplicationcheckerComponent},
  {path: 'uppercase', component:UppercaseconverterComponent},
  {path: 'wordshuffler', component:WordshufflerComponent},
  {path: 'bmisolver', component:BmisolverComponent},
  {path: 'usernamevalidator', component:UsernamevalidatorComponent},
  {path: 'interest', component:InterestcalculatorComponent},
  {path: 'compound', component:CompoundinterestcalculatorComponent},
  {path: 'fibonacci', component:FibonaccigeneratorComponent},
  {path: 'oddsum', component:OddsumcalculatorComponent},
  {path: 'currency', component:CurrencyformatterComponent},
  {path: 'randomquote', component:RandomquotedisplayComponent},
  {path: 'uppercasegreeting', component:UppercasegreetingComponent},
  {path: 'divisionchecker', component:DivisioncheckerComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule
    ],
  exports: [RouterModule],

  declarations: [
    AppComponent,
  ],
  providers: [
    provideAnimationsAsync(),
    ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

