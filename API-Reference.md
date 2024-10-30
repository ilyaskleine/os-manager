# API Reference
Documentation of all REST-API entpoints used in the *os-manager* application.
## /api/quotes
Returns all public quotes from the database. \
|  METHOD | Description  |  Param. | Body  | Returns  |
|---|---|---|---|---|
|  GET |  Returns all public quotes. | ---  | ---  | `{ quotes: [...] }`  |
| POST  | Add new quote to the database  | ---  | `content, person, context`  | ---  |