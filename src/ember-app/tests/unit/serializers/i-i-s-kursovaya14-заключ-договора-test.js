import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya14-заключ-договора', 'Unit | Serializer | i-i-s-kursovaya14-заключ-договора', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya14-заключ-договора',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya14-тип-договора',
    'transform:i-i-s-kursovaya14-услуга',

    'model:i-i-s-kursovaya14-дир-отд-по-раб-с-кл',
    'model:i-i-s-kursovaya14-заключ-договора',
    'model:i-i-s-kursovaya14-клиент',
    'model:i-i-s-kursovaya14-оказ-консульт',
    'model:i-i-s-kursovaya14-расторж-договора',
    'model:i-i-s-kursovaya14-расчет-ост-врем',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
