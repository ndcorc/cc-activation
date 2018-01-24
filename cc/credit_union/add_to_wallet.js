"use strict";

var log4js = require('log4js');
var logger = log4js.getLogger();
var request = require('request');

const MessengerSamples = require('botkit-messenger-samples');

module.exports = {

    metadata: function metadata() {
        return {
            "name": "AddToWallet",
            "properties": {
                "cc_image": { "type": "string", "required": true },
            },
            "supportedActions": []
        };
    },

    invoke: (conversation, done) => {
        /*
        var options = { 
            method: 'GET',
            url: 'https://pscuAPI-gse00002305.apaas.em2.oraclecloud.com/add_to_wallet?mobile=' + phoneNumber,
        };
        */
        var cc_image = conversation.properties().cc_image;
        var logMsg = '\nAddToWallet\n______________________________________________________________\n'
        logMsg +=  '______________________________________________________________\n'+cc_image+'\n\n'
        console.log(logMsg);

        var wallet_badge = "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/add-to-apple-wallet-logo.png";
        var pkpass = "http://129.146.81.61:8888/download.pkpass?cc="+cc_image;
        
        var MessageModel = conversation.MessageModel();
        var title = "Add To Wallet";
        var imgUrl = wallet_badge;
        var action = MessageModel.urlActionObject(null , null, pkpass);
        //var card = MessageModel.cardObject(title, null, imgUrl, pkpass, [action])
        //var txnCardConversationMessage = MessageModel.cardConversationMessage('horizontal', cards);
        var message = MessageModel.attachmentConversationMessage('image', imgUrl, [action]);
        conversation.reply(message);
        /*
        var add_button = {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "sharable": true, 
                    "image_aspect_ratio": 'horizontal',
                    "elements": [
                        {
                            "title": "Add To Wallet",
                            "image_url": wallet_badge,
                            "default_action": {
                                "type": "web_url",
                                "url": pkpass,
                                "webview_height_ratio": "full"
                            },
                            "buttons": [
                                {
                                    "title": "Add To Wallet",
                                    "type": "web_url",
                                    "url": pkpass,
                                    "webview_height_ratio": "full"
                                }
                            ]
                        }
                    ]
                }
            }
        }
        console.log(add_button);
        conversation.reply(add_button);
        */
        conversation.keepTurn(true);
        conversation.transition();
        done();
    }
}