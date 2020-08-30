# NG-Ticker

[![Build Status](https://travis-ci.com/dheeraj237/ng-ticker.svg?branch=master)](https://travis-ci.com/dheeraj237/ng-ticker)
![npm](https://img.shields.io/npm/dw/ng-ticker)
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

| Name          |          | Type    | Default | Description                                                                                                                   |
| ------------- | -------- | ------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [direction]   | optional | string  | 'left'  | Animation direction of content inside `ng-ticker` element                                                                     |
| [speed]       | optional | string  | '10s'   | Speed of animation in direction in `seconds`. (speed need to be changed as width or content length on screen for better view) |
| [steps]       | optional | string  | ''      | Steps in animation transition to make vintage effect.                                                                         |
| [stopOnHover] | optional | Boolean | false   | Stop ticker on hover                                                                                                          |
| [playState]   | optional | Boolean | true    | Defines play state of ticker content                                                                                          |

## Styling guide

There are several classes that help you to create your custom styles
`app.component.css`

```css
:host ::ng-deep .ticker-container > span {
    // css properties.
}
```
