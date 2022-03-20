import modal from './model.js';
import listView from './view/listView.js';

console.log('Controller module');

async function init() {
    listView.showLoader(true);
    await modal.loadEmails();
    listView.showLoader(false);
    console.log('emails', modal.getEmails());
    listView.addEmailList(modal.getEmails());
}

init();