/*global chrome */
chrome.app.runtime.onLaunched.addListener(function () {
  'use strict';

  // Center window on screen.
  var minWidth = screen.availWidth < 360 ? screen.availWidth : 360,
    minHeight = screen.availHeight < 615 ? screen.availHeight : 615,
    width = minWidth,
    height = minHeight;

  chrome.app.window.create('app/app.html', {
    id: 'com.lancecaraccioli.apps.chrome.waypoint',
    //frame:"none",
    minWidth: minWidth,
    minHeight: minHeight,
    bounds: {
      width: width,
      height: height,
      left: Math.round((screen.availWidth - width) / 2),
      top: Math.round((screen.availHeight - height) / 2)
    }
  });
});
