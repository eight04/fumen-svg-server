fumen-svg-server
==============================

A web API which converts fumen data into SVG image. [REPL](https://fumen-svg-server--eight041.repl.co/?data=v115@vhGRQYHAvItJEJmhCAUGJKJJvMJTNJGBJFKYPAUEzP?EJG98AQmqhECDdCA)

Usage
-----

You can use the endpoint hosted on Cloudflare Functions:  
https://fumen-svg-server.pages.dev/

Send parameters in the query:

```
/?data=v115@vhGRQYHAvItJEJmhCAUGJKJJvMJTNJGBJFKYPAUEzP?EJG98AQmqhECDdCA
```

Other options are supported:

```
/?data=v115@vhGRQYHAvItJEJmhCAUGJKJJvMJTNJGBJFKYPAUEzP?EJG98AQmqhECDdCA&size=20
```

Note that the image is cached forever.

Run the server locally
-----------------------

1. Clone the repo.
2. `npm install && npm start`
