#!/usr/bin/env node

var yargs = require('yargs');
var publisher = require('artifactory-publisher');
var path = require('path');

var conf = yargs
    .help('help')
    .version('0.0.1', 'v')
    .alias('v', 'version')
    .showHelpOnFail(true)
    .usage('Upload / publish a file to artifactory.\nUsage: $0')
    .config('c')
    .options('f', {
        alias: 'file',
        describe: 'A path to a file to publish',
        type: 'string',
        demand: true
    })
    .options('t', {
        alias: 'target',
        describe: 'Fully qualified url of artifact. (https://example.com/repository/artifact.pkg)',
        demand: true
    })
    .options('u', {
        alias: 'user',
        describe: 'Artifactory user name'
    })
    .options('p', {
        alias: 'password',
        describe: 'Artifactory user password'
    })
    .implies('p', 'u')
    .options('proxy', {
        describe: 'A proxy url to use for sending http requests'
    })
    .argv;

var options = {};
if (conf.user) {
    options.credentials = {
        username: conf.user,
        password: conf.password
    };
}

if (conf.proxy) {
    options.proxy = conf.proxy;
}

publisher.publish(conf.file, conf.target, options).then(function () {
    console.log('Upload successfully finished!');
    process.exit(0);
}).catch(function (err) {
    console.log('Upload failed!', err.message);
    process.exit(1);
});