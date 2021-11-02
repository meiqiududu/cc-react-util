# ccyy-rc-util

Common Utils For React Component.

## Install

npm install ccyy-rc-util --save-dev

## API

### isMobile

> (): boolean
Determine if it is a mobile device

```jsx
import isMobile from 'rc-util/lib/isMobile';
```

### Trim

> (text,type?): string
Go to the space, type: 1 - 所有空格  2 - 前后空格  3 - 前空格 4 - 后空格 default:1

```jsx
import Trim from 'rc-util/lib/Trim';
```

### telFormat

> (tel): string
The middle digits of the phone number are replaced by *

```jsx
import telFormat from 'rc-util/lib/telFormat';
```

### filterHtmlTag

> (sHtml): string
Replace the <> tag

```jsx
import filterHtmlTag from 'rc-util/lib/filterHtmlTag';
```

### copyTxt

> (text,fn?): string
copy

```jsx
import copyTxt from 'rc-util/lib/copyTxt';
```
