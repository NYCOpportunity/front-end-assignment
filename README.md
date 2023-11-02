# Front-end Assignment

Create an **accessible form** that uses questions fetched from a REST endpoint. The questions will ask for **personally identifiable information** from public users who will fill it out. For this particular exercise the CSS styling of the form does not need to be considered but the HTML layout will be. Create an application script in `js/default.js` using **JavaScript ES syntax**. Use as many native features as possible such as the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and **async**/**await**.

## Instructions

### To get the repository running

Download a copy of this repository.

Go to the project directory and install dependencies.

```shell
$ npm install
```

Then start the development server.

```shell
$ npm start
```

This will start a simple Express app that will serve the contents of the [**./dist**](dist) directory where you will be placing your code.

### 1) Fetch questions

GET questions from the endpoint `https://mocki.io/v1/84954ef5-462f-462a-b692-6531e75c220d`. The response will be:

```json
[
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
]
```

#### Schema

* `id` The ID of the question’s input field.
* `label/legend` The plaintext label/legend content for the question’s input field.
* `name` The name of the question’s input field.
* `type` The type of the question’s input field.
* `pattern` The question’s validation pattern.
* `required`  Boolean value. Whether the question’s input field is required or not.
* `options`  The values of a radio or checkbox question’s fieldset.
  * `id`  The ID of the option’s input field.
  * `label`  The plaintext label content for the option’s input field.
  * `value`  The value of the radio or checkbox.

### 2) Render the form

Build out the form using the JSON response. You may use a component framework or templating language of your choice for this portion.

Use the [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#the_constraint_validation_api) to ensure the required fields collected are correct and their format is correct. Present the user with proper messaging based on the issue with their input.

The form must be legible to screen readers. Proper ARIA labeling for invalid messaging needs to be used when the user blurs from an input or when they attempt to submit an invalid form.

### 3) Submit results to the submission handler

POST form submissions to this endpoint: `https://0211560d-577a-407d-94ab-dc0383c943e0.mock.pstmn.io/submitform`. A stringified JSON object should be passed as the body of the request, and the header should include `"Content-Type": "application/json"`. **For the sake of this exercise**, any successful submission body `200` should match the following exactly otherwise it will return a client-side error `404`.

```json
[
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
]
```

### Back-end

If you would like to see what the form service looks like on the back-end, you can browse a copy of the logic in the [**service.js**](service.js) file.

## Wrapping Up

Create a new GitHub repository for the completed challenge to share. Include any additional instructions needed to run the application.

#### Think about the following items and be prepared to discuss in our interview.

* Assuming this service would be able to provide a session token or require authentication in a live environment, describe how would you ensure that the response sent to the backend service is properly authenticated.

* Describe how you would ensure the form would not submit spam.

* Any other thoughts on improvements to this form outside of the direction given will be considered.
