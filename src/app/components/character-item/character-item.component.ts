import { Component ,OnInit , Input,Output,EventEmitter} from '@angular/core';
import { Character } from 'src/app/model/character.model';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css']
})
export class CharacterItemComponent implements OnInit {
  @Input()
characterLists: Character;

@Input() 
index:number;

@Output()
deleteCharacterEvent:EventEmitter<number>;

  constructor() { 
    this.characterLists = new Character('','',false,'',0);
    this.index =0;
    this.deleteCharacterEvent = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  deleteCharacter():void{
    this.deleteCharacterEvent.emit(this.index);
  }

}