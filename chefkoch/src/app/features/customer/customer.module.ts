import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { OrderComponent } from './pages/order/order.component';

@NgModule({
  declarations: [OrderComponent],
  imports: [CommonModule, CustomerRoutingModule],
})
export class CustomerModule {}
