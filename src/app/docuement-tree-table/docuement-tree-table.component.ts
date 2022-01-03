import { Component, OnInit } from '@angular/core';
//import {NodeService} from './nodeservice';
import { NodeService } from '../nodeservice';
import {TreeNode} from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-docuement-tree-table',
  templateUrl: './docuement-tree-table.component.html',
  styleUrls: ['./docuement-tree-table.component.css'],
  providers: [MessageService]
})
export class DocuementTreeTableComponent implements OnInit {

  cols: any = [];
  file5: TreeNode[] = [];
  selectedNodes5: TreeNode[] = [];

  constructor(private nodeService: NodeService,  private messageService: MessageService) {

   }

  ngOnInit(): void {
    this.nodeService.getFilesystem().then(files => this.file5 = files);

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
  ];
  }

   
   

  nodeSelect(event:any) {
    this.messageService.add({severity: 'info', summary: 'Node Selected', detail: event.node.data.name});
}

 nodeUnselect(event:any) {
    this.messageService.add({severity: 'info', summary: 'Node Unselected', detail: event.node.data.name});
}


}
