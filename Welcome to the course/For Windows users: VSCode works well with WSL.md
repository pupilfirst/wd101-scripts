> **Not using Windows?**\
> Mark this lesson as complete, and move along.

## Are you running an older version of Windows?

If you're using virtual machine software like _VMWare Workstation Player_ or _VirtualBox_, then install Visual Studio Code _inside_ your virtual machine's Ubuntu OS, instead of inside Windows.

## For Windows 10 & 11 users...

If you're running Windows 10 or 11, you're probably using WSL. This means your code will be kept inside the _Ubuntu_ OS running inside Windows.

When Visual Studio Code is installed inside a Windows PC that has WSL enabled, you'll need to install an additional plugin - [Remote - WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) that will let you access files on the Ubuntu system running _inside_ Windows transparently.

1. Install the [Remote - WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) Visual Studio Code extension.
2. In your Ubuntu terminal, navigate to a folder you want to open with Visual Studio Code, and type `code .`. That's `code` followed by the `.` (period, or full-stop) symbol.

This will open the folder inside Visual Studio Code running natively in Windows, but you'll be editing files inside the Ubuntu OS.

> **Reminder:** Typing `code .` is the quickest & most reliable way to open Visual Studio Code from the command-line.