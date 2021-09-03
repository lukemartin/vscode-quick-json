// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.commands.registerCommand('quick-json.new', function () {
		vscode.commands.executeCommand('workbench.action.files.newUntitledFile').then(() => {
			const editor = vscode.window.activeTextEditor;
			const doc = editor.document;
			vscode.languages.setTextDocumentLanguage(doc, 'json').then(() => {
				vscode.commands.executeCommand('editor.action.clipboardPasteAction').then(() => {
					vscode.commands.executeCommand('editor.action.formatDocument');
				});
			});
		});
	});

	context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate,
};
