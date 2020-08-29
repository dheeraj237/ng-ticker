# NG-Ticker

[![Build Status](https://travis-ci.com/dheeraj237/ng-ticker.svg?branch=master)](https://travis-ci.com/dheeraj237/ng-ticker)
![npm](https://img.shields.io/npm/dw/ng-ticker)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
![GitHub stars](https://img.shields.io/github/stars/dheeraj237/ng-ticker?style=social)

html marquee implementation as angular component library.

## Installation [npm](https://www.npmjs.com/package/ng-ticker)

```html
$ npm install ng-ticker
```

## Usage

### Import the module

```typescript
import { NgTickerModule } from 'ng-ticker';

@NgModule({
    imports: [ NgTickerModule ],
    ...
})
export class AppModule {}
```

### Template

```html
<ng-ticker></ng-ticker>
```

### Options

| Name        |          | Type   | Default | Description                                                                                                                   |
| ----------- | -------- | ------ | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [direction] | optional | string | 'left'  | animation direction of content inside `ng-ticker` element                                                                     |
| [speed]     | optional | string | '10s'   | speed of animation in direction in `seconds`. (speed need to be changed as width or content length on screen for better view) |
| [steps]     | optional | string | ''      | steps in animation transition to make vintage effect.                                                                         |

## Styling guide

There are several classes that help you to create your custom styles
`app.component.css`

```css
:host ::ng-deep .ticker-container > span {
    // any style properties.
}
```
