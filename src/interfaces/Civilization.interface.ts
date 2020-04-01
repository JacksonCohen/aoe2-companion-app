export default interface Civilization {
  id: number;
  name: string;
  coatOfArms: string;
  specialty: string;
  uniqueUnit: string[];
  uniqueTechnologies: string[];
  wonder: string;
  civilizationBonuses: string[];
  teamBonus: string;
  checked?: boolean;
}
