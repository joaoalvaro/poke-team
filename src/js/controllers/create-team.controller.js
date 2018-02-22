angular.module("poke-team").controller("CreateTeamController", function ($scope, $location, pokemonsService) {
    $scope.app = "Meus times";
    
    getPokemon = () => {
        pokemonsService.getPokemons()
            .then((response) => {
                $scope.results = response.data.results
                console.log($scope.results);
            })
            .catch(err => console.log(err));
    }
    $scope.teams = [];

    $scope.addTeam = (team) => {
        $scope.teams.push(team);
        delete $scope.team;
        $scope.teamForm.$setPristine();
        $location.path("/");
    };

    getPokemon();

});