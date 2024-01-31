import React, { Component } from 'react'
import Pokedex from './Pokedex'

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 18, name: "Pidgeot", type: "normal", base_experience: 211 },
      { id: 57, name: "Primeape", type: "fighting", base_experience: 90 },
      { id: 123, name: "Scyther", type: "bug", base_experience: 100 },
      { id: 99, name: "Kingler", type: "water", base_experience: 166 },
      { id: 131, name: "Lapras", type: "water", base_experience: 187 },
      { id: 6, name: "Charizard", type: "fire", base_experience: 164 },
      { id: 89, name: "Muk", type: "poison", base_experience: 175 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 9, name: "Blastoise", type: "water", base_experience: 178 },
      { id: 55, name: "Golduck", type: "water", base_experience: 175 },
      { id: 78, name: "Rapidash", type: "fire", base_experience: 175 },
      { id: 3, name: "Venusaur", type: "grass", base_experience: 202 },
      { id: 93, name: "Haunter", type: "ghost", base_experience: 142 },
      { id: 95, name: "Onix", type: "rock", base_experience: 77 },
    ],
  };
  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemon];
    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randomPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randomPokemon);
    }
    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    return (
      <div>
        <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </div>
    );
  }
}

export default Pokegame
