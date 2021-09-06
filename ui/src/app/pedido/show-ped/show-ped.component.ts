import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-show-ped',
  templateUrl: './show-ped.component.html',
  styleUrls: ['./show-ped.component.css'],
  providers: [DatePipe]
})
export class ShowPedComponent implements OnInit {
  currentDate = new Date().toISOString();
  

  constructor(private service: SharedService, private DatePipe: DatePipe) {

   }
  pedidoList:any=[];
  ModalTitle!:string;
  ActivateAddEditPedComp:boolean=false;
  ped:any;
  PedidoIdFilter:string="";
  PedidoNomeFilter:string="";
  PedidoDataFilter:string="";
  PedidoValorFilter:string="";
  PedidoListWithoutFilter:any=[];
  ngOnInit(): void {
    
    this.refreshPedList();
  }
  addClick(){
    this.ped={
      Id:0,
      nome_produto:"",
      valor:"",
      data_vencimento:""
    }
    this.ModalTitle="Add Pedido";
    this.ActivateAddEditPedComp=true;
  }
  closeClick(){
    this.ActivateAddEditPedComp=false;
    this.refreshPedList();
  }
  editClick(item:any){
    this.ped=item;
    this.ModalTitle="Edit Pedido";
    this.ActivateAddEditPedComp=true;

  }
  
  deleteClick(item:any){
    if(confirm("tem certeza?")){
      this.service.deletePedido(item.Id).subscribe(data=>{
        alert(data.toString());
        this.refreshPedList();
      })

    }
    

  }
  addDesconto10(item:any){
    this.ped=item;
    this.ModalTitle="Edit Pedido";
    this.ActivateAddEditPedComp=true;
    this.service.descontoPedido10(item).subscribe(data=>{
      alert(data.toString());
      this.refreshPedList();
    })
  }

  addDesconto25(item:any){
    this.ped=item;
    this.ModalTitle="Edit Pedido";
    this.ActivateAddEditPedComp=true;
    this.service.descontoPedido25(item).subscribe(data=>{
      alert(data.toString());
      this.refreshPedList();
    })
  }
  addDesconto50(item:any){
    this.ped=item;
    this.ModalTitle="Edit Pedido";
    this.ActivateAddEditPedComp=true;
    this.service.descontoPedido50(item).subscribe(data=>{
      alert(data.toString());
      this.refreshPedList();
    })
  }
  addDesconto75(item:any){
    this.ped=item;
    this.ModalTitle="Edit Pedido";
    this.ActivateAddEditPedComp=true;
    this.service.descontoPedido75(item).subscribe(data=>{
      alert(data.toString());
      this.refreshPedList();
    })
  }

  refreshPedList(){
    this.service.getPedList().subscribe(data=>{
      this.pedidoList=data;
      this.PedidoListWithoutFilter=data;
    });
  }
  FilterFn(){
    var PedidoIdFilter = this.PedidoIdFilter;
    var PedidoNomeFilter = this.PedidoNomeFilter;
    var PedidoDataFilter = this.PedidoDataFilter;
    var PedidoValorFilter = this.PedidoValorFilter;
    this.pedidoList = this.PedidoListWithoutFilter.filter(function(el:any){
      return el.Id.toString().toLowerCase().includes(
        PedidoIdFilter.toString().trim().toLowerCase()
      )&&
      el.nome_produto.toString().toLowerCase().includes(
        PedidoNomeFilter.toString().trim().toLowerCase()
      )&&
      el.data_vencimento.toString().toLowerCase().includes(
        PedidoDataFilter.toString().trim().toLowerCase()
      )&&
      el.valor.toString().toLowerCase().includes(
        PedidoValorFilter.toString().trim().toLowerCase()
      )

    });
  }

}
