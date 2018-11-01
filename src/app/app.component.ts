import { Component, OnInit } from "@angular/core";
import { LicitacaoService, RetornoLicitacao } from "./licitacao.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  licitacoes:RetornoLicitacao;
  constructor(private licitacaoService: LicitacaoService) {}

  ngOnInit() {
    this.licitacaoService.getLicitacoes("31/10/2018").subscribe(dados => {
      this.licitacoes = dados
      console.log(this.licitacoes);
    });
  }
}
