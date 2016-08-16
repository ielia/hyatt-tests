var blackhole = "PROXY 255.255.255.0:3421";
// Safari/MacOS needs the old value
if (typeof(navigator) != "undefined" && navigator.appVersion.indexOf("Mac") != -1) {
    blackhole = "PROXY 0.0.0.0:3421";
}

function FindProxyForURL(url, host) {
    if (shExpMatch(host, "assets-d.hyatt.com") ||
        shExpMatch(host, "ad.doubleclick.com") ||
        shExpMatch(host, "googleads.g.doubleclick.com"))
        return blackhole;

    return "DIRECT";
}
