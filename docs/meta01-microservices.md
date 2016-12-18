# METAMODEL 01: Microservices

The main objective of this metamodel is to give a easier way for describing a microservice
and its connections. We will suppose we have ours apps in docker containers.

**Samples of intances**

- [Example 01: Pets](./images/microservices-editor/microservice-editor-example.png)

![metamodel 01: microservices](./images/metamodel01-microservice-v2.png)

There are five important classes on this metamodel `Application`, `Microservice`, `Connection`, `Group` and `ConnectionType`.

### Application
This class is the root of metamodel.

##### Restrictions

1. Can't there are two microservices with same name.
2. Can't there are two microservices with same port.

### Microservice

This class represents components from ours app and you can define four parameters
for each components.

Property | Type | Description
------------ | ------------- | ----------
name | `string` | **Required**. The name of the component.
port | `integer` | **Optional**. The port where the component will be exposed. If you does not give it, the component will be exposed on `imagePort`.
image | `string` | **Required**. The identifier of docker image that contains the component.
imagePort | `integer` | **Required**. The port which is defined in docker image for exposing the component.

##### Restrictions

1. If there aren't port, it will be equal to imagePort.
2. One microservice can't have two connection with type EXTERNAL.

### Group

This class permits to group components, you can associate components that have any relation.

Property | Type | Description
------------ | ------------- | ----------
name        | `string` | **Required**. Name of the group.

##### Restrictions

1. Two groups have not the same name

### Connection

This class establish the relationship between one component and the rest of the world. One component
can be connected with others by `INTERNAL` connections or/and can be the entrypoint
of the microservice from out world by a `EXTERNAL` connection.

Property | Type | Description
------------ | ------------- | ----------
type        | `ConnectionType` | **Required**. Type of connection.

##### Restrictions

1. If type is EXTERNAL can't have relation "to".

### ConnectionType

This is not a class, this is an enumerate that defines what type of connections you can
choose.

Property | Description
------------ | ----------
INTERNAL     | Defines an internal connection between two component on the microservice.
EXTERNAL     | Defines an external connection, affects only one component and indicates this component is an entrypoint of microservice.
