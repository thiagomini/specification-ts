import test from 'ava';
import { AbstractSpecification } from './specifications';

class AlwaysTrueSpecification extends AbstractSpecification {
  public isSatisfiedBy(): boolean {
    return true;
  }
}

test('is satisfied when both candidates are satisfied', (t) => {
  // Arrange
  const first = new AlwaysTrueSpecification();
  const second = new AlwaysTrueSpecification();
  const someCandidate = {};

  // Act
  const result = first.and(second);

  // Assert
  t.true(result.isSatisfiedBy(someCandidate));
});
