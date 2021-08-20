<template>
    <div id="Home">
        <div>
            <div id = "topGames">
                <div class="topGames" v-for='topGame in listOfTopGames' :key="topGame.gameID">
                    <div class="topGameThumbnailContrainer">
                        <img class="topGameThmbnail" :src="`${topGame.gameBoxArtURL}`" alt="">
                    </div>
                    <div class="topGameDescription">
                    {{topGame.gameName}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'home',
    data: function(){
        return {
            listOfTopGames: [],
        }
    },
    methods: {
        getTopGame: function(){
            let fetchLink = 'https://api.twitch.tv/helix/games/top?first=28';
            fetch(fetchLink, {
                method: 'get',
                headers: new Headers({
                    'Authorization': 'Bearer lulregruxo7mvdljle2vxtqy5hjfjh',
                    'Client-ID': '2n9u9j32o07bqgpgkyakmgy7hjdbsw'
                })
            })
            .then(function(response){
                return response.json();
            })
            .then(
                data => {
                    let dataListOfTopGame = [];
                    for(var key in data.data){
                        dataListOfTopGame.push({
                            gameID: data.data[key].id,
                            gameName: data.data[key].name,
                            gameBoxArtURL: data.data[key].box_art_url.replace('{width}', '213').replace('{height}', '285')
                        })
                    }
                    this.listOfTopGames = dataListOfTopGame;
                }
            )
        }
    },
    mounted(){
        this.getTopGame();
    }
}
</script>
<style>
.non-textdecoration {
    text-decoration: none;
    color: aliceblue;
}
.btn-success {
    padding: 10px;
    text-align: center;
}
#topGames {
    display: flex;
    flex-wrap: wrap;
}
.topGame {
    flex-basis: 100%;

}
.topGameThmbnail {
    width: 100%;
    padding: 7px;
}
.topGameDescription {
    text-align: center;
}
@media only screen and (min-width: 350px) {
    .topGame {
        flex-basis: 50%;
    }
}
@media only screen and (min-width: 650px) {
    .topGame {
        flex-basis: 33.333333333%;
    }
}
@media only screen and (min-width: 950px) {
    .topGame {
        flex-basis: 25%;
    }
}
@media only screen and (min-width: 1250px) {
    .topGame {
        flex-basis: 20%;
    }
}
@media only screen and (min-width: 1550px) {
    .topGame {
        flex-basis: 16.666666660%;
    }
}
@media only screen and (min-width: 1850px) {
    .topGame {
        flex-basis: 14.2857142857%;
    }
}
</style>
