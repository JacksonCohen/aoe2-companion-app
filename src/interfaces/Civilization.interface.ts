export default interface Civilization {
  id: number;
  checked: boolean;
  name: string;
  coat_of_arms: string;
  speciality: string;
  unique_unit: string[];
  unique_technologies: string[];
  wonder: string;
  civilization_bonuses: string[];
  team_bonus: string;
}
