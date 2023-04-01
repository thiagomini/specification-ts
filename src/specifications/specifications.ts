import { Specification } from './specification.interface';

export abstract class AbstractSpecification<Candidate = unknown>
  implements Specification<Candidate>
{
  public abstract isSatisfiedBy(candidate: Candidate): boolean;

  public and(
    specification: Specification<Candidate>
  ): Specification<Candidate> {
    return new AndSpecification(this, specification);
  }

  public or(specification: Specification<Candidate>): Specification<Candidate> {
    return new OrSpecification(this, specification);
  }

  public not(): Specification<Candidate> {
    return new NotSpecification(this);
  }
}

export class AndSpecification extends AbstractSpecification {
  constructor(
    public readonly first: Specification,
    public readonly other: Specification
  ) {
    super();
  }

  public isSatisfiedBy(candidate: unknown): boolean {
    return (
      this.first.isSatisfiedBy(candidate) && this.other.isSatisfiedBy(candidate)
    );
  }
}

export class OrSpecification extends AbstractSpecification {
  constructor(
    public readonly first: Specification,
    public readonly other: Specification
  ) {
    super();
  }

  public isSatisfiedBy(candidate: unknown): boolean {
    return (
      this.first.isSatisfiedBy(candidate) || this.other.isSatisfiedBy(candidate)
    );
  }
}

export class NotSpecification extends AbstractSpecification {
  constructor(public readonly specification: Specification) {
    super();
  }

  public isSatisfiedBy(candidate: unknown): boolean {
    return !this.specification.isSatisfiedBy(candidate);
  }
}
