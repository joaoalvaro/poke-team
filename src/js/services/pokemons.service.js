angular.module("poke-team").factory("pokemonsService", ($http) => {
    var _getPokemons = () => {
        return $http.get("https://pokeapi.co/api/v2/pokemon/?limit=949");
    }

    return {
        getPokemons: _getPokemons
    };
});