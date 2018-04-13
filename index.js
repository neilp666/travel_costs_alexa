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
        costs: "$186 is the average daily price for traveling in Australia. The average price of food for one day is $33. The average price of a hotel for a couple is $203"
    },
    {
        country: "NEW ZEALAND",
        costs: "$130 is the average daily price for traveling in New Zealand. The average price of food for one day is $25. The average price of a hotel for a couple is $150. The average price of a hotel for a couple is $150"
    },
    {
        country: "MEXICO",
        costs: "$50 is the average daily price for traveling in Mexico. The average price of food for one day is $11. The average price of a hotel for a couple is $51"
    },
    {
        country: "INDIA",
        costs: "$32 is the average daily price for traveling in India. The average price of food for one day is $7.29. The average price of a hotel for a couple is $36"
    },
    {
        country: "UNITED STATES OF AMERICA",
        costs: "$224 is the average daily price for traveling in the United States of America. The average price of food for one day is $41. The average price of a hotel for a couple is $214"

    },
    {
        country: "THAILAND",
        costs: "$70 is the average daily price for traveling in Thailand. The average price of food for one day is $15. The average price of a hotel for a couple is $67"
    },
    {
        country: "CHINA",
        costs: "$74 is the average daily price for traveling in China. The average price of food for one day is $20.  The average price of a hotel for a couple is $67"
    },
    {
        country: "RUSSIA",
        costs: "$60 is the average daily price for traveling in Russia. The average price of food for one day is $15. The average price of a hotel for a couple is $68"
    },
    {
        country: "SWITZERLAND",
        costs: "$188 is the average daily price for traveling in Switzerland. The average price of food for one day is $42. The average price of a hotel for a couple is $231"
    },
    {
        country: "TURKEY",
        costs: "$38 is the average daily price for traveling in Turkey. The average price of food for one day is $7.69. The average price of a hotel for a couple is $49"
    },
    {
        country: "UKRAINE",
        costs: "$29 is the average daily price for traveling in the Ukraine. The average price of food for one day is $6.92. The average price of a hotel for a couple is $38"
    },
    {
       country: "PORTUGAL",
       costs: "$117 is the average daily price for traveling in Portugal. The average price of food for one day is $35. The average price of a hotel for a couple is $103"
    },
    {
       country: "NETHERLANDS",
       costs: "$144 is the average daily price for traveling in the Netherlands. The average price of food for one day is $33. The average price of a hotel for a couple is $163"
    },
    {
       country: "IRELAND",
       costs: "$125 is the average daily price for traveling in Ireland. The average price of food for one day is $36. The average price of a hotel for a couple is $122"
    },
    {
       country: "HUNGARY",
       costs: "$84 is the average daily price for traveling in Hungary. The average price of food for one day is $19. The average price of a hotel for a couple is $95"
    },
    {
       country: "CANADA",
       costs: "$127 is the average daily price for traveling in Canada. The average price of food for one day is $27. The average price of a hotel for a couple is $130"
    },
    {
       country: "BRAZIL",
       costs: "$68 is the average daily price for traveling in Brazil. The average price of food for one day is $16. The average price of a hotel for a couple is $73"
    },
    {
      country: "ARGENTINA",
      costs: "$109 is the average daily price for traveling in Argentina. The average price of food for one day is $17. The average price of a hotel for a couple is $74"
    },
    {
      country: "COLUMBIA",
      costs: "$32 is the average daily price for traveling in Colombia. The average price of food for one day is $8.53. The average price of a hotel for a couple is $26"
    },
    {
      country: "CHILE",
      costs: "$111 is the average daily price for traveling in Chile. The average price of food for one day is $19. The average price of a hotel for a couple is $147"
    },
    {
      country: "URUGUAY",
      costs: "$93 is the average daily price for traveling in Uruguay. The average price of food for one day is $28. The average price of a hotel for a couple is $87"
    },
    {
      country: "PERU",
      costs: "$44 is the average daily price for traveling in Peru. The average price of food for one day is $12. The average price of a hotel for a couple is $42"
    },
    {
      country: "PARAGUAY",
      costs: "$52 is the average daily price for traveling in Paraguay. The average price of food for one day is $6.33. The average price of a hotel for a couple is $28"
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
      this.emit(':ask', "Welcome to the travel costs guide. Tell me what country you are going to and I will tell you how much you need on average to spend on food and accommodation", 'Tell me the country and I will tell you much you need on average to spend on food and accomodation');
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
