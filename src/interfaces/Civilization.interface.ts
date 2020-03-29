export default interface Civilization {
  id: number;
  name: string;
  "coat of arms": string;
  speciality: string;
  "unique unit": string[];
  "unique technologies": string[];
  wonder: string;
  "civilization bonuses": string[];
  "team bonus": string;
}
