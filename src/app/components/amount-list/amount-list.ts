import { Component, OnInit } from '@angular/core';
import { Amount } from '../../models/amount.model';
import { AmountService } from '../../services/amount.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-amount-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './amount-list.html',
  styleUrls: ['./amount-list.css']
})
export class AmountList implements OnInit {
  amountInfo: Amount | null = null;
  isLoading: boolean = true;
  selectedMeter: string = 'S1';

  constructor(private amountService: AmountService) {}

  ngOnInit(): void {
    this.getAmountInfo();
  }

  getAmountInfo(): void {
    this.isLoading = true;
    const apiUrl = `http://localhost:5009/Amount?meterName=${this.selectedMeter}`;
    
    this.amountService.getAmountInfo(apiUrl).subscribe({
      next: (data) => {
        this.amountInfo = data;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
}
