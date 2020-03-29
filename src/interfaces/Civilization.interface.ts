export default interface Civilization {
  id: number;
  name: string;
  "coat of arms": string;
  speciality: string;
  uniqueunit: string[];
  "unique technologies": string[];
  "civilization bonuses": string[];
  team_bonus: string;
}
