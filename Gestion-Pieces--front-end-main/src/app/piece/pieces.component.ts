import { Component, OnInit } from '@angular/core';
import { Piece } from '../model/piece.model';
import { PieceService } from '../services/piece.service';

@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html'
})
export class PiecesComponent implements OnInit {

    pieces ? : Piece[]; 

    constructor(private pieceService : PieceService) { }
      ngOnInit(): void {
        this.chargerPieces();
        }
        chargerPieces(){
        this.pieceService.listePieces().subscribe(piecs => {
        console.log(piecs);
        this.pieces = piecs;
        });
        }
       
}
