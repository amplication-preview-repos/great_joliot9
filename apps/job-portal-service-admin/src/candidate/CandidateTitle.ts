import { Candidate as TCandidate } from "../api/candidate/Candidate";

export const CANDIDATE_TITLE_FIELD = "id";

export const CandidateTitle = (record: TCandidate): string => {
  return record.id?.toString() || String(record.id);
};
