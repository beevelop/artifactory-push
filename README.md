> This project is no longer maintained! Please use [artifactory-publisher](https://www.npmjs.com/package/artifactory-publisher) directly.

----

[![npm](https://img.shields.io/npm/v/artifactory-push.svg?style=flat-square)](https://www.npmjs.com/package/artifactory-push)
[![GitHub issues](https://img.shields.io/github/issues/beevelop/artifactory-push.svg?style=flat-square)](https://github.com/beevelop/artifactory-push/issues)
[![bitHound Score](https://www.bithound.io/github/beevelop/artifactory-push/badges/score.svg?)](https://www.bithound.io/github/beevelop/artifactory-push)

# artifactory-push

> simple command line tool for publishing to artifactory

## Installation
```
sudo npm install -g artifactory-push
```

## Options
```
Options:
  --help          Show help [boolean]
  -v, --version   Show version number [boolean]
  -c              Path to JSON config file
  -f, --file      A path to a file to publish [string] [required]
  -t, --target    Fully qualified url of artifact. (https://example.com/repository/artifact.pkg) [required]
  -u, --user      Artifactory user name
  -p, --password  Artifactory user password
  --proxy         A proxy url to use for sending http requests
```

## Example
```
artifactory-push -f awesome.pkg -t https://artifactory.example.com/artifactory/my-repo/test.pkg -u john -p swordfish
```
