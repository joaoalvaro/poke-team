angular.module("poke-team").config(($routeProvider) => {
    $routeProvider.when("/", {
        templateUrl: "view/listTeams.html",
        controller: "PokeTeamController"
    });
    $routeProvider.when("/createTeam", {
        templateUrl: "view/createTeam.html",
        controller: "CreateTeamController"
    })
    
});