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

test('true + true = true', (t) => {
  // Arrange
  const first = new AlwaysTrueSpecification();
  const second = new AlwaysTrueSpecification();
  const someCandidate = {};

  // Act
  const result = first.and(second);

  // Assert
  t.true(result.isSatisfiedBy(someCandidate));
});

test('true + false = false', (t) => {
  // Arrange
  const first = new AlwaysTrueSpecification();
  const second = new AlwaysFalseSpecification();
  const candidate = {};

  // Act
  const result = first.and(second);

  // Assert
  t.false(result.isSatisfiedBy(candidate));
});
