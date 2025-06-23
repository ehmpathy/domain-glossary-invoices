import { UniDateTime } from '@ehmpathy/uni-time';

import { Price } from '../../../../domain-glossary-price/src';

/**
 * .what = a product or service provided by the invoice.issuer and charged to the invoice.receiver, itemized on an invoice
 * .what.intent =
 *   - clarify an exact product or service included within an invoice
 *   - clarify the exact price that is being requested for this product or service
 *   - ideally, clarifies the miracle that the product/service produces for the customer
 */
export interface InvoiceItem<TInvoiceRef> {
  /**
   * the invoice that this provision is included in
   */
  invoiceRef: TInvoiceRef;

  /**
   * a machine-only identifier for the provision
   */
  exid: string;

  /**
   * a human-readable identifier for the provision
   *
   * for example
   * - #5
   * - j3712318
   */
  slug: string;

  /**
   * a human-readable classifier for the provision
   *
   * for example
   * - lot
   * - job
   * - etc
   */
  label: string;

  /**
   * the status of this invoice.provision
   */
  // status: 'CHARGED' | 'GIFTED' | 'CANCELED'; // todo: require this once we have a usecase

  /**
   * when this provision was accrued as a charge to be paid
   */
  accruedAt: UniDateTime;

  /**
   * the price charged for this provision
   *
   * note
   * - may be null if the final price is zero, due to some adjustment (e.g., refund / gift / rejection)
   *
   * todo: consider "priceReduced" once we have adjustments considered
   */
  priceBillable: null | Price;
}
