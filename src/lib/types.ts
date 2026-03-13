export const RELATION_TYPES = [
  "senior-vaiya-apu",
  "junior-vaiya-apu",
  "sir",
  "madam",
  "family",
  "friends",
] as const;

export type RelationType = (typeof RELATION_TYPES)[number];

export const RELATION_LABELS: Record<RelationType, string> = {
  "senior-vaiya-apu": "Senior Vaiya/Apu",
  "junior-vaiya-apu": "Junior Vaiya/Apu",
  sir: "Sir",
  madam: "Madam",
  family: "Family",
  friends: "Friends",
};

export interface CardData {
  recipientName: string;
  relationType: RelationType;
  message: string;
  senderName: string;
  salamiNumber: string;
}

export interface CardPayload extends CardData {
  v: 1; // version for forward-compatibility
}
