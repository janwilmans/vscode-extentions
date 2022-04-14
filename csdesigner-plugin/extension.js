const vscode = require('vscode');

function feeling_ducky(term) {
	vscode.env.openExternal("https://duckduckgo.com/?q=!ducky+site%3A+copperspice.com+" + term);
}

function activate(context) {

	let disposable = vscode.commands.registerCommand('csdesigner.start', function (uri) {
		vscode.env.openExternal(uri);
		//vscode.window.showInformationMessage('csdesigner start!' + uri);
	});
	context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand('csdesigner.search', function () {
		const editor = vscode.window.activeTextEditor;
		if (!editor) return;

		let searchFor = editor.document.getText(editor.selection);
		feeling_ducky(searchFor);
	});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
