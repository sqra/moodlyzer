![Moodlyzer Logo](src/assets/images/logo.svg)

MoodLyzer is a simple sentiment analysis app

## Getting Started

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/sqra/moodlyzer.git
   cd moodlyzer
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

### Setting Up Hugging Face API

1. Go to [Hugging Face](https://huggingface.co/) and sign up for an account if you don't have one.
2. Navigate to the [API keys](https://huggingface.co/settings/tokens) section in your account settings.
3. Generate a new API key.
4. Create a `.env` file in the root directory of the project and add your API key:

   ```env
   VITE_HUGGING_FACE_API_URL=https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english
   VITE_HUGGING_FACE_API_TOKEN=hf_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

### Running the Project

1. Start the development server:

   ```sh
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`.

### Running Tests

To run the tests, use the following command:

```sh
npm run test
```

### Code Quality Tools

This project uses the following tools to maintain code quality:

- **Husky**: For managing Git hooks.
- **Prettier**: For code formatting.
- **ESLint**: For linting JavaScript/TypeScript code.

## Technology Stack

- **Frontend**: React, TypeScript
- **Styling**: SCSS
- **API**: Hugging Face Sentiment Analysis
- **Testing**: Vitest, MSW (Mock Service Worker)

## Challenges

Writing this application was very enjoyable for me. I didn't encounter any major problems while creating it. With such a small application I tried not to implement unnecessary dependencies because I think there was no need for it. In summary, 60% of the time was spent on coding and 40% on the Figma project.

## Figma Design

You can view the design of the project on Figma [here](https://www.figma.com/design/xwgavByuXq7w3BjfAxXhRd/Moodlyzer).

## License

Copyright (c) 2025 Paweł Skórka

This code was created solely for the purpose of the recruitment process.
It may not be copied, modified, or used for any other purposes.
