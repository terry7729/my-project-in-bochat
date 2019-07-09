var isPC = function() {
    var userAgentInfo = navigator.userAgent.toLowerCase();
    var Agents = new Array("android", "iphone", "symbianOS", "windows phone", "ipad", "ipod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
    }
    return flag;
}

if (isPC()) {
    document.documentElement.style.fontSize = '8.334rem'
    document.body.style.maxWidth = '500px'
    document.body.style.margin = '0 auto'
} else {

}

var request = function() {};
request.prototype = {
    requesturl: function() {
        const hostname = window.location.hostname;
        if (hostname.indexOf('192.168.0.57') != -1) {
            requestUrl = 'http://192.168.0.57:8585'
        } else if (hostname.indexOf('47.244.177.24') != -1) {
            requestUrl = 'http://47.244.177.24:8585'
        } else {
            requestUrl = "http://api-app.bochat.net"
        }
        // return requestUrl
    }
}
var urls = new request();
urls.requesturl();