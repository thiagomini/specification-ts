import test from 'ava';
import {
  AlwaysFalseSpecification,
  AlwaysTrueSpecification,
} from './specification.stub';

test('!true =  false', (t) => {
  // Arrange
  const trueSpecification = new AlwaysTrueSpecification();
  const someCandidate = {};

  // Act
  const result = trueSpecification.not();

  // Assert
  t.false(result.isSatisfiedBy(someCandidate));
});

test('!false = true', (t) => {
  // Arrange
  const falseSpecification = new AlwaysFalseSpecification();
  const someCandidate = {};

  // Act
  const result = falseSpecification.not();

  // Assert
  t.true(result.isSatisfiedBy(someCandidate));
});
