import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements AfterViewInit {
  @ViewChild('myID') canvas: ElementRef;

  constructor(canvas: ElementRef) {
      this.canvas = canvas;
   }

  ngAfterViewInit(){
    var ctx = this.canvas.nativeElement.getContext('2d');
    var gradientStroke = ctx.createLinearGradient(0,0,0,270);
    gradientStroke.addColorStop(0, "#2D77FF");
    gradientStroke.addColorStop(1, "#FFFFFF");

    var myChart = new Chart(ctx, {
        type: 'bar',        
        data: {
            labels: ['Lun', 'Mar', 'Mier', 'Jue', 'Vier', 'Sab', 'Dom'],
            datasets: [{
                barThickness: 25,
                data: [4000, 2000, 4000, 4000, 2000, 4000, 4000],
                backgroundColor: [
                    gradientStroke,
                    gradientStroke,
                    gradientStroke,
                    gradientStroke,
                    gradientStroke,
                    gradientStroke,
                    gradientStroke
                ],
                borderRadius: 50
            }]
        },
        options: {            
            plugins: {
                title: {
                    display: true,
                    text: 'Expenses this week',
                    align: 'start',
                    font: {
                        size: 18
                    },
                    color: '#010036',
                    padding: {
                        bottom: 30
                    }
                },
                legend: {
                    display: false
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            size: 12
                        },
                        color: '#010036',
                    },                    
                },
                y: {
                    ticks: {
                        font: {
                            size: 12
                        },
                        color: '#010036',
                    },
                },
                
            }
        }
    });
  }
  

}
