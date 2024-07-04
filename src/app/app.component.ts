import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  next : string="X"
  result : string=""
  games : string[]=[
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
  ]
  winnners : number[]=[]


  setMark(index:number){

    if(this.games[index]=="" && this.result==""){

      this.games[index]=this.next;

      this.checkGameResult();
      this.checkIfGameFinish();
      if(this.result!=""){
        return;
      }

      if(this.next=="X")
        this.next="O"
      else
        this.next="X"

    }
  }

  newGame(){
    this.next="X"
    this.winnners=[];
    for(let i=0;i<this.games.length;i++){
      this.games[i]=""
      this.result=""
    }
  }

  checkGameResult(){
    if(this.games[0]!="" && this.games[0]==this.games[1] && this.games[1] == this.games[2]){
      this.result=`Oyunu ${this.next} kazandı`;
      this.winnners.push(0,1,2);
    }
    if(this.games[3]!="" && this.games[3]==this.games[4] && this.games[4] == this.games[5]){
      this.result=`Oyunu ${this.next} kazandı`;
      this.winnners.push(3,4,5);
    }
    if(this.games[6]!="" && this.games[6]==this.games[7] && this.games[7] == this.games[8]){
      this.result=`Oyunu ${this.next} kazandı`;
      this.winnners.push(6,7,8);
    }
    if(this.games[0]!="" && this.games[0]==this.games[4] && this.games[4] == this.games[8]){
      this.result=`Oyunu ${this.next} kazandı`;
      this.winnners.push(0,4,8);
    }
    if(this.games[2]!="" && this.games[2]==this.games[4] && this.games[4] == this.games[6]){
      this.result=`Oyunu ${this.next} kazandı`;
      this.winnners.push(2,4,6);
    }
  }
  checkWinnerButtonClass(index : number){
     if(this.winnners.includes(index))
         return "btn btn-success button"
      else
         return "btn btn-primary button"
  }
  checkIfGameFinish(){
     let isFinish=false;
     for(let i=0;i<this.games.length;i++){
      if(this.games[i]=="")
         return;
      else 
         isFinish=true;
     }
     if(isFinish){
      this.result="Oyun berabere!!"
     }
  }
  checkResultClass(){
    if(this.result!="" && this.result=="Oyun berabere!!")
      return "alert alert-danger"
    else
      return "alert alert-success"
  }
}
