import { Bulbasaur } from "@/components/WebGL/gltfs/Bulbasaur";
import { Evee } from "@/components/WebGL/gltfs/Evee";
import { Pikachu } from "@/components/WebGL/gltfs/Pikachu";

export const pokeballData: {
  name: string;
  model: JSX.Element;
  type: string;
  power: number;
  speed: number;
  defense: number;
  attack: number;
}[] = [
  {
    name: "Eevee",
    model: <Evee />,
    type: "normal",
    power: 2,
    speed: 3,
    defense: 3,
    attack: 4,
  },
  {
    name: "Pikachu",
    model: <Pikachu />,
    type: "electric",
    power: 3,
    speed: 4,
    defense: 2,
    attack: 5,
  },
  {
    name: "Bulbasaur",
    model: <Bulbasaur />,
    type: "grass",
    power: 4,
    speed: 2,
    defense: 5,
    attack: 3,
  },
  {
    name: "Eevee",
    model: <Evee />,
    type: "normal",
    power: 2,
    speed: 3,
    defense: 3,
    attack: 4,
  },
  {
    name: "Pikachu",
    model: <Pikachu />,
    type: "electric",
    power: 3,
    speed: 4,
    defense: 2,
    attack: 5,
  },

  {
    name: "Bulbasaur",
    model: <Bulbasaur />,
    type: "grass",
    power: 4,
    speed: 2,
    defense: 5,
    attack: 3,
  },
];
