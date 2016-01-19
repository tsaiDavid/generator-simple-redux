'use strict';

let normalizeUrl = require('normalize-url');
let path = require('path');
let humanizeUrl = require('humanize-url');
let yeoman = require('yeoman-generator');
let mkdirp = require('mkdirp');
let _s = require('underscore.string');


module.exports = yeoman.generators.Base.extend({
	init: function() {
    var cb = this.async();

    this.prompt([{
			name: 'moduleName',
			message: 'What do you want to name your app?',
			default: this.appname.replace(/\s/g, '-'),
			filter: function(val) {
				return _s.slugify(val);
			}
		}, {
			name: 'githubUsername',
			message: 'What is your GitHub username?',
			store: true,
			validate: function(val) {
				return val.length > 0 ? true : 'You have to provide a username';
			}
		}, {
			name: 'website',
			message: 'What is the URL of your website?',
			store: true,
			validate: function(val) {
        return val.length > 0 ? true : 'You have to provide a website URL';
			},
			filter: function(val) {
        return normalizeUrl(val);
			}
		}],
    function(props) {
      var asyncCount = 0;
      this.moduleName = props.moduleName;
      this.camelModuleName = _s.camelize(props.moduleName);
      this.githubUsername = props.githubUsername;
      this.website = props.website;
      this.humanizedWebsite = humanizeUrl(this.website);
			this.copy('gitignore', '.gitignore');
			this.copy('eslintrc', '.eslintrc');
			this.copy('index.html');
			this.copy('devServer.js');
			this.copy('webpack.config.dev.js');
			this.copy('webpack.config.prod.js');
			this.copy('README.md');
			this.template('_package.json', 'package.json');
      this.copy('babelrc', '.babelrc');

      this.directory('src', 'src');

      cb();

    }.bind(this));
	},
	install: function() {
    this.installDependencies({ bower: false });
  }
});
