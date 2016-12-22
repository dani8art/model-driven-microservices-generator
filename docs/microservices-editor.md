# Editor 01: Microservices

This section describes the microservices editor with which it is possible to create or to modify instances of [METAMODEL 01](./meta01-microservices.md), moreover, each component of this editor is detailed. In the following figure you can find an instances of this metamodel.

![Example 01: pets](./images/microservices-editor/microservice-editor-example.png)

This editor is composed of the following components:

### Microservice

This component represents the concept microservice which is defined in [here](./meta01-microservices.md#microservice). It is possible to see three microservice: pets, nginx and accounts, in the example that is showing above.

![Microservice on editor](./images/microservices-editor/microservice.png)

### Group

This component represents the concept of group which is defined in [here](./meta01-microservices.md#group). it is possible to see two groups in the example that is showing above, some microservices are grouped by database-typed microservices and others are grouped by backend-typed microservices.

![Microservice on editor](./images/microservices-editor/group.png)

### Connection

It is possible to use two type of connection:

#### External
This component represents the concept of external connection which is defined in [here](./meta01-microservices.md#connection).

![Microservice on editor](./images/microservices-editor/output-connection.png)

#### Internal
This component represents the concept of internal connection which is defined in [here](./meta01-microservices.md#connection).

![Microservice on editor](./images/microservices-editor/internal-connection.png)
