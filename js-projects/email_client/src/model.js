let emails = [];
let mockData = [{
    id: '1001',
    sender: '',
    recepients: [],
    subject: 'Email subject 1',
    body: 'Hi, This is abc 1. How are you doing ? Regards, ABC 1',
    category: 'promotions',
    read: true 
}, {
    id: '1002',
    sender: '',
    recepients: [],
    subject: 'Email subject 2',
    body: 'Hi, This is abc 2. How are you doing ? Regards, ABC 2',
    category: 'social',
    read: false 
}, {
    id: '1003',
    sender: '',
    recepients: [],
    subject: 'Email subject 3',
    body: 'Hi, This is abc 3. How are you doing ? Regards, ABC 3',
    category: 'important',
    read: false
}];

function loadEmails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            emails = mockData;
            resolve();
        }, 2000);
    });
};

function getEmails() {
    return emails;
}

export default {
    loadEmails,
    getEmails
}