# Azure App Service Node Issue

This repository has a super simple node.js app with no dependencies in order to reproduce an issue running a node.js app in a Windows Web App

## Pre-requisites

- Node 14

## Getting started

This is the most simple node server that just prints "hello world" for all requests. To test it locally clone the repo and then run the following:

```bash
npm start
```

Then visit the browser at [http://localhost:3000](http://localhost:3000).

## Issue in Azure

The issue in Azure can be seen if you visit the webapp at the following URL:

[https://azure-webapp-node-issue.azurewebsites.net/](https://azure-webapp-node-issue.azurewebsites.net/)

The response is:

```bash

```

And you can see the logs below:

```bash

```
