import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnChanges {
  @Input() currentPage = 1;
  @Input() totalResults = 0;
  @Input() resultsPerPage = 10;
  @Output() pageChange = new EventEmitter<number>();

  pages: number[] = [];
  totalPages = 0;

  ngOnChanges(): void {
    this.calculatePages();
  }

  calculatePages(): void {
    this.totalPages = Math.ceil(this.totalResults / this.resultsPerPage);
    this.pages = this.getPageRange();
  }

  getPageRange(): number[] {
    const range = [];
    const rangeSize = 10; // Nombre de pages affichées dans la pagination

    let start = Math.max(1, this.currentPage - Math.floor(rangeSize / 2));
    const end = Math.min(this.totalPages, start + rangeSize - 1);

    if (end - start + 1 < rangeSize) {
      start = Math.max(1, end - rangeSize + 1);
    }

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    return range;
  }

  onPageChange(page: number): void {
    if (page !== this.currentPage && page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }
}
