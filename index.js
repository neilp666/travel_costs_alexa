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
        country: "GERMANY",
        costs: "$130 is the average daily price for traveling in Germany. The average price of food for one day is $34. The average price of a hotel for a couple is $130"
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
    },
    {
      country: "MOROCCO",
      costs: "$42 is the average daily price for traveling in Morocco. The average price of food for one day is $12. The average price of a hotel for a couple is $44"
    },
    {
      country: "EGYPT",
      costs: "$22 is the average daily price for traveling in Egypt. The average price of food for one day is $5.56. The average price of a hotel for a couple is $23"
    },
    {
      country: "KENYA",
      costs: "$106 s the average daily price for traveling in Kenya. The average price of food for one day is $30. The average price of a hotel for a couple is $64"
    },
    {
      country: "SEYCHELLES",
      costs: "$166 is the average daily price for traveling in the Seychelles. The average price of food for one day is $42. The average price of a hotel for a couple is $136"
    },
    {
      country: "SOUTH AFRICA",
      costs: "$103 is the average daily price for traveling in South Africa. The average price of food for one day is $26. The average price of a hotel for a couple is $100"
    },
    {
      country: "MADAGASCAR",
      costs: "$97 is the average daily price for traveling in Madagascar. The average price of food for one day is $32. The average price of a hotel for a couple is $100"
    },
    {
      country: "BAHAMAS",
      costs: "$124 is the average daily price for traveling in the Bahamas. The average price of food for one day is $38. The average price of a hotel for a couple is $127"
    },
    {
      country: "BARBADOS",
      costs: "$303 is the average daily price for traveling in Barbados. The average price of food for one day is $77. The average price of a hotel for a couple is $379"
    },
    {
      country: "CUBA",
      costs: "$17 is the average daily price for traveling in Cuba. The average price of food for one day is $9.06. The average price of a hotel for a couple is $11"
    },
    {
      country: "JAMAICA",
      costs: "$124 is the average daily price for traveling in Jamaica. The average price of food for one day is $25. The average price of a hotel for a couple is $172"
    },
    {
      country: "BERMUDA",
      costs: "$164 is the average daily price for traveling in Bermuda. The average price of food for one day is $78. The average price of a hotel for a couple is $84"
    },
    {
      country: "CAMBODIA",
      costs: "$34 is the average daily price for traveling in Cambodia. The average price of food for one day is $11. The average price of a hotel for a couple is $23"
    },
    {
      country: "HONG KONG",
      costs: "$143 is the average daily price for traveling in Hong Kong. The average price of food for one day is $26. The average price of a hotel for a couple is $124"
    },
    {
      country: "INDONESIA",
      costs: "$43 is the average daily price for traveling in Indonesia. The average price of food for one day is $13. The average price of a hotel for a couple is $45"
    },
    {
      country: "JAPAN",
      costs: "$121 is the average daily price for traveling in Japan. The average price of food for one day is $28. The average price of a hotel for a couple is $112"
    },
    {
      country: "MALAYSIA",
      costs: "$66 is the average daily price for traveling in Malaysia. The average price of food for one day is $17. The average price of a hotel for a couple is $63"
    },
    {
      country: "MALDIVES",
      costs: "$59 is the average daily price for traveling in the Maldives. The average price of food for one day is $13. The average price of a hotel for a couple is $83"
    },
    {
      country: "NEPAL",
      costs: "$28 is the average daily price for traveling in Nepal. The average price of food for one day is $8.43. The average price of a hotel for a couple is $27"
    },
    {
      country: "PAKISTAN",
      costs: "$107 is the average daily price for traveling in Pakistan. The average price of food for one day is $26. The average price of a hotel for a couple is $133"
    },
    {
      country: "PHILIPPINES",
      costs: "$40 is the average daily price for traveling in Philippines. The average price of food for one day is $9.88. The average price of a hotel for a couple is $28"
    },
    {
      country: "SINGAPORE",
      costs: "$113 is the average daily price for traveling in Singapore. The average price of food for one day is $23. The average price of a hotel for a couple is $136"
    },
    {
      country: "SOUTH KOREA",
      costs: "$104 is the average daily price for traveling in South Korea. The average price of food for one day is $23. The average price of a hotel for a couple is $106"
    },
    {
      country: "SRI LANKA",
      costs: "$33 is the average daily price for traveling in Sri Lanka. The average price of food for one day is $9.04. The average price of a hotel for a couple is $26"
    },
    {
      country: "TAIWAN",
      costs: "$76 is the average daily price for traveling in Taiwan. The average price of food for one day is $12. The average price of a hotel for a couple is $91"
    },
    {
      country: "VIETNAM",
      costs: "$41 is the average daily price for traveling in Vietnam. The average price of food for one day is $9.66. The average price of a hotel for a couple is $42"
    }
];

var handlers = {
  'LaunchRequest': function () {
    this.emit(':askWithCard', 'Welcome to Travel Helper. Tell me what country your going to. I will tell you how much you need on average to spend on food and accommodation. ', 'Tell me what country your are going to and I will tell you much you need on average to spend on food and accomodation', 'Travel Helper Guide', 'What country are you going to? I will tell you much you need on average to spend on food and accomodation');
  },
  'TravelCosts': function() {
    var countrySlot = this.event.request.intent.slots.country.value;
    if(countrySlot !== undefined && skillData.findIndex(element => element.country === countrySlot.toUpperCase()) >= 0) {
      console.log(`country ${countrySlot} exist`);
      this.emit(':tellWithCard', getSuggestion(skillData, 'country', countrySlot.toUpperCase()).costs, 'country','costs');
    }
    else {
      console.log(`can't find country: ${countrySlot} in skillData`);
      this.emit(':tell', 'Sorry you have entered an invalid country name or I dont have information on that country');
    }
  },

  'Unhandled': function () {
    this.emit(':tell', 'Sorry, I don\'t know have information on that particular country');
  },
  'AMAZON.HelpIntent': function () {
    this.emit(':askWithCard', 'Welcome to Travel Helper. Tell me what country your are going to. I will tell you how much you need on average to spend on food and accommodation. ', 'Tell me what country your are going to and I will Tell me the name and I will tell you much you need on average to spend on food and accomodation', 'Travel Helper Guide', 'What country are you going to? I will tell you much you need on average to spend on food and accomodation');

  },
  'AMAZON.CancelIntent': function () {
      this.emit(':tell', "Okay!");
  },
  'AMAZON.StopIntent': function () {
      this.emit(':tell', "Goodbye! and thanks for using Travel Helper");
  },
  'AMAZON.YesIntent': function() {

  },
  'AMAZON.NoIntent': function() {

  }
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
