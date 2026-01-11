# Integrating Visual Studio Code with a local LLM running in LM Studio

... watched some videos, read some doc pages...

 1. Set up LM studio and download at least one model.
 2. Set up the API server of LM Studio, and test it: See [curl-test-llm-api.cmd](./curl-test-llm-api.cmd) . Worked fine for me!
 3. Add the Continue extension to Visual Studio Code.
 4. Edit the local config (~/.continue/config.yaml) - see [config.yaml](./config.yaml) . Don't quite know about the roles defined there...
    * *source:* https://docs.continue.dev/customize/model-providers/top-level/lmstudio

 Works fine at this point - I might want to explore further, especially regarding agent mode / its `/init` command / the `CONTINUE.md` file...