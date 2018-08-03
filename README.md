# tgr-snippet-pack

WARNING: experimental, partially completed

-------------------

A pack of code snippets for React, Jest, GraphQL with Typescript.

## Installation

In order to install an extension you need to launch the Command Pallete (Ctrl + Shift + P or Cmd + Shift + P) and type Extensions.
There you have either the option to show the already installed snippets or install new ones.

Launch VS Code Quick Open (Ctrl + P or Cmd + P), paste the following command, and press enter.

`ext install tgr-snippet-pack`

Alternatively you can open the extensions panel and search for 'TGRStack snippet'.

## Supported languages (file extensions)

* TypeScript (.ts)
* TypeScript React (.tsx)

## Snippets

Rather than using difficult to remember shortcuts, each snippet is available while writing a good name for it. 
Feel free to PR better naming schemas or Fork and make your own.

## Building

Snippets are in the `./snippets/` directory and I am using json5 to enable commenting.

The build script can be ran with `npm run prepare`. It combines some of the files into `/dist/` two files: `typescript.json` and `typescriptreact.json`.

## TGRStack contributions

* updated references to es9
* better naming
* compiled into a package of similarly written snippets
* no semicolons!

## References

* INIT'd my TS & TS-REACT snippets with [infeng/vscode-react-typescript](https://github.com/infeng/vscode-react-typescript)
* Majority of Jest.json5 based on [andys8/vscode-jest-snippets](https://raw.githubusercontent.com/andys8/vscode-jest-snippets/master/snippets/snippets.json)

## License

MIT
