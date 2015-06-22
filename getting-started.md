# Getting Started
## Requirements
Mobo requires a [Node.js runtime](https://nodejs.org/) of version 0.10.x or higher to run. Version 0.12.x or higher is recommended.

The target wiki must have the [Semantic MediaWiki](http://www.mediawiki.org/wiki/Extension:Semantic_MediaWiki)
and [Semantic Forms](http://www.mediawiki.org/wiki/Extension:Semantic_Forms) extension installed.
It is highly recommended to install the [PerserFunctions Extension](https://www.mediawiki.org/wiki/Extension:ParserFunctions),
since mobos default templates make use of it. It is possible to adjust/use templates that work without it, instead.

Mobo has optional support for the [HeaderTabs](http://www.mediawiki.org/wiki/Extension:Header_Tabs) and [TemplateData](http://www.mediawiki.org/wiki/Extension:TemplateData) (VisualEditor) extension.

## Installation & Update
In most cases mobo should be installed locally on the machine the model is developed on.

It is possible however, to install and use mobo on a server for more advanced use cases, like automatic deployment.

### Global Installation
```sh
npm install -g mobo         # Installs mobo globally.
sudo npm install -g mobo    # Linux: Admin privileges are required
```

#### Update
```sh
npm update -g mobo          # global mobo update to latest
npm update -g mobo@1.6.0    # global mobo update to 1.6.0
```

**IMPORTANT**: New versions of mobo can introduce changed default templates.
You might have to update your project templates with the current version.
To do so use the `mobo --update` command. This command will make a backup of your current templates.

```sh
mobo --update
```

### Local Installation
If many different projects are managed by mobo it is usually better to install mobo locally into your project directory.
Those per-project installations allow to use a specific version of mobo (this information is stored in the `package.json` file).
Different projects can use different mobo versions.
If you want to set a fixed version number, use the [package.json version property](https://docs.npmjs.com/files/package.json#version).
```sh
mkdir newProject && cd newProject   # Creates and enters new directory
npm install mobo --save-dev         # Installs mobo locally
```
#### Update
```
npm update
```

### Advanced Installation (latest master, for developers)
```sh
git clone https://github.com/Fannon/mobo.git
cd mobo
npm install   # Installs all dependencies
npm link      # Creates/links the global alias to the current mobo installation
```

### Update:
```sh
git pull      # pull latest master
npm install   # Install / update the dependencies
```

## Run mobo
### Test if mobo has been successfuly installed
```sh
mobo -v       # Should print the mobo version number
```

### Create a new empty project
```sh
mkdir projectName
cd projectName
mobo --init
```
Please note that mobo will display errors if no upload settings have been set. See Configuration.

### Run mobo
Mobo runs in interactive mode by default. It supports several command line options.

```sh
mobo      # Runs mobo in interactive mode
mobo -r   # Runs mobo in non-interactive mode (will exit after run)
mobo -f   # Forces the upload of all files (will exit after run)
```

To see all available options, run mobo with the -h flag or refer to the [Command Line Options](cli.md) manual.

```sh
mobo -h   # View command line help
```

If mobo can't be added to your global path for some reason, it can be run manually:
```sh
node /path/to/mobo/cli.js
```

## Configuration
First you need to create a bot account for mobo on the target wiki at `Special:CreateAccount`.
The user should have the "Bot" and possibly the "Administrator" privileges (if you want to upload special/restricted pages).

The MediaWiki API needs to be enabled with write access. This should be the default since MW 1.14.
If your wiki denies the bot login, adjust your LocalSettings.php accordingly:

```php
// WARNING: Check your permissions. If needed make further constraints.
$wgEnableAPI = true;
$wgEnableWriteAPI = true;
$wgCrossSiteAJAXdomains = array( '*' );
```

Now the login credentials of the bot have to be set in the development model projekt. Please adjust the `settings.yaml` or `settings.json` accordingly.

```python
mw_server_url: 'http://semwiki-exp01.multimedia.hs-augsburg.de' # No trailing slash!
mw_server_path: 'mobo-demo'
mw_username: 'mobo'
mw_password: 'verysafepassword'
```

To view all available settings, enter `mobo -c` to print out the currently used configuration,
including all inherited default values. For documentation, please refer to the [settings](examples/init/settings.md) manual.

If you want to change a setting, simply copy it into your settings file and adjust it. Enter `mobo -c` again to check if it was applied.

```sh
mobo -c   # prints out all settings and their current state
```