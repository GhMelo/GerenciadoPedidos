import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-ped',
  templateUrl: './add-edit-ped.component.html',
  styleUrls: ['./add-edit-ped.component.css']
})
export class AddEditPedComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() ped:any;
  Id!:string;
  nome_produto!:string;
  valor!:string;
  data_vencimento!:string

  ngOnInit(): void {
    this.Id=this.ped.Id;
    this.nome_produto=this.ped.nome_produto;
    this.valor=this.ped.valor;
    this.data_vencimento=this.ped.data_vencimento;
  }

  addPedido(){
    var val = {Id:this.Id,
              nome_produto:this.nome_produto,
              valor:this.valor,
              data_vencimento:this.data_vencimento
    };
    this.service.addPedido(val).subscribe(res=>{
      alert(res.toString());
    });
  }
  updatePedido(){
    {
      var val = {Id:this.Id,
                nome_produto:this.nome_produto,
                valor:this.valor,
                data_vencimento:this.data_vencimento
      };
      this.service.updatePedido(val).subscribe(res=>{
        alert(res.toString());
      });
    }

  }

  descontoClick(item:any, desconto:number ){
    {
      var val = {Id:this.Id,
                nome_produto:this.nome_produto,
                valor:this.valor,
                data_vencimento:this.data_vencimento
      };
      this.service.updatePedido(val).subscribe(res=>{
        alert(res.toString());
      });
    }

  }
}
