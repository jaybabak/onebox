# OneBox Repo

This is the repository for the prototype of onebox which is used to share data such as links, text, URL's, files and photos quickly between devices.

## Dependancies

The following dependancies have been added to improve developer workflow and build the application.

*  **Docker** Docker is a containerization software.
*  **PostgresSQL** PostgresSQL database.
*  **Nest.js** Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications.
*  **Node.js** Core back-end technology

## Getting started

Clone the repository

```bash
git clone git@github.com:jaybabak/onebox.git
```

Change directory

```bash
cd onebox/app
```

Install Nest.js CLI globally

```bash
npm i -g @nestjs/cli
```
## Build docler containers and start development environment

Run the following command to build the containers and start the development environment, make sure to be inside the "app" directory.

```bash
make up
```
Run the container and Nest.js development environment in quiet/silent mode.

```bash
make up-silent
```

## View the app

Visit [http://localhost:3000](http://localhost:3000).

Update /etc/hosts (mac) if you want to use a custom development domain with the following:

```bash
localhost:3000 onebox.dev
```

## Available Commands
  
| Command | Description |
|--|--|
| help | Prints the help screen. |
| up | Builds the application container and starts it with logging. |
| up-silent | Builds the application container and starts it in background mode, no active logging. |
| down | Stops and removes the docker containers. |
| stop | Stops the running containers. |
| shell | SSH into the main app container. |

## Help

To get a list of all available commands

```bash
make help
```

## Additional documentation

[Click Here](https://github.com/jaybabak/onebox/tree/main/app)