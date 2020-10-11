# Wolf3D module for OWD Client
> Wolfenstein 3D emulated with js-dos on Open Web Desktop

<p>
    <a href="https://github.com/owdproject/owd-client/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg" /></a>
    <a href="https://github.com/owdproject/owd-client"><img src="https://img.shields.io/badge/owd-client-3A9CB6" /></a>
    <a href="https://github.com/topics/owd-modules"><img src="https://img.shields.io/badge/owd-modules-888" /></a>
    <a href="https://hacklover.net/patreon"><img src="https://img.shields.io/badge/become-a%20patron-orange" alt="Become a Patron" /></a>
    <a href="https://hacklover.net/discord"><img src="https://img.shields.io/badge/chat-on%20discord-7289da.svg" alt="Join us on Discord" /></a>
</p>

## Demo
[Try it out](https://hacklover.net), just open the terminal and type "wolf3d"

## Overview
This module is an iframe that loads the original Wolfenstein 3D game using the [js-dos](https://github.com/caiiiycuk/js-dos) emulator. 
I chose to put Wolf3D in an iframe to keep OWD's code and resources lean, especially after closing the window.  

You can potentially create new modules and load different games simply by changing the path of the iframe.

## Quick install
- Copy the content of the `client` module folder into `owd-client/src/modules/wolf3d`
- Copy the content of the `client/public` public folder into `owd-client/public`
- Download the game [from here](https://hacklover.net/js-dos/games/WOLF3D.zip) ([mirror](https://mega.nz/file/qRlXUKpR#MN8d3hqPQhQaMCUtuVSmIqdgjbqYv3CGrQUo3sLPYF0)) and put it into `owd-client/public/js-dos/games/WOLF3D.zip`
- Add the reference of this module into `owd-client/config/modules.json` 

## License
This project is released under the [MIT License](LICENSE)