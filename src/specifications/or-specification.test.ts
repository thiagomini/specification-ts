import test from 'ava';
import { AbstractSpecification } from './specifications';

class AlwaysTrueSpecification extends AbstractSpecification {
  public isSatisfiedBy(): boolean {
    return true;
  }
}

class AlwaysFalseSpecification extends AbstractSpecification {
  public isSatisfiedBy(): boolean {
    return false;
  }
}

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
