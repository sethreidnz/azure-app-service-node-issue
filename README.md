# Azure App Service Node Issue

This repository has a super simple node.js app with no dependencies in order to reproduce an issue running a node.js app in a Windows Web App. The issue is that the Web App responds with `You do not have permission to view this directory or page.` when there is a node.js application deployed to a Node 14 Windows Web App.

## Running it locally

Pre-requisites

- Node 14

```bash
git clone https://github.com/sethreidnz/azure-app-service-node-issue
cd azure-app-service-node-issue
npm start
```

Then visit the browser at [http://localhost:3000](http://localhost:3000) and you will see "Hello world" printed to the screen.

## The application

The app is super simple and is just one file `index.js` that will return hello world. There are no dependencies or anything complex. It has a start npm script in it's package.json that will run this file with node.

## Issue in Azure Web App

I have followed the [instructions in this guide](https://docs.microsoft.com/en-us/azure/app-service/configure-language-nodejs?pivots=platform-windows) and deployed the code. You can visit it here:

[https://azure-webapp-node-issue.azurewebsites.net/](https://azure-webapp-node-issue.azurewebsites.net/)

When you visit the app it will say:

```bash
You do not have permission to view this directory or page.
```

### The web app

It is a webapp in east us, runtime of Node 14 on Windows. The exported template shows:

```
"nodeVersion": "~14",
```

### Files deployed

This project has a github action that deploys to the above webapp. You can see the way it works in [.github/workflows/build-and-deploy.yml](.github/workflows/build-and-deploy.yml).

Also a screenshot of the file structure as in the App Service Explorer looks like this:

![App Servie Editor Screenshot](images/AppServiceEditorView.png)

### The logs

I can't find anything interesting other than just the printing out of the same html document complaining about permisions:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>IIS Detailed Error - 403.14 - Forbidden</title>
    <style type="text/css">
      <!--body{margin:0;font-size:.7em;font-family:Verdana,Arial,Helvetica,sans-serif;}code{margin:0;color:#006600;font-size:1.1em;font-weight:bold;}.config_source code{font-size:.8em;color:#000000;}pre{margin:0;font-size:1.4em;word-wrap:break-word;}ul,ol{margin:10px 0 10px 5px;}ul.first,ol.first{margin-top:5px;}fieldset{padding:0 15px 10px 15px;word-break:break-all;}.summary-container fieldset{padding-bottom:5px;margin-top:4px;}legend.no-expand-all{padding:2px 15px 4px 10px;margin:0 0 0 -12px;}legend{color:#333333;;margin:4px 0 8px -12px;_margin-top:0px;font-weight:bold;font-size:1em;}a:link,a:visited{color:#007EFF;font-weight:bold;}a:hover{text-decoration:none;}h1{font-size:2.4em;margin:0;color:#FFF;}h2{font-size:1.7em;margin:0;color:#CC0000;}h3{font-size:1.4em;margin:10px 0 0 0;color:#CC0000;}h4{font-size:1.2em;margin:10px 0 5px 0;}#header{width:96%;margin:0 0 0 0;padding:6px 2% 6px 2%;font-family:"trebuchet MS",Verdana,sans-serif;color:#FFF;background-color:#5C87B2;}#content{margin:0 0 0 2%;position:relative;}.summary-container,.content-container{background:#FFF;width:96%;margin-top:8px;padding:10px;position:relative;}.content-container p{margin:0 0 10px 0;}#details-left{width:35%;float:left;margin-right:2%;}#details-right{width:63%;float:left;overflow:hidden;}#server_version{width:96%;_height:1px;min-height:1px;margin:0 0 5px 0;padding:11px 2% 8px 2%;color:#FFFFFF;background-color:#5A7FA5;border-bottom:1px solid #C1CFDD;border-top:1px solid #4A6C8E;font-weight:normal;font-size:1em;color:#FFF;text-align:right;}#server_version p{margin:5px 0;}table{margin:4px 0 4px 0;width:100%;border:none;}td,th{vertical-align:top;padding:3px 0;text-align:left;font-weight:normal;border:none;}th{width:30%;text-align:right;padding-right:2%;font-weight:bold;}thead th{background-color:#ebebeb;width:25%;}#details-right th{width:20%;}table tr.alt td,table tr.alt th{}.highlight-code{color:#CC0000;font-weight:bold;font-style:italic;}.clear{clear:both;}.preferred{padding:0 5px 2px 5px;font-weight:normal;background:#006633;color:#FFF;font-size:.8em;}-->
    </style>
  </head>
  <body>
    <div id="content">
      <div class="content-container">
        <h3>HTTP Error 403.14 - Forbidden</h3>
        <h4>
          The Web server is configured to not list the contents of this
          directory.
        </h4>
      </div>
      <div class="content-container">
        <fieldset>
          <h4>Most likely causes:</h4>
          <ul>
            <li>
              A default document is not configured for the requested URL, and
              directory browsing is not enabled on the server.
            </li>
          </ul>
        </fieldset>
      </div>
      <div class="content-container">
        <fieldset>
          <h4>Things you can try:</h4>
          <ul>
            <li>
              If you do not want to enable directory browsing, ensure that a
              default document is configured and that the file exists.
            </li>
            <li>
              Enable directory browsing using IIS Manager.
              <ol>
                <li>Open IIS Manager.</li>
                <li>In the Features view, double-click Directory Browsing.</li>
                <li>
                  On the Directory Browsing page, in the Actions pane, click
                  Enable.
                </li>
              </ol>
            </li>
            <li>
              Verify that the
              configuration/system.webServer/directoryBrowse@enabled attribute
              is set to true in the site or application configuration file.
            </li>
          </ul>
        </fieldset>
      </div>
      <div class="content-container">
        <fieldset>
          <h4>Detailed Error Information:</h4>
          <div id="details-left">
            <table border="0" cellpadding="0" cellspacing="0">
              <tr class="alt">
                <th>Module</th>
                <td>&nbsp;&nbsp;&nbsp;DirectoryListingModule</td>
              </tr>
              <tr>
                <th>Notification</th>
                <td>&nbsp;&nbsp;&nbsp;ExecuteRequestHandler</td>
              </tr>
              <tr class="alt">
                <th>Handler</th>
                <td>&nbsp;&nbsp;&nbsp;StaticFile</td>
              </tr>
              <tr>
                <th>Error Code</th>
                <td>&nbsp;&nbsp;&nbsp;0x00000000</td>
              </tr>
            </table>
          </div>
          <div id="details-right">
            <table border="0" cellpadding="0" cellspacing="0">
              <tr class="alt">
                <th>Requested URL</th>
                <td>&nbsp;&nbsp;&nbsp;http://azure-webapp-node-issue:80/</td>
              </tr>
              <tr>
                <th>Physical Path</th>
                <td>&nbsp;&nbsp;&nbsp;C:\home\site\wwwroot</td>
              </tr>
              <tr class="alt">
                <th>Logon Method</th>
                <td>&nbsp;&nbsp;&nbsp;Anonymous</td>
              </tr>
              <tr>
                <th>Logon User</th>
                <td>&nbsp;&nbsp;&nbsp;Anonymous</td>
              </tr>
            </table>
            <div class="clear"></div>
          </div>
        </fieldset>
      </div>
      <div class="content-container">
        <fieldset>
          <h4>More Information:</h4>
          This error occurs when a document is not specified in the URL, no
          default document is specified for the Web site or application, and
          directory listing is not enabled for the Web site or application. This
          setting may be disabled on purpose to secure the contents of the
          server.
          <p>
            <a
              href="http://go.microsoft.com/fwlink/?LinkID=62293&amp;IIS70Error=403,14,0x00000000,14393"
              >View more information &raquo;</a
            >
          </p>
          <p>Microsoft Knowledge Base Articles:</p>
        </fieldset>
      </div>
    </div>
  </body>
</html>
```
