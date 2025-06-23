# domain-glossary-invoice

![test](https://github.com/ehmpathy/domain-glossary-invoice/workflows/test/badge.svg)
![publish](https://github.com/ehmpathy/domain-glossary-invoice/workflows/publish/badge.svg)

A glossary of intuitive, universally unambiguous **invoice** definitions and useful procedures.

# purpose


declare a ubiquitious language for

- domain objects related to `invoice`s
  - invoice
  - invoice item

- procedures related to `invoice`s
  - etc

# install

```sh
npm install domain-glossary-invoice
```

# use

### `Invoice`

extend the `Invoice` dobj to narrow it to your usecase

```ts
import { Invoice, InvoiceItem } from 'domain-glossary-invoice';

export interface ProviderAdsInvoice
  extends Invoice<ProviderAdsInvoiceIssuerRef, ProviderAdsInvoiceReceiverRef> {
    // ...
  }
```


### `InvoiceItem`

extend the `InvoiceItem` dobj to narrow it to your usecase

```ts
import { InvoiceItem } from 'domain-glossary-invoice';

export interface ProviderAdsInvoiceItem
  extends InvoiceItem<
    ProviderAdsInvoiceItemMiracle,
    Ref<typeof ProviderAdsInvoice>
  > {
    // ...
  }
```
