<img src="https://bigxxs.github.io/kmui/logo.png?ver=3" width="20%" height="20%" />

A front ui framework for WeChat H5 pages.
Here is [examples](https://bigxxs.github.io/kmui/)

## Starter template

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=0">
    <title></title>
    <link href="https://cdn.jsdelivr.net/gh/FortAwesome/Font-Awesome@4.7/css/font-awesome.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/gh/bigxxs/kmui@0.6.4/kmui.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/jquery@1.9.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/bigxxs/kmui@0.6.4/kmui.js"></script>
  </head>
  <body>
    <script>
      $(function(){
        kmui.messageBox('hello world')
      })
    </script>
  </body>
</html>
```

## Quick start

### Title bar

```
  <div class="title-bar">This is a title</div>
```

### Search bar

```
  <div class="search-bar">
    <input type="text"/>
    <button>Search</button>
  </div>
```

### List

```
  <div class="list-box">
    <div class="list-item">One</div>
    <div class="list-item">Two</div>
    <div class="list-item">Three</div>
  </div>
```

### List of link

```
  <div class="list-box">
    <a class="list-item">One</a>
    <a class="list-item">Two</a>
    <a class="list-item">Three</a>
  </div>
```

### Card

```
  <div class="card">
    <div class="card-hd">Card one</div>
    <div class="card-bd">some content ......</div>
    <div class="card-ft">footer</div>
  </div>
  
  <div class="card">
    <div class="card-hd">Card two</div>
    <div class="card-bd">some content ......</div>
    <div class="card-ft align-right">footer at right</div>
  </div>  
```

### Form

```
  <div class="form">
    <label>User name</label>
    <input type="text"/>
    
    <label>Password</label>
    <input type="password"/>
    
    <label>This is a textarea</label>
    <textarea rows="3"></textarea>
    
    <label>Mobile verification code</label>
    <div class="form-line">
      <input type="text" class="form-line-bd" />
      <button class="form-line-ft">Send</button>
    </div>
    
    <div class="form-submit-line">
      <button class="btn-primary">Login</button>
      <button>Cancel</button>
    </div>
    <div class="form-submit-line">
      <button>This is a 100% width button</button>
    </div>    
  </div>
```

### Loading

```
<script>
  //show a simple loading
  kmui.showLoading()
  
  //show loading with title
  kmui.showLoading('custom title')
  
  //hide loading
  kmui.hideLoading()
</script>
```

### Message box

```
<script>
  kmui.messageBox('Hello world!')
</script>
```

```
<script>
  //with callback function
  kmui.messageBox('Hello world!', function(){
    alert('You pressed OK')
  })
</script>
```

### Confirm

```
<script>
  kmui.confirm('Do you really want to remove this?', function (isConfirm) {
    if(isConfirm){
      alert('You pressed YES')
    }
    else{
      alert('You pressed NO')
    }
  })
</script>
```

### Common dialog

```
<script>
  kmui.dialog({
    title: 'Title of dialog',
    content: 'some content ......',
    buttons: [
        {
            text: 'Button ONE',
            click: function () {
                //do some thing ...
                
                return true; //return true can close dialog
            }
        },
        {
            text: 'Button TWO',
            click: function () {
                //do some thing ...
                
                return true; //return true can close dialog
            }
        }
    ]
  })
</script>
```

### Selecter

```
<script>
  kmui.showSelecter({
    multiple: false, //single select
    data: ['RED', 'GREEN', 'BLUE', 'YELLOW'],
    selected: ['BLUE'], //default checked element, can be an empty array []
    callback: function (res) {
        console.log(res) //return value is an array
    }
  })
</script>
```

```
<script>
  kmui.showSelecter({
    multiple: true, //multiple select
    valueMember: 'id', //value field name of data member
    textMember: 'name', //text field name of data member
    data: [
      { id: '1', name: 'Bird'},
      { id: '2', name: 'Cat'},
      { id: '3', name: 'Dog'},
    ],
    selected: [],
    callback: function (res) {
        console.log(res)
    }
  })
</script>
```

### Others

```
  <div>
    <span>A</span>
    <span class="float-right">B</span>
  <div>
```

```
  <div class="padding-container">
    give me five
  <div>
```
