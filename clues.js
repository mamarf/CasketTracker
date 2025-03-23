// Example of detecting text
let textFinder = new a1lib.TextRecognizer();
let playerName = textFinder.find("Player Name");

// Example of taking a screenshot
a1lib.capture.takeScreenshot({x: 0, y: 0, width: 800, height: 600}, function(screenshot) {
    console.log("Screenshot captured");
});