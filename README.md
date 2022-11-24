# NG-Ticker
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Node.js CI](https://github.com/dheeraj237/ng-ticker/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/dheeraj237/ng-ticker/actions/workflows/node.js.yml)
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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://dheeraj237.github.io/about/"><img src="https://avatars3.githubusercontent.com/u/20186834?v=4" width="100px;" alt=""/><br /><sub><b>dheeraj237</b></sub></a><br /><a href="#infra-dheeraj237" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/dheeraj237/ng-ticker/commits?author=dheeraj237" title="Tests">⚠️</a> <a href="https://github.com/dheeraj237/ng-ticker/commits?author=dheeraj237" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
