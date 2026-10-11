# Claude Mic Always Visible

Keeps a mic button for Claude's own dictation visible on claude.ai after
you type or paste text, so you can keep adding to a message by voice.

## Install (Chrome or Edge)
1. Open `chrome://extensions` (Edge: `edge://extensions`).
2. Turn on **Developer mode**.
3. Click **Load unpacked** and select this folder.
4. Reload any open claude.ai tabs.

## How it works
When you type, claude.ai hides its Dictate button but leaves it in the
page. This extension shows a mic just left of Send that clicks that real
Dictate button, so recording and transcription are Claude's own. Once
Claude shows its own mic next to Send (after you've dictated once), the
extension's mic steps aside. It needs no permissions and sends nothing
anywhere.

If Anthropic redesigns the chat box and the mic stops showing, the
selectors at the top of `mic.js` will need updating.
