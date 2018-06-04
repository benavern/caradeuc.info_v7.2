---
title: zzEnter
date: 2015-04-16
tags:
  - ngTip
  - labo
  - AngularJs
author: Benjamin
---

Hi,

Today, I'll share my first tip for [AngularJs](https://angularjs.org). This is something very simple but this can be usefull.

### zzEnter

**zzEnter** is a directive that allows you to call a function when using "Enter" key on your keyboard when typing an input.

### Code

```js
angular.module('zzEnter', [])
.directive('zzEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.zzEnter);
                });
                event.preventDefault();
            }
        });
    };
})
```

### How to

* Declare the module in your html

```html
<script src="js/zzEnter.js"></script>
```

* Add the module in your application

```js
angular.module('myApp', ['zzEnter'])
// ...
```

* use it like so :
  * in the controller
    ```js
    .controller('myController', ['$scope', function($scope) {
        $scope.foo = "bar";
        $scope.sayHello = function() {
            alert('Hello, ' + ($scope.foo || 'World') + '!');
        }
    });
    ```

  * in the view
    ```html
      <input ng-model="foo" zz-enter="sayHello()">
    ```

So, now when you use "Enter" key on this input, you should be alerted with "Hello, [what you entered in the input]!" .

---

_Did you like it ? Did you find it usefull? let me know in the comments ..._
