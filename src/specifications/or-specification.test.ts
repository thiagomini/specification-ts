import test from 'ava';
import { AbstractSpecification } from './specifications';

class AlwaysTrueSpecification extends AbstractSpecification {
  public isSatisfiedBy(): boolean {
    return true;
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
