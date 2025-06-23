import { UniDateTime } from '@ehmpathy/uni-time';
import { Price } from 'domain-glossary-price';

/**
 * .what = a formal request for payment issued for a set of provisions provided by the issuer to the receiver
 */
export interface Invoice<TIssuerRef, TReceiverRef> {
  /**
   * the entity the invoice was issued by
   *
   * example
   * - a supplier who issued an invoice to a customer for products delivered
   * - a provider who issued an invoice to a customer for services delivered
   */
  issuerRef: TIssuerRef;

  /**
   * the entity the invoice was issued to
   *
   * example
   * - the customer
   */
  receiverRef: TReceiverRef;

  /**
   * the .since of the date range over which these services were offered
   */
  overDateSince: UniDateTime;

  /**
   * the .until of the date range over which these services were offered
   */
  overDateUntil: UniDateTime;

  /**
   * .what = a unique, machine-only, identifier for the invoice
   */
  // exid: string; // todo: is that needed, given the issuer, recevier, overDateRange combination is unique?

  /**
   * .what = a unique, human visible, identifier for the invoice
   * .what.intent
   *   - expose a human support verbalizable id
   * .what.example
   *   - IXU71Z936
   */
  slug: string;

  /**
   * the price total of the invoice
   */
  priceBillable: null | Price;

  /**
   * the price due by the provider as of this time
   */
  priceDue: null | Price;

  /**
   * the url at which this invoice can be paid
   */
  paymentUrl: null | string;
}
