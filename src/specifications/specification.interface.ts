export interface Specification<Candidate = unknown> {
  isSatisfiedBy(candidate: Candidate): boolean;

  and(specification: Specification<Candidate>): Specification<Candidate>;
}
