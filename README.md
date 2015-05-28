# grunt-juice-email

> Inline stylesheets into email HTML templates using LearnBoost's Juice

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-juice-email --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-juice-email');
```

## The "juice" task

### Overview
In your project's Gruntfile, add a section named `juice` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  juice: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

This task's options are the same as those passed to the juice function.
The available options can be found [here](https://github.com/LearnBoost/juice#juicefilepath-options-callback).

### Usage Examples

```js
grunt.initConfig({
  juice: {
    your_target: {
      options: {},
      files: {
      'dest/email-template.html': 'src/email-template.html',
      },
    },
  },
})
```

