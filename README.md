# Instalation
```javascript
npm install
```

# Execute
```javascript
gulp images
```
This execute the basic compress for imagen in folder <b>src</b>, send the images converters to folder <b>dest</b> and the final images with compress to the folder <b>images</b>.

| Params  | Default | Values  | Description |
| ------------- |-------------|-----|-----|
| output  | <em>empty</em> | <em>string</em> jpeg, png, tiff and webp | if is empty the output is same to original image |
| resize  | false | <em>boolean</em> true \| false | If need apply a resize |
| width   | 1000 | <em>Integer</em> | Apply this width to the output image |
| height  | 1000 | <em>Integer</em> | Apply this height to the output image |
| fit     | contain | cover, contain, fill, inside, outside | |
| bg      | #ffffffff | <em>string</em> | Indicate the background for resizes using the format #rrbbggaa |
| q       | 80 | <em>Integer</em> 0 to 100 | Indicate the quality where 100 is the best but files more bigs |

### example

Original images
<img src="src/image-example-01.jpg">
<img src="src/image-example-02.jpg">

```javascript
gulp images
```
<img src="images/image-example-01.jpg">
<img src="images/image-example-02.jpg">

```javascript
gulp images --resize --width 500 --height 400 --output png --fit cover
```
<img src="images/image-example-01.png">
<img src="images/image-example-02.png">


```javascript
gulp images --output webp
```
<img src="images/image-example-01.webp">
<img src="images/image-example-02.webp">
