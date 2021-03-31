# MassTransit / JavaScript Interoperability

This sample uses MassTransit (for .NET) combined with the [MassTransit (for JavaScript) NPM package](https://www.npmjs.com/package/masstransit-rabbitmq) to send requests from a node application and handle the subsequent response from a MassTransit Consumer (running in .NET). The services communicate via RabbitMQ (included in the `docker-compose.yml` file).

To start the .NET service, use `docker-compose up --build` in the `src/RequestService` folder.

Once started, run the node client (in the `node` folder) by running `npm install`, `npm run build`, and `npm start`.

The client should begin sending requests and displaying the responses. Type `quit` and press Enter to exit.

