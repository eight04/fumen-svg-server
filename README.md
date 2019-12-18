fumen-svg-server
==============================

[![Build Status](https://travis-ci.org/eight04/fumen-svg-server.svg?branch=master)](https://travis-ci.org/eight04/fumen-svg-server)
[![codecov](https://codecov.io/gh/eight04/fumen-svg-server/branch/master/graph/badge.svg)](https://codecov.io/gh/eight04/fumen-svg-server)
[![install size](https://packagephobia.now.sh/badge?p=fumen-svg-server)](https://packagephobia.now.sh/result?p=fumen-svg-server)

A web API which converts fumen data into SVG image. [REPL]()

Run the server
--------------

1. Clone the repo.
2. `npm install && npm start`

Usage
-----

Send parameters in the query:

```
/?data=v115@vhGRQYHAvItJEJmhCAUGJKJJvMJTNJGBJFKYPAUEzP?EJG98AQmqhECDdCA
```

Other options are supported:

```
/?data=v115@vhGRQYHAvItJEJmhCAUGJKJJvMJTNJGBJFKYPAUEzP?EJG98AQmqhECDdCA&size=20
```

Note that the image is cached forever.

