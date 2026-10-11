# Sticky Mic for Claude

On claude.ai, the dictation mic disappears as soon as you type or paste
anything into the message box. That makes it hard to paste a link or type
a first line and then keep going by voice. Sticky Mic keeps a mic button
next to Send so you can dictate at any point.

It uses **Claude's own dictation**. The mic just presses Claude's built-in
Dictate button, so you get the same transcription as usual.

> Unofficial. Not affiliated with, endorsed by, or sponsored by Anthropic.
> Claude is a trademark of Anthropic.

## Install from source (Chrome or Edge)
1. Open `chrome://extensions` (Edge: `edge://extensions`).
2. Turn on **Developer mode**.
3. Click **Load unpacked** and select this folder.
4. Reload any open claude.ai tabs.

## How it works
When you type, claude.ai hides its Dictate button but leaves it in the
page. Sticky Mic shows a mic just left of Send that clicks that real
Dictate button. Once Claude shows its own mic next to Send (after you've
dictated once), Sticky Mic's button steps aside so there's only one.

## Privacy
Sticky Mic requests no permissions, collects no data, and makes no network
requests. See [PRIVACY.md](PRIVACY.md).

## Limitations
- Works on claude.ai in the browser only. The Claude desktop app doesn't
  support extensions.
- If Anthropic redesigns the chat box, the selectors at the top of
  `mic.js` may need updating.

## Packaging for the Chrome Web Store
Run `./package.sh` to build `dist/sticky-mic-for-claude-<version>.zip`.

## License
[MIT](LICENSE)
