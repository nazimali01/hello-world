'use strict';

var es = require('event-stream');
var fs = require('fs');
var path = require('path');

module.exports = function () {

    function TemplateInject(data) {
        var content = data._contents.toString('utf8');
        var sourcePath = data.history[0];

        var regex = /require\(\'(.+)\.html\'\)/g;
        var newContent = content.replace(regex, function (match, matchGroup) {
            var filePath = path.resolve(sourcePath, '..', matchGroup + '.html');
            var templateBuffer = fs.readFileSync(filePath);
            var template = JSON.stringify(templateBuffer.toString('utf8'));
            return template;
        });

        if (content !== newContent) {
            data._contents = new Buffer(newContent, 'utf-8');
        }
        this.emit('data', data);
    }

    return es.through(TemplateInject);
};
