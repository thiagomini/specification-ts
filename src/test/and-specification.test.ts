import test from 'ava';
import {
  AlwaysFalseSpecification,
  AlwaysTrueSpecification,
} from './specification.stub';

test('true AND true = true', (t) => {
  // Arrange
  const first = new AlwaysTrueSpecification();
  const second = new AlwaysTrueSpecification();
  const someCandidate = {};

  // Act
  const result = first.and(second);

  // Assert
  t.true(result.isSatisfiedBy(someCandidate));
});

test('true AND false = false', (t) => {
  // Arrange
  const first = new AlwaysTrueSpecification();
  const second = new AlwaysFalseSpecification();
  const candidate = {};

  // Act
  const result = first.and(second);

  // Assert
  t.false(result.isSatisfiedBy(candidate));
});

test('false AND false = false', (t) => {
  // Arrange
  const first = new AlwaysFalseSpecification();
  const second = new AlwaysFalseSpecification();
  const candidate = {};

  // Act
  const result = first.and(second);

  // Assert
  t.false(result.isSatisfiedBy(candidate));
});
