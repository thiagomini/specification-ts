import { AbstractSpecification } from '../specifications/specifications';

export class AlwaysTrueSpecification extends AbstractSpecification {
  public isSatisfiedBy(): boolean {
    return true;
  }
}

export class AlwaysFalseSpecification extends AbstractSpecification {
  public isSatisfiedBy(): boolean {
    return false;
  }
}
