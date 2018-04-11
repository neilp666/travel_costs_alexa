var Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.7853b88c-4a25-4c81-9d1d-b98b385c4221';

const skillData = [
    {
        country: "FRANCE",
        costs: "$175 is the average daily price for traveling in France. The average price of food for one day is $36. The average price of a hotel for a couple is $206"
    },
    {
        country: "SPAIN",
        costs: "$135 is the average daily price for traveling in Spain. The average price of food for one day is $32. The average price of a hotel for a couple is $118"
    },
    {
        country: "ITALY",
        costs: "$149 is the average daily price for traveling in Italy. The average price of food for one day is $39. The average price of a hotel for a couple is $157"
    },
    {
        country: "UNITED KINGDOM",
        costs: "$163 is the average daily price for traveling in the United Kingdom. The average price of food for one day is $39. The average price of a hotel for a couple is $163"
    },
    {
        country: "AUSTRALIA",
        costs: "$186 is the average daily price for traveling in Australia. The average price of food for one day is $33"
    },
    {
        country: "NEW ZEALAND",
        costs: "$130 is the average daily price for traveling in New Zealand. The average price of food for one day is $25. The average price of a hotel for a couple is $150"
    },
    {
        country: "MEXICO",
        costs: "$50 is the average daily price for traveling in Mexico. The average price of food for one day is $11"
    },
    {
        country: "INDIA",
        costs: "$32 is the average daily price for traveling in India. The average price of food for one day is $7.29"
    },
    {
        country: "UNITED STATES OF AMERICA",
        costs: "$224 is the average daily price for traveling in the United States of America. The average price of food for one day is $41"

    },
    {
        country: "THAILAND",
        costs: "$70 is the average daily price for traveling in Thailand. The average price of food for one day is $15"
    },
    {
        country: "CHINA",
        costs: "$74 is the average daily price for traveling in China. The average price of food for one day is $20"
    }
];

var handlers = {
  'LaunchRequest': function () {
    this.emit(':ask', 'Welcome to the travel costs guide. Tell me what country you are going to and I will tell you how much you need on average to spend on food and accommodation. ', 'Tell me the country and I will tell you much you need on average to spend on food and accomodation');
  },
  'TravelCosts': function() {
      var countrySlot = this.event.request.intent.slots.country.value;
      this.emit(':tell', getSuggestion(skillData, 'country', countrySlot.toUpperCase()).costs);
  },
  'Unhandled': function () {
    this.emit(':tell', 'Sorry, I don\'t know what to do');
  },
  'AMAZON.HelpIntent': function () {
      this.emit(':ask', "What can I help you with?", "How can I help?");
  },
  'AMAZON.CancelIntent': function () {
      this.emit(':tell', "Okay!");
  },
  'AMAZON.StopIntent': function () {
      this.emit(':tell', "Goodbye!");
  },
};

exports.handler = function(event, context){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

function getSuggestion(data, propName, propValue) {
  for (var i=0; i < data.length; i++) {
    if (data[i][propName] == propValue) {
      return data[i];
    }
  }
}

{
  "intents": [
    {
      "intent": "AMAZON.CancelIntent"
    },
    {
      "intent": "AMAZON.HelpIntent"
    },
    {
      "slots": [
        {
          "name": "state",
          "type": "AMAZON.US_STATE"
        }
      ],
      "intent": "MakeSuggestion"
    }
  ]
}

Sample Utterences

MakeSuggestion suggest a beer from {state}
MakeSuggestion from {state}
MakeSuggestion {state}
