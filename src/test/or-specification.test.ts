import test from 'ava';
import {
  AlwaysFalseSpecification,
  AlwaysTrueSpecification,
} from './specification.stub';

test('true OR true = true', (t) => {
  // Arrange
  const first = new AlwaysTrueSpecification();
  const second = new AlwaysTrueSpecification();
  const someCandidate = {};

  // Act
  const result = first.or(second);

  // Assert
  t.true(result.isSatisfiedBy(someCandidate));
});

test('true OR false = true', (t) => {
  // Arrange
  const first = new AlwaysTrueSpecification();
  const second = new AlwaysFalseSpecification();
  const someCandidate = {};

  // Act
  const result = first.or(second);

  // Assert
  t.true(result.isSatisfiedBy(someCandidate));
});

test('false OR false = false', (t) => {
  // Arrange
  const first = new AlwaysFalseSpecification();
  const second = new AlwaysFalseSpecification();
  const someCandidate = {};

  // Act
  const result = first.or(second);

  // Assert
  t.false(result.isSatisfiedBy(someCandidate));
});
