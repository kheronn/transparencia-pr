import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface RetornoLicitacao {
  mensagem: string;
  quantidade: number;
  listaLicitacoes: Licitacao[];
}

export interface Licitacao {
  data_abertura: string;
  modalidade: string;
  orgao_responsavel: string;
  criterio_julgamento: string;
  num_ano_edital: string;
  valor_maximo_inicial: string;
  composicao_proceso: Processo[]
}
export interface Processo {
  valor_maximo_inicial_lote: string;
  numero_lote: string;
  situacao_lote: string;
  valor_finalizado: string;
  valor_maximo_inicial: string;
  lista_item: Item[];
}

export interface Item{
  item: string;
  quantidade: number;
  valor_unitario_maximo_inicial: string;

}

@Injectable({
  providedIn: 'root'
})
export class LicitacaoService {

  urlLicitacao = 'http://www.transparencia.pr.gov.br/pte/ws/licitacoes/listarlicitacoes?datapublicacao='

  constructor(private  http:  HttpClient) { }


  getLicitacoes(data: string){
    return this.http.get<RetornoLicitacao>(this.urlLicitacao + data)
  }
}

