> **Important Note**: This lesson is for Windows users only. If you're using macOS, or Linux, simply mark this one as complete and move on.

## Why Linux, why not Windows?

You can develop perfectly fine on any operating system. However, many developers choose Linux or OSX (Mac) as their development environment because countless developer _tools_ are built for Unix systems _first_. This makes it typically (much) easier to set up on Unix systems. It is also generally accepted that the Unix command line is superior to the Windows command line.

In this course, we're assuming that you have access to a Linux development environment because it makes it easier to build and maintain the course content when it targets just one environment.


## Using WSL

Follow the official Windows instructions for installing WSL on your computer running Windows 10 or above:

https://docs.microsoft.com/en-us/windows/wsl/install

### Notes

1. You'll need administrative permissions on your computer to be able to set up WSL.

2. If you're running Windows 11, or an up-to-date version of Windows 10, you can set up WSL effortlessly - follow the instructions on the page linked above.

3. If you're running an older version of Windows 10, you might need to follow the [Manual installation steps for older versions](https://docs.microsoft.com/en-us/windows/wsl/install-manual). When following manual installation steps, remember to choose Ubuntu 20.04 as your distribution in [Step 6 - Install your Linux distribution of choice](https://docs.microsoft.com/en-us/windows/wsl/install-manual#step-6---install-your-linux-distribution-of-choice).

> At the end of the installation process, make sure that you have WSL version 2 installed by running `wsl --list -v` from the Windows command line to show running virtual machines and their WSL versions. The older version 1 of WSL is outdated and can cause issues when running applications inside it.