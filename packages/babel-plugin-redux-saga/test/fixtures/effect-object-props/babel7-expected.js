function* withEffectObjectProps() {
  yield function reduxSagaSource() {
    return Object.defineProperty(race({
      timeout: delay(3000),
      cannelled: take('CANCELLED')
    }), Symbol.for('@@redux-saga/LOCATION'), {
      value: {
        fileName: 'effect-object-props/source.js',
        lineNumber: 2,
        code: 'race({\n    timeout: delay(3000),\n    cannelled: take(\'CANCELLED\'),\n  })'
      }
    });
  }();
}
Object.defineProperty(withEffectObjectProps, Symbol.for('@@redux-saga/LOCATION'), {
  value: {
    fileName: 'effect-object-props/source.js',
    lineNumber: 1
  }
});