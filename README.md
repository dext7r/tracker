# Tracker

Tracker is a JavaScript library for tracking various events on a web page, such as mouse events, history events, hash changes, DOM events, and JavaScript errors.

<div align="center">

[![ci](https://github.com/dext7r/tracker/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/dext7r/tracker/actions/workflows/ci.yml)
[![license](https://img.shields.io/github/license/dext7r/tracker.svg)](https://github.com/dext7r/tracker/blob/master/LICENSE#L1)
[![version](https://img.shields.io/npm/v/@dext7r/tracker)](https://github.com/dext7r/tracker)
[![language](https://img.shields.io/github/languages/top/dext7r/tracker)](https://github.com/dext7r/tracker/search?l=css)
[![last](https://img.shields.io/github/last-commit/dext7r/tracker.svg)](https://github.com/dext7r/tracker/commits)
[![stars](https://img.shields.io/badge/Hosted-Vercel-brightgreen?style=flat&logo=Vercel)](https://amis.vercel.app/)

</div>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the library using npm:

```bash
npm install @dext7r/tracker
```

## Usage

```JavaScript
import Tracker from '@dext7r/tracker';

// Initialize the Tracker with options
const tracker = new Tracker({
  requestUrl: 'https://nestjs.h7ml.cn//system/track',
  historyTracker: true,
  hashTracker: true,
  domTracker: true,
  jsError: true,
  // Add more configuration options as needed
});

// Set user ID and extra information
tracker.setUserId('user123');
tracker.setExtra({ plan: 'premium', source: 'website' });

// Send custom tracking data
tracker.sendTracker({
  event: 'customEvent',
  targetKey: 'buttonClick',
  // Add more data as needed
});
```

## Configuration

The `Tracker` class accepts various configuration options:

- `requestUrl`: The API endpoint to send tracking data.
- `historyTracker`: Enable or disable tracking of history events.
- `hashTracker`: Enable or disable tracking of hash changes.
- `domTracker`: Enable or disable DOM element tracking.
- `jsError`: Enable or disable tracking of JavaScript errors.
- `sdkVersion`: The version of the Tracker SDK.
- `extra`: Additional information to include in tracking data.

## Examples

```JavaScript
// Initialize Tracker with minimal configuration
const tracker = new Tracker({ requestUrl: 'https://nestjs.h7ml.cn//system/track' });

// Set user ID
tracker.setUserId('user123');

// Set extra information
tracker.setExtra({ plan: 'premium', source: 'website' });

// Send custom tracking data
tracker.sendTracker({
  event: 'customEvent',
  targetKey: 'buttonClick',
  // Add more data as needed
});
```

## Contributing

If you'd like to contribute to this project, feel free to open issues or submit pull requests. Contributions are welcome!

## License

This project is licensed under the [MIT License](./LICENSE).

Make sure to replace the placeholder URLs, API endpoints, and other details with your actual project information. If you have specific sections or details you want to highlight, feel free to modify the template accordingly.
