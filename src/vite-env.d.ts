/// <reference types="vite/client" />

interface ClaudeAPI {
  complete(params: { messages: { role: string; content: string }[] }): Promise<string>;
}

interface Window {
  claude: ClaudeAPI;
}
