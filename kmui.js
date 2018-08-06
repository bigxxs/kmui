html,body {
    margin: 0;
    padding: 0;
    background-color: #f8f8f8;
}

.kmui-mask {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.6);
}

.kmui-loading {
    position: fixed;
    z-index: 2000;
    width: 120px;
    height: 120px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    border-radius: 5px;
    background-color: rgba(0,0,0,0.6);
    vertical-align: middle;

    display: -webkit-flex; /* Safari */
    display: flexbox;
    flex-direction: column;
    justify-content: space-around;

}
    .kmui-loading i {
        font-size: 2.5em;
        color: white;
    }
.kmui-loading-title {
    color: white;
}

.kmui-dialog {
    position: fixed;
    z-index: 2000;
    width: 80%;
    max-width: 300px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    border-radius: 5px;
    background-color: white;
}
.kmui-dialog-title {
    padding: 5px;
    font-size: 1.2em;
}
.kmui-dialog-content {
    padding: 8px;
    color: gray;
}
.kmui-dialog-buttons {
    display: -webkit-flex; /* Safari */
    display: flexbox;
    flex-direction: row;
    align-items: center;
    border-top: 1px solid #f8f8f8;
}
    .kmui-dialog-buttons a {
        display: inline-block;
        text-decoration:none;
        padding: 8px;
        flex-grow:1;
        border-left: 1px solid #f8f8f8;
        color: black;
    }
        .kmui-dialog-buttons a:first-child {
            border-left: none;
        }

.align-right {
    text-align: right;
}

.color-gray {
    color: gray;
}

.padding-container {
    padding: 8px;
    background-color: #eeeeee;
}

button {
    padding: 3px 10px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: white;
}
.btn-primary {
    background-color: #1AAD19;
    color: white;
}

.search-bar {
    padding: 8px;
    background-color: #eeeeee;
    display: -webkit-flex; /* Safari */
    display: flexbox;
    flex-direction: row;
    align-items: center;
}
    .search-bar::before {
        content: "\f002";
         display:inline-block;
         font:normal normal normal 14px/1 FontAwesome;
         color: #c9c9c9;
         text-rendering:auto;
         -webkit-font-smoothing:antialiased;
         -moz-osx-font-smoothing:grayscale;
    }
    .search-bar input {
        flex-grow:1;
        margin-left: 10px;
        margin-right: 10px;
        padding: 5px;
    }
    .search-bar button {
    }

.title-bar {
    padding: 8px;
    color: #808080;
    font-size: 0.8em;
}

.list-box {
    background-color: white;
    padding: 0 8px;
}
.list-item {
    display: block;
    width: auto;
    padding: 8px;
    border-top: 1px solid #f8f8f8;
    cursor: pointer;
}
    .list-item:first-child {
        border: none;
    }
a.list-item {
    padding-right: 16px;
}
    a.list-item::after {
        content: "\f105";
         display:inline-block;
         position: absolute;
         right: 0;
         margin-right: 8px;
         font:normal normal normal 14px/1 FontAwesome;
         font-size:1.4em;
         color: #c9c9c9;
         text-rendering:auto;
         -webkit-font-smoothing:antialiased;
         -moz-osx-font-smoothing:grayscale;
    }

.card {
    background-color: white;
    padding: 0 8px;
    margin-bottom: 16px;
    border-radius: 5px;
}
.card-hd {
    color: #808080;
    font-size: 0.8em;
    padding: 8px 0;
}
.card-bd {
}
.card-ft {
    color: #cecece;
    font-size: 0.8em;
    padding: 8px 0;
}

.form {
    padding: 0 8px;
}
.form label {
    display: block;
    padding: 8px 0;
    color: #808080;
    font-size: 0.8em;
}
.form input {
    padding: 8px;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
}
.form-line {
    display: -webkit-flex; /* Safari */
    display: flexbox;
    flex-direction: row;
}
.form-line-hd {
    width: 130px;
    background-color: white;
}
.form-line-bd {
    flex-grow:1;
}
.form-line-ft {
    width: 130px;
    padding: 0;
}
.form-submit-line {
    padding: 16px 0;
    display: -webkit-flex; /* Safari */
    display: flexbox;
    flex-direction: row;
}
    .form-submit-line button {
        flex-grow: 1;
        padding: 8px;
        margin-left: 8px;
    }
    .form-submit-line  button:first-child {
        margin-left: 0;
    }
