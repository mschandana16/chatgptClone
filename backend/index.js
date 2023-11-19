const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  organization: "org-PqVVkqrI04fVlg0WdcvRtEOs",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// const response = await openai.listEngines();

async function main() {
  const completion = await openai.completions.create({
    model: "text-davinci-003",
    prompt: "Say this isatest.",
    max_tokens: 7,
    temperature: 0,
  });

  console.log(completion);
}
main();
