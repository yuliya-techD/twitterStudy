console.log("hello");
var Twit = require('twit');
var T = new Twit({
    consumer_key: 'DgFOU81UDCEkX2bGkq4d4Tnv0',
    consumer_secret: '7zdQi3Ls14fBI7w2bLiACq4s1g8K2Om2b5aERMuWUlLVmNB0zg',
    access_token: '1317160137501585408-tWehVZGBijJGJCK6HoP4khuq8f409z',
    access_token_secret: '83R6fvu6cGT5oxBS6kXCH5ojpSEQf4nvl8OgDi7NHuyKW'
});

//use the following hastags
//  #DigitalHumanities
//  #DariahTeach
//  #DH
//  #DHfromScratch
//  #100DaysofDH
//  #twitterstorians #datajournalism

var params = {q:'#DigitalHumanities since:2021-10-11', count: 1000};

T.get('search/tweets', params, gotData);


function gotData(err, data, gotData){
    var tweets = data.statuses;
    console.log(tweets.length);
   for(var i = 0; i < tweets.length; i++){
        //console.log(tweets[i].text);
    }
}

console.log("hello again");