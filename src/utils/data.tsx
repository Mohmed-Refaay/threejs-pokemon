import { Bulbasaur } from "@/components/WebGL/gltfs/Bulbasaur";
import { Evee } from "@/components/WebGL/gltfs/Evee";
import { Pikachu } from "@/components/WebGL/gltfs/Pikachu";

export const pokeballData: {
  name: string;
  model?: JSX.Element;
}[] = [
  {
    name: "Pikachu",
    model: <Pikachu />,
  },
  {
    name: "Eevee",
    model: <Evee />,
  },
  {
    name: "Bulbasaur",
    model: <Bulbasaur />,
  },
  {
    name: "Pikachu",
    model: <Pikachu />,
  },
  {
    name: "Eevee",
    model: <Evee />,
  },
  {
    name: "Bulbasaur",
    model: <Bulbasaur />,
  },
];
