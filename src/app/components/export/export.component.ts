import { Component, Input, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Todos } from '../../models/todos';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {

  @Input() todos : Todos[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  captureScreen(): void {
    try {
      console.log(this.todos);
      let data = document.getElementById('contentToExport');

      html2canvas(data as any).then(canvas => {
        var imgWidth = 210;
        var pageHeight = 295;
        var imgHeight = canvas.height * imgWidth / canvas.width;
        var heightLeft = imgHeight;
        const contentDataURL = canvas.toDataURL('image/png');
        let pdfData = new jsPDF('p', 'mm', 'a4');
        var position = 0;
        pdfData.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
        pdfData.save('toutoulist.pdf');
      });
    } catch (error) {
      console.warn("Warning: disable this button if data doesn't exists!");
    }
    
  }
}
