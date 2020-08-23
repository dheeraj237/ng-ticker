# NG-Ticker

html marquee implementation as angular component library.

## Installation

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
