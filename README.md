# Redux-demo
Redux的作用在于管理state,使得state变得可控。
使得状态改变的路径为  Component -> Action -> Reducer,保持为单向数据流。一个状态的改变，有组件触发，封装为对应的Action，并选择相应的Reducer来生成新的state，从而修改组件状态。下图是一个参考图。
![单向数据流](https://raw.githubusercontent.com/sunlggggg/images/master/web/redux-data-flow.png)
## 创建demo
首先安装create-react-app（已安装，忽略）
```
npm install -g create-react-app
```
```
create-react-app redux-demo
```
## 安装redux
```
npm install --save redux react-redux redux-thunk
```
redux chrome 插件
```
https://github.com/zalmoxisus/redux-devtools-extension#usage
```
### 有状态和无状态组件
- 有状态组件 继承Component 
- 无状态组件 使用箭头函数
* 尽可能使用无状态组件，不涉及生命周期

## React-redux
react-redux 提供了Provider组件和connect函数

### Provider 和 connect
```html
 <Provider store={store}>
    <div className="App">
      <PostForm />
      <Posts />
    </div>
  </Provider>
```
```js
export default connect(null, { addContent })(PostForm) 
```
### Action
```js
export default function addContent(data) {

    return async function (dispatch) {
        const res = await _post('https://jsonplaceholder.typicode.com/posts', data)
        console.log('post', res, "dispatch start ...")
        dispatch(
            {
                type: ADD_CONTENT,
                payload: res
            })
        console.log('post', res, "dispatch end ...")
    }
}
```
## 参考
[Redux教程](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)

--- 

* js 语法 
  `foo()()`
  - demo
  
  ![foo()()](https://raw.githubusercontent.com/sunlggggg/images/master/js/js%20function.png)
  
* `{object} = {object:object}`
