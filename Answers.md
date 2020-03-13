## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your Team Lead.

- [ ] Mention two parts of Express that you learned about this week.

The first part, my favorite about Express so far is middleware. When we first did a project in Express, and had to create some type of validation for each request that came through, writing a validation inline with all of the rest of the code just to store it in the database seemed overbearing. After learning we can just create a second function, and place it in between, to even just have a simple validation is really cool, and opens a lot of possibilities. It also helps keep things very organized. The second part I learned that I really like is routing with express. I love seeing things organized, so being able to compartmentalize all the endpoints makes it much easier to find specific pieces and work on them.

- [ ] Describe Middleware?

Middleware are special functions that we can create that can act as "gatekeepers", or can even manipulate requests that come through the server process. The are special in that they can either say, "this request is good, go to next();, or it can hault the request there, due to specifications and return it with an error.

- [ ] Describe a Resource?

A resource is a general term for any database object. It is a type of object that the database uses to store and send out via responses.

- [ ] What can the API return to help clients know if a request was successful?

The API should return a status code (200, 201, etc...) to let clients know the request was successful. They can even send success messages in the form of .json.

- [ ] How can we partition our application into sub-applications?

Stated above, using Express routing is a great way to partition our application into sub-applications. It creates specific files that manage each set of endpoints at a specific url. It makes it much easier to find, manage and edit changes to a specific endpoint or data set, rather than scrolling through a massive file to find it.
