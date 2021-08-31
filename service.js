response.status = 400;

const FORM = [
  {
    "id": "1111",
    "label": "First Name",
    "name": "nameFirst",
    "type": "text",
    "required": 1
  },
  {
    "id": "2222",
    "label": "Last Name",
    "name": "nameLast",
    "type": "text",
    "required": 1
  },
  {
    "id": "3333",
    "label": "Your Phone Number",
    "name": "contactPhone",
    "type": "tel",
    "pattern": "[0-9]{10}",
    "required": 0
  },
  {
    "id": "4444",
    "label": "Your Email",
    "name": "contactEmail",
    "type": "email",
    "required": 0
  },
  {
    "id": "5555",
    "legend": "Your preferred contact",
    "name": "contactPreferred",
    "type": "radio",
    "required": 1,
    "options": [
      {
        "id": "5555-1",
        "label": "Phone",
        "value": "phone"
      },
      {
        "id": "5555-2",
        "label": "Email",
        "value": "email"
      }
    ]
  }
];

const FORM_DATA = [
  {
    "name": "nameFirst",
    "value": "Jane"
  },
  {
    "name": "nameLast",
    "value": "Doe"
  },
  {
    "name": "contactPhone",
    "value": "9999999999"
  },
  {
    "name": "contactEmail",
    "value": "jd@email.com"
  },
  {
    "name": "contactPreferred",
    "value": "phone"
  }
];

if (request.request_method === 'GET') {
  response.status = 200;

  response.headers['Content-Type'] = 'application/json';

  response.body = FORM;
}

if (request.request_method === 'POST') {
  var submission = JSON.parse(request.body);

  var res = {};

  if (JSON.stringify(submission) === JSON.stringify(FORM_DATA)) {
    response.status = 200;

    response.body = {
      message: 'Thank you for your submission.'
    }
  } else {
    response.body = {
      message: 'Your submission is invalid, please try again.'
    }
  }
}
