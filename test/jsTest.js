const { test } = QUnit

QUnit.module('Felület tesztelése', function () {
  test('létezik-e a metódusaink? ', function (assert) {
    assert.ok(nevkiir, 'létezik a névkiir')
    assert.ok(atalakit, 'létezik a átalakít')
  })
  test('fügvények-e?  ', function (assert) {
    assert.ok(typeof nevkiir === 'function', 'függvény a névkiir')
    assert.ok(typeof atalakit === 'function', 'függvény a átalakít')
  })
  QUnit.test('nevatalakit - kéttagú név', function (assert) {
    assert.equal(atalakit('Kis Géza'), ['Kis', 'Géza'].join(','))
  })
  QUnit.test('nevatalakit - nincs név', function (assert) {
    assert.equal(atalakit(''), '')
  })
  QUnit.test('nevatalakit - Háromtagú név', function (assert) {
    assert.equal(atalakit('Kis Géza Ede'), ['Kis', 'Géza', 'Ede'].join(','))
  })
  QUnit.test('nevatalakit - beviteli mezőből vett névvel', function (assert) {
    const szuloelem = $('#qunit-fixture input')
    assert.equal(atalakit(szuloelem.eq(0).val()), ['Kis', 'Géza'].join(','))
    assert.equal(
      atalakit(szuloelem.eq(1).val()),
      ['Dr.', 'Nagy', 'Géza'].join(','),
    )
  })
  QUnit.test('nevatalakit - P tag értéke', function (assert) {
    const szuloelem = $('#qunit-fixture input')
    //assert.equal(atalakit(szuloelem.eq(0).val()), ['Kis', 'Géza'].join(','))
    nevkiir()
 /*    gombneve.click() */
    assert.ok($('.eredmeny p').eq(0), "létezik")
    assert.ok($('.eredmeny p').eq(0).html(), 'Kis')
    assert.ok($('.eredmeny p').eq(1).html(), 'Géza')
  })
})
