const axios = require('axios'); // Assuming you have axios installed

const apiKey = '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'; // Replace with your actual API key

function generatePrompt(animal) {
    const capitalizedAnimal = animal[0].toUpperCase() + animal.slice(1).toLowerCase();
    return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
}

axios
    .post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: generatePrompt(req.body.animal),
        temperature: 0.6,
    }, {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        // Handle the response from the OpenAI API here
        console.log(response.data.choices[0].text);
    })
    .catch(error => {
        // Handle any errors that occur during the API request
        console.error(error);
    });
