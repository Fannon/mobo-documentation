## Getting Started
### Requirements
Mobo requires a Node.js runtime of version 0.10.x or higher to run.

The target wiki must have the [Semantic MediaWiki](http://www.mediawiki.org/wiki/Extension:Semantic_MediaWiki) and [Semantic Forms](http://www.mediawiki.org/wiki/Extension:Semantic_Forms) extension installed.

Mobo has optional support for the [HeaderTabs](http://www.mediawiki.org/wiki/Extension:Header_Tabs) and [TemplateData](http://www.mediawiki.org/wiki/Extension:TemplateData) extension.

### Installation
In most cases mobo should be installed locally on the machine the model is developed on. It is possible to install and use mobo on a server for more advanced use cases, like automatic deployment.

```sh
$ npm install -g mobo               # Installs mobo globally.
$ sudo npm install -g mobo          # Linux: Admin privileges are required
```

If many different projects are managed by mobo it is usually better to install mobo locally into your project directory. Those per-project installations allow to use a specific version of mobo (this information is stored in the `package.json` file). Different projects can use different mobo versions.
```sh
$ mkdir newProject && cd newProject # Creates and enters new directory
$ npm install mobo --save-dev       # Installs mobo locally
```

Advanced Installation (latest master, for developers)
```sh
$ git clone https://github.com/Fannon/mobo.git
$ cd mobo
$ npm install # Installs all dependencies
$ npm link # Creates / links the global alias to the current mobo installation
```

### Configuration
First your wiki needs a bot account for mobo. The user should have the "bot" and possibly the "administrator" (if you want to upload special pages) privileges.

The MediaWiki API needs to be enabled with write access. This is the default setting since MW 1.14. If the wiki doesn't work right out of the box, adjust your LocalSettings.php accordingly:

```php
// WARNING: Check your permissions and if needed make further constraints.
$wgEnableAPI = true;
$wgEnableWriteAPI = true;
$wgCrossSiteAJAXdomains = array( '*' );
```

Now the login credentials of the bot have to be set. Please adjust the `settings.json` in your project directory accordingly.

```json
{
    "mw_server_url": "http://semwiki-exp01.multimedia.hs-augsburg.de",
    "mw_server_path": "/mobo-demo",
    "mw_username": "mobo",
    "mw_password": "verysafepassword"
}
```

For more options, enter `mobo -c` to print out the currently used configuration, including all inherited default values and refer to the [settings](examples/init/settings.md) manual.
If you want to change a setting, simply copy it into your settings.json and adjust it. Enter `mobo -c` again to check if it was applied.

```sh
$ mobo -c   # prints out all settings and their current state
```

### Run mobo
Mobo runs in interactive mode by default. It supports several command line options.

```sh
$ mobo      # Runs mobo in interactive mode
$ mobo -r   # Runs mobo in non-interactive mode (will exit after run)
$ mobo -f   # Forces the upload of all files (will exit after run)
```

To see all available options, run mobo with the -h flag or refer to the [Command Line Options](cli.md) manual.

```sh
$ mobo -h   # View command line help
```

If mobo can't be added to your global path for some reason, it can be run manually:
```sh
$ node /path/to/mobo/cli.js
```

### Update
Update mobo to the latest version through npm.

**WARNING:** Bigger updates may change the output mobo creates or even change /break existing features. It won't make changes to your development model however and you can always downgrade to a previous mobo version.

```sh
$ npm update -g mobo        # global mobo update to latest
$ npm update -g mobo@0.6.2  # global mobo update to 0.6.2
```

To update a local (project specific) mobo installation, specify / update your version number in your `package.json` first. `"mobo": "0.6.x",` will install / update all minor patches of mobo v0.6, while `"mobo": "*",` will always update to the latest version.

```sh
$ npm update                # local mobo update (package.json)
```

Note that new versions of mobo can introduce changed default templates.
You might have to update your project templates with the current version.
To do so use the `mobo --update` command. This command will make a backup of your current templates.

```sh
$ mobo --update
```