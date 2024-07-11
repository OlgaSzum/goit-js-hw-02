'use strict';

function checkForSpam(message) {

    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("spam") || lowerMessage.includes("sale")) {
        return true;
    } 

    return false;
}
