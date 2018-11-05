import { Component, OnInit } from "@angular/core";
import { LicitacaoService, RetornoLicitacao } from "./licitacao.service";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  licitacoes: RetornoLicitacao;
  showSpinner: boolean;
  constructor(private licitacaoService: LicitacaoService) { }

  ngOnInit() { }
  busca($event) {
    this.showSpinner = true;
    let datePipe = new DatePipe("pt-BR");
    let data = datePipe.transform(new Date($event.value), "dd/MM/yyyy");
    this.licitacaoService.getLicitacoes(data).subscribe(dados => {
      this.licitacoes = dados;
      this.showSpinner = false;
    })
  }
}
