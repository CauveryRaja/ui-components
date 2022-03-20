let parentElm = document.getElementsByClassName('email-list')[0];

function addEmailList(emails) {
    let children = '';
    if(emails.length) {
        emails.forEach(mail => {
            children += getEmailEntry(mail);
        });
    }
    else {
        children = getEmptyMessage();
    }
    parentElm.insertAdjacentHTML('beforeend', children);
}

function getEmailEntry(mail) {
    return `<li class="email-entry">
                <h3 class="entry-name">${mail.subject}</h3>
                <p class="entry-subject">${mail.body}</p>
            </li>`;
}

function getEmptyMessage() {
    return `<div class="no-email-entry">No items to view</div>`;
}

function showLoader(show) {
    parentElm.innerHTML = '';
    if(show) {
        parentElm.insertAdjacentHTML('beforeend', '<div>loading...</div>');
    }
}

export default {
    addEmailList,
    showLoader
}