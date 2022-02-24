(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[51],{1298:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(557),d=t(559),i=t(40),l=t(1299),c=t.n(l),s=t(1300),u=t.n(s),f=Object(i.b)(c.a,u.a),h=[{name:"01-base",title:Object(i.b)("基本用法 \n 基础的 Tree 用法","Base \n Basic usage of Tree"),component:t(1301).default,rawText:t(1302)},{name:"02-icon",title:Object(i.b)("图标 \n 在 renderItem 中根据状态展示不同的图标","Icons \n Display different icon in the renderItem."),component:t(1303).default,rawText:t(1304)},{name:"03-click",title:Object(i.b)("点击事件 \n 设置 onClick 属性监听节点点击","Click \n Set the onClick property to listen the node click."),component:t(1305).default,rawText:t(1306)},{name:"04-noline",title:Object(i.b)("无连接线 \n 设置 line 为 false，隐藏连接线","Line \n Set the line property to false to hid the connecting line."),component:t(1307).default,rawText:t(1308)},{name:"05-expanded",title:Object(i.b)("控制展开 \n 受控的展开（此示例数据量太大，第一次全部展开会比较慢）","Expanded \n Controlled expansion (Because the data in this example is too large, it will be slower for the first time.)"),component:t(1309).default,rawText:t(1310)},{name:"06-change",title:Object(i.b)("可选择 \n 选中值取值提供了 4 种模式 \n 0: 只返回完全选中的节点，包含父节点 \n 1: 返回全部选中的节点和半选中的父节点 \n 2: 只返回选中的子节点 \n 3: 如果父节点选中，只返回父节点 \n 4: 所选即所得","onChange \n Selected values provide 4 modes \n 0: Return only the fully selected node, including the parent node. \n 1: Return the fully selected nodes and semi-selected parent nodes. \n 2: Return only the selected child node. \n 3: Return only the parent node, if the parent node is selected. \n 4: What you choose is what you get."),component:t(1311).default,rawText:t(1312)},{name:"07-disabled",title:Object(i.b)("禁用 \n disabled 为函数时，根据返回结果禁用节点，同时禁用子节点 \n disabled 为 true 时，禁用全部节点","disabled \n When the disabled property is a function, disable the node and its child nodes according to the returned result. \n When the disabled property is true, disable all nodes."),component:t(1313).default,rawText:t(1314)},{name:"08-drag",title:Object(i.b)("拖动 \n 设置 onDrop 属性可以拖动节点，设置 dragSibling 限制兄弟节点之间拖动","Drag \n Set the onDrop property to drag nodes."),component:t(1315).default,rawText:t(1316)},{name:"08-styledrag",title:Object(i.b)("设置拖动样式 \n 可以通过 dragImageSelector, dragImageStyle, dragHoverExpand定义一些拖动的设置","Set the drag style \n Some drag settings can be defined by dragImageSelector, dragImageStyle, dragHoverExpand"),component:t(1317).default,rawText:t(1318)},{name:"09-lazyload",title:Object(i.b)("动态加载 \n 数据过大，需要动态加载时，可以设置 loader 函数，当展开未定义 children（undefined）的节点时，触发此函数","Lazy load \n Set the loader function to dynamic fetch data. This function is triggered when the undefined child node is expanded."),component:t(1319).default,rawText:t(1320)},{name:"data",title:Object(i.b)("",""),component:t(1321).default,rawText:t(1322)}];n.default=Object(o.a)(function(e){return r.a.createElement(d.b,Object.assign({},e,{codes:void 0,source:f,examples:h}))})},1299:function(e,n){e.exports="# Tree *树形选择*\n\n## \n\n#### 本页面中用到的数据如下（数据量比较大，请谨慎点开）\n<example name=\"data\" />\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| onChange | (value: string[]) => void | 无 | 设置 onChange 属性时，显示 选择框。参数为当前选中值，和 mode 属性相关 |\n| data | object[] | [] | 数据，子节点为children，如果 children 值为 null 或 长度为 0 时，视为叶子节点 |\n| defaultExpanded | string[] | 无 | 默认展开的节点 key（非受控） |\n| disabled | (data: any) => boolean \\| boolean | false | 显示选择框时有效，为 true 时，所有节点禁用选择，为函数时，根据函数返回结果确定是否禁用 |\n| expanded | string[] | 无 | 展开的节点 key （受控） |\n| keygen | ((data: any, parentKey: string) => string) \\| string | 必填 | 生成key的辅助方法<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d) => d.id |\n| line | boolean | true | 是否显示连接线 |\n| loader | (key: string) => void | 无 | 设置loader属性后，未定义children的节点视为动态加载节点，点击展开触发 loader事件，children 为 null 或者长度为 0 视为叶子节点 |\n| mode | 0 \\| 1 \\| 2 \\| 3 \\| 4 | 1 | 选中值模式<br />0: 只返回完全选中的节点，包含父节点<br />1: 返回全部选中的节点和半选中的父节点<br />2: 只返回选中的子节点<br />3: 如果父节点选中，只返回父节点<br />4: 所选即所得 |\n| onExpand | (value: string[]) => void | 无 | 节点展开回调，参数为当前展开节点 key 数组 |\n| renderItem | (data: object) => ReactNode | 必填 | 为 string 时，返回 d\\[string]<br />为 function 时，返回函数结果 |\n| defaultValue | string[] | 无 | 默认选中的 key （非受控） | \n| value | string[] | 无 | 选中的 key （受控） | \n| onDrop | (data: object, key: string, targetKey: string, position: number) => void | 无 | 设置 onDrop 属性时，为可拖动状态<br />data: 拖动后重新排序的完整数据<br />key: 拖动的节点key<br />targetKey: 目标节点 key<br />position: 在目标节点的位置，以 0 开始 | \n| defaultExpandAll | boolean | false | 默认展开所有节点 | \n| childrenKey | string | 'children' | 指定子数据的属性名 |\n| expandIcons | \\[ReactNode, ReactNode] | 无 | 自定义展开/收起按钮 |\n| dragImageSelector | (data: object) => string \\| string | 无 | 定义拖拽图片的选择器 |\n| dragImageStyle | object | 无 | 拖拽图片的样式 |\n| leafClass | (data: object) => string \\| string | 无 | 叶子节点的 class, 函数的参数为该条叶子节点数据 |\n| dragHoverExpand | boolean | false | 拖拽时自动展开含有子节点的节点 |\n| doubleClickExpand | boolean | false | 双击是否展开节点 |\n| onClick | (data: object) => void | 无 | 节点点击事件 |\n| iconClass | string | 无 | 展开/收起按钮的类名 |\n| nodeClass | string \\| ((data: any) => string) | 无 | 节点的class，如果是函数，参数为该节点数据 |\n| dragSibling | boolean  | 无 | 是否只能平级拖拽 |\n"},1300:function(e,n){e.exports="# Tree\n\n##\n\n#### The data used on this page is as follows (the amount of data is large, please be careful)\n<example name=\"data\" />\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | - | Extend className |\n| data | object[] | [] | data. The child node is children. If the children value is null or its length is 0, it is render as a leaf node. |\n| defaultExpanded | string[] | - | Default expanded node key. |\n| disabled | (data: any) => boolean \\| boolean | false | When it is true, all nodes disable the selection; when it is a function, it determines whether it is disabled according to the return result of the function. |\n| expanded | string[] | - | Expanded node key (controlled) |\n| keygen | ((data: any, parentKey: string) => string) \\| string | required | Auxiliary method for generating key. <br />When it is a function, use the return value of this function. <br /> When it is a string, use the data value corresponding to this string. For example, 'id' is the same thing as (d) => d.id. |\n| line | boolean | true | Whether to display the connection line. |\n| loader | (key: string) => void | - | If the loader attribute is a function, the node with no children is regarded as dynamically loaded node. Click expanded button to trigger the loader event. The children property is null or its length is 0 will be regarded as a leaf node. |\n| mode | 0 \\| 1 \\| 2 \\| 3 \\| 4 | 1 | mode <br />0: Returns only the fully selected node including the parent node. <br />1: Returns all selected nodes and semi-selected nodes. <br />2: Return only the selected child nodes. <br />3: If the parent node is full selected, only return the parent node.<br />4: What you choose is what you get. |\n| onChange | (value: string[]) => void | - | When the onChange property is set, the selection box is displayed. The parameter is the current selected value, which is related to the mode property. |\n| onExpand |  (value: string[]) => void | - | The callback function for expanding the node. The parameter is the key array of the currently expanded nodes. |\n| renderItem | (data: object) => ReactNode | required | When it is a string, return d\\[string].<br /> When it is a function, return the result of this function. |\n| defaultValue | string[] | - | Default selected key (not controlled) | \n| value | string[] | - | Selected key (controlled) |\n| onDrop | (data: object, key: string, targetKey: string, position: number) => void | - | It is draggable when setting the onDrop property. <br />data: Full data after dragging.<br />key: the key of dragged node<br />targetKey: the key of target node<br />position: The position of the target node. start at 0. | \n| defaultExpandAll | boolean | false | default expand all nodes | \n| childrenKey | string | 'children' | the key of the children data name | \n| expandIcons | \\[ReactNode, ReactNode] | none | custom expand/collapse button |\n| dragImageSelector | (data: object) => string \\| string | - | the selector of drag image |\n| dragImageStyle | object | - | the style of drag Image |\n| leafClass | (data: object) => string \\| string | - | the class of lead, the params of function is data |\n| dragHoverExpand | boolean | false | auto expand the node when drag over |\n| doubleClickExpand | boolean | false | expand node while double click |\n| onClick | (data: object) => void | none | node click |\n| iconClass | string | - | expand/collapse button's class |\n| nodeClass | string \\| ((data: any) => string) | - | The class of the node, if it is a function, the parameter is the node data. |\n| dragSibling | boolean  | - | whether drag can only be level |"},1301:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(140),d=[{id:"1",text:"1",children:[{id:"1-1",text:"1-1",children:[{id:"1-1-1",text:"1-1-1"},{id:"1-1-2",text:"1-1-2"}]},{id:"1-2",text:"1-2"}]},{id:"2",text:"2",children:[{id:"2-1",text:"2-1"},{id:"2-2",text:"2-2"}]},{id:"3",text:"3",children:[{id:"3-1",text:"3-1"}]},{id:"4",text:"4",children:[{id:"4-1",text:"4-1"}]},{id:"5",text:"5",children:[{id:"5-1",text:"5-1"}]}];n.default=function(){return r.a.createElement(o.a,{data:d,keygen:"id",defaultExpanded:["2"],renderItem:function(e){return"node ".concat(e.text)}})}},1302:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- 基础的 Tree 用法\n * en - Base\n *   -- Basic usage of Tree\n */\nimport React from 'react'\nimport { Tree } from 'shineout'\n\nconst data = [\n  {\n    id: '1',\n    text: '1',\n    children: [\n      {\n        id: '1-1',\n        text: '1-1',\n        children: [{ id: '1-1-1', text: '1-1-1' }, { id: '1-1-2', text: '1-1-2' }],\n      },\n      { id: '1-2', text: '1-2' },\n    ],\n  },\n  { id: '2', text: '2', children: [{ id: '2-1', text: '2-1' }, { id: '2-2', text: '2-2' }] },\n  { id: '3', text: '3', children: [{ id: '3-1', text: '3-1' }] },\n  { id: '4', text: '4', children: [{ id: '4-1', text: '4-1' }] },\n  { id: '5', text: '5', children: [{ id: '5-1', text: '5-1' }] },\n]\n\nexport default function() {\n  return <Tree data={data} keygen=\"id\" defaultExpanded={['2']} renderItem={n => `node ${n.text}`} />\n}\n"},1303:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(140),d=t(562),i=t(180);function l(e,n){var t;return t=e.children&&0!==e.children.length?n?r.a.createElement(i.a,{name:"folder-open",style:{color:"#ffd666"}}):r.a.createElement(i.a,{name:"folder",style:{color:"#ffd666"}}):r.a.createElement(i.a,{name:"file-text-o"}),r.a.createElement("span",null,t," ",e.text)}n.default=function(){return r.a.createElement(o.a,{data:d.c,keygen:"id",renderItem:l,doubleClickExpand:!0})}},1304:function(e,n){e.exports="/**\n * cn - 图标\n *    -- 在 renderItem 中根据状态展示不同的图标\n * en - Icons\n *    -- Display different icon in the renderItem.\n */\nimport React from 'react'\nimport { Tree } from 'shineout'\nimport data from 'doc/data/tree'\nimport FontAwesome from '../Icon/FontAwesome'\n\nfunction renderItem(node, isExpanded) {\n  let icon\n  if (!node.children || node.children.length === 0) {\n    icon = <FontAwesome name=\"file-text-o\" />\n  } else if (isExpanded) {\n    icon = <FontAwesome name=\"folder-open\" style={{ color: '#ffd666' }} />\n  } else {\n    icon = <FontAwesome name=\"folder\" style={{ color: '#ffd666' }} />\n  }\n\n  return (\n    <span>\n      {icon} {node.text}\n    </span>\n  )\n}\n\nexport default function() {\n  return <Tree data={data} keygen=\"id\" renderItem={renderItem} doubleClickExpand />\n}\n"},1305:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return p});var a=t(4),r=t(5),o=t(6),d=t(7),i=t(2),l=t(0),c=t.n(l),s=t(41),u=t(140),f=t(562);function h(a){return function(){var e,n=Object(i.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var t=Object(i.a)(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return Object(d.a)(this,e)}}var p=function(e){Object(o.a)(t,e);var n=h(t);function t(e){var r;return Object(a.a)(this,t),(r=n.call(this,e)).handleClick=function(e,n){console.log("click",n),r.setState({active:n})},r.handleEdit=function(e){var n=e.target.value,a=r.state.active.split(",");r.setState(Object(s.a)(function(e){var t=e.data;a.forEach(function(n,e){t=t.find(function(e){return e.id===n}),e<a.length-1&&(t=t.children)}),t.text=n,e.active=void 0}))},r.handleKeyDown=function(e){13===e.keyCode&&e.target.blur()},r.keyGenerator=function(e,n){return"".concat(n,",").concat(e.id).replace(/^,/,"")},r.renderItem=function(e,n,t){return t?c.a.createElement("input",{autoFocus:!0,size:"small",onBlur:r.handleEdit,onKeyDown:r.handleKeyDown,defaultValue:e.text,type:"text"}):"node ".concat(e.text)},r.state={active:void 0,data:f.c},r.defaultExpanded=["1"],r}return Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,{active:this.state.active,data:this.state.data,keygen:this.keyGenerator,defaultExpanded:this.defaultExpanded,onClick:this.handleClick,onExpand:this.handleExpand,renderItem:this.renderItem})}}]),t}(l.Component)},1306:function(e,n){e.exports="/**\n * cn - 点击事件\n *    -- 设置 onClick 属性监听节点点击\n * en - Click\n *    -- Set the onClick property to listen the node click.\n */\nimport React, { Component } from 'react'\nimport immer from 'immer'\nimport { Tree } from 'shineout'\nimport tree from 'doc/data/tree'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { active: undefined, data: tree }\n    this.defaultExpanded = ['1']\n  }\n\n  handleClick = (node, id) => {\n    console.log('click', id)\n    this.setState({ active: id })\n  }\n\n  handleEdit = event => {\n    const newText = event.target.value\n    const path = this.state.active.split(',')\n    this.setState(\n      immer(draft => {\n        let { data } = draft\n        path.forEach((id, index) => {\n          data = data.find(d => d.id === id)\n          if (index < path.length - 1) data = data.children\n        })\n        data.text = newText\n        draft.active = undefined\n      })\n    )\n  }\n\n  handleKeyDown = event => {\n    if (event.keyCode === 13) event.target.blur()\n  }\n\n  keyGenerator = (node, parentKey) => `${parentKey},${node.id}`.replace(/^,/, '')\n\n  renderItem = (node, isExpanded, isActive) =>\n    isActive ? (\n      <input\n        // eslint-disable-next-line\n        autoFocus\n        size=\"small\"\n        onBlur={this.handleEdit}\n        onKeyDown={this.handleKeyDown}\n        defaultValue={node.text}\n        type=\"text\"\n      />\n    ) : (\n      `node ${node.text}`\n    )\n\n  render() {\n    return (\n      <Tree\n        active={this.state.active}\n        data={this.state.data}\n        keygen={this.keyGenerator}\n        defaultExpanded={this.defaultExpanded}\n        onClick={this.handleClick}\n        onExpand={this.handleExpand}\n        renderItem={this.renderItem}\n      />\n    )\n  }\n}\n"},1307:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(140),d=t(562);n.default=function(){return r.a.createElement(o.a,{data:d.c,defaultExpanded:["1","2"],line:!1,keygen:"id",renderItem:function(e){return"node ".concat(e.id)}})}},1308:function(e,n){e.exports="/**\n * cn - 无连接线\n *    -- 设置 line 为 false，隐藏连接线\n * en - Line\n *    -- Set the line property to false to hid the connecting line.\n */\nimport React from 'react'\nimport { Tree } from 'shineout'\nimport data from 'doc/data/tree'\n\nexport default function() {\n  return <Tree data={data} defaultExpanded={['1', '2']} line={false} keygen=\"id\" renderItem={n => `node ${n.id}`} />\n}\n"},1309:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return g});var r=t(26),o=t(4),d=t(5),i=t(1),l=t(6),c=t(7),s=t(2),a=t(0),u=t.n(a),f=t(65),h=t(140),p=t(562);function m(a){return function(){var e,n=Object(s.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var t=Object(s.a)(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return Object(c.a)(this,e)}}var g=function(e){Object(l.a)(a,e);var t=m(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleExpand=function(e){n.setState({expanded:e})},n.renderItem=function(e){return"node ".concat(e.id)},n.state={expanded:["1"]},n.collapseAll=n.handleExpand.bind(Object(i.a)(n),[]),n.expandAll=n.handleExpand.bind(Object(i.a)(n),Object(r.a)(p.a)),n}return Object(d.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement("div",{style:{marginBottom:12}},u.a.createElement(f.a,{onClick:this.expandAll},"Expand all"),u.a.createElement(f.a,{onClick:this.collapseAll},"Collapse all")),u.a.createElement(h.a,{data:p.c,keygen:"id",line:!1,expanded:this.state.expanded,onExpand:this.handleExpand,renderItem:this.renderItem}))}}]),a}(a.Component)},1310:function(e,n){e.exports="/**\n * cn - 控制展开\n *    -- 受控的展开（此示例数据量太大，第一次全部展开会比较慢）\n * en - Expanded\n *    -- Controlled expansion (Because the data in this example is too large, it will be slower for the first time.)\n */\nimport React, { Component } from 'react'\nimport { Button, Tree } from 'shineout'\nimport data, { allIds } from 'doc/data/tree'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { expanded: ['1'] }\n\n    this.collapseAll = this.handleExpand.bind(this, [])\n    this.expandAll = this.handleExpand.bind(this, [...allIds])\n  }\n\n  handleExpand = expanded => {\n    this.setState({ expanded })\n  }\n\n  renderItem = node => `node ${node.id}`\n\n  render() {\n    return (\n      <div>\n        <div style={{ marginBottom: 12 }}>\n          <Button onClick={this.expandAll}>Expand all</Button>\n          <Button onClick={this.collapseAll}>Collapse all</Button>\n        </div>\n        <Tree\n          data={data}\n          keygen=\"id\"\n          line={false}\n          expanded={this.state.expanded}\n          onExpand={this.handleExpand}\n          renderItem={this.renderItem}\n        />\n      </div>\n    )\n  }\n}\n"},1311:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return y});var o=t(4),d=t(5),i=t(6),r=t(7),l=t(2),c=t(25),a=t(0),s=t.n(a),u=t(300),f=t(140),h=t(562);function p(a){return function(){var e,n=Object(l.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var t=Object(l.a)(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return Object(r.a)(this,e)}}var m={position:"absolute",right:30,top:100,bottom:40,width:240,overflow:"auto",background:"#f2f2f2",padding:10,zIndex:100},g=[{value:0,text:"mode=0 (full)"},{value:1,text:"mode=1 (half)"},{value:2,text:"mode=2 (child only)"},{value:3,text:"mode=3 (shallow)"},{value:4,text:"mode=4 (freedom)"}];var y=function(e){Object(i.a)(r,e);var a=p(r);function r(e){var n;Object(o.a)(this,r),(n=a.call(this,e)).handleChange=function(e){n.setState({value:e})},n.handleModeChange=function(e){n.setState({mode:e,value:[]})},n.renderItem=function(e){return"node ".concat(e.id)};var t=[];return function e(n,t){var a=Object(c.a)(n,1)[0];a&&(t.push(a.id),a.children&&e(a.children,t))}(h.c,t),n.state={mode:1,value:t},n}return Object(d.a)(r,[{key:"render",value:function(){var e=this.state,n=e.mode,t=e.value;return s.a.createElement("div",null,s.a.createElement(u.a.Group,{keygen:"value",value:n,format:"value",onChange:this.handleModeChange,data:g,renderItem:"text"}),s.a.createElement("br",null),s.a.createElement(f.a,{data:h.c,defaultExpanded:["0","2"],keygen:"id",mode:n,onChange:this.handleChange,renderItem:this.renderItem,value:t}),s.a.createElement("div",{style:m},"Current select value:",s.a.createElement("pre",{style:{background:"#f2f2f2"}},JSON.stringify(t,null,2))))}}]),r}(a.Component)},1312:function(e,n){e.exports="/**\n * cn - 可选择\n *    -- 选中值取值提供了 4 种模式\n *    -- 0: 只返回完全选中的节点，包含父节点\n *    -- 1: 返回全部选中的节点和半选中的父节点\n *    -- 2: 只返回选中的子节点\n *    -- 3: 如果父节点选中，只返回父节点\n *    -- 4: 所选即所得\n * en - onChange\n *    -- Selected values provide 4 modes\n *    -- 0: Return only the fully selected node, including the parent node.\n *    -- 1: Return the fully selected nodes and semi-selected parent nodes.\n *    -- 2: Return only the selected child node.\n *    -- 3: Return only the parent node, if the parent node is selected.\n *    -- 4: What you choose is what you get.\n */\nimport React, { Component } from 'react'\nimport { Tree, Radio } from 'shineout'\nimport data from 'doc/data/tree'\n\nconst resultStyle = {\n  position: 'absolute',\n  right: 30,\n  top: 100,\n  bottom: 40,\n  width: 240,\n  overflow: 'auto',\n  background: '#f2f2f2',\n  padding: 10,\n  zIndex: 100,\n}\n\nconst modeList = [\n  { value: 0, text: 'mode=0 (full)' },\n  { value: 1, text: 'mode=1 (half)' },\n  { value: 2, text: 'mode=2 (child only)' },\n  { value: 3, text: 'mode=3 (shallow)' },\n  { value: 4, text: 'mode=4 (freedom)' },\n]\n\nfunction getValue(list, value) {\n  const [node] = list\n  if (!node) return\n  value.push(node.id)\n  if (node.children) getValue(node.children, value)\n}\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n\n    const value = []\n    getValue(data, value)\n\n    this.state = { mode: 1, value }\n  }\n\n  handleChange = value => {\n    this.setState({ value })\n  }\n\n  handleModeChange = mode => {\n    this.setState({ mode, value: [] })\n  }\n\n  renderItem = node => `node ${node.id}`\n\n  render() {\n    const { mode, value } = this.state\n\n    return (\n      <div>\n        <Radio.Group\n          keygen=\"value\"\n          value={mode}\n          format=\"value\"\n          onChange={this.handleModeChange}\n          data={modeList}\n          renderItem=\"text\"\n        />\n\n        <br />\n\n        <Tree\n          data={data}\n          defaultExpanded={['0', '2']}\n          keygen=\"id\"\n          mode={mode}\n          onChange={this.handleChange}\n          renderItem={this.renderItem}\n          value={value}\n        />\n\n        <div style={resultStyle}>\n          Current select value:\n          <pre style={{ background: '#f2f2f2' }}>{JSON.stringify(value, null, 2)}</pre>\n        </div>\n      </div>\n    )\n  }\n}\n"},1313:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return h});var d=t(4),a=t(5),i=t(6),r=t(7),o=t(2),l=t(0),c=t.n(l),s=t(140),u=t(562);function f(a){return function(){var e,n=Object(o.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var t=Object(o.a)(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return Object(r.a)(this,e)}}var h=function(e){Object(i.a)(o,e);var r=f(o);function o(){var e;Object(d.a)(this,o);for(var n=arguments.length,t=new Array(n),a=0;a<n;a++)t[a]=arguments[a];return(e=r.call.apply(r,[this].concat(t))).handleChange=function(e){console.log(e)},e.isDisabled=function(e){return"1-0"===e.id},e.renderItem=function(e){return"node ".concat(e.id)},e}return Object(a.a)(o,[{key:"render",value:function(){return c.a.createElement(s.a,{data:u.c,defaultExpanded:["1","2"],disabled:this.isDisabled,keygen:"id",onChange:this.handleChange,renderItem:this.renderItem})}}]),o}(l.Component)},1314:function(e,n){e.exports="/**\n * cn - 禁用\n *    -- disabled 为函数时，根据返回结果禁用节点，同时禁用子节点\n *    -- disabled 为 true 时，禁用全部节点\n * en - disabled\n *    -- When the disabled property is a function, disable the node and its child nodes according to the returned result.\n *    -- When the disabled property is true, disable all nodes.\n */\nimport React, { Component } from 'react'\nimport { Tree } from 'shineout'\nimport data from 'doc/data/tree'\n\nexport default class extends Component {\n  handleChange = value => {\n    console.log(value)\n  }\n\n  isDisabled = node => node.id === '1-0'\n\n  renderItem = node => `node ${node.id}`\n\n  render() {\n    return (\n      <Tree\n        data={data}\n        defaultExpanded={['1', '2']}\n        disabled={this.isDisabled}\n        keygen=\"id\"\n        onChange={this.handleChange}\n        renderItem={this.renderItem}\n      />\n    )\n  }\n}\n"},1315:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return h});var a=t(4),r=t(5),o=t(6),d=t(7),i=t(2),l=t(0),c=t.n(l),s=t(140),u=t(562);function f(a){return function(){var e,n=Object(i.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var t=Object(i.a)(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return Object(d.a)(this,e)}}var h=function(e){Object(o.a)(t,e);var n=f(t);function t(e){var r;return Object(a.a)(this,t),(r=n.call(this,e)).handleDrop=function(e,n,t,a){console.log(e,n,t,a),r.setState({data:e})},r.renderItem=function(e){return c.a.createElement("div",null,c.a.createElement("span",null,"node "),c.a.createElement("span",{id:"node-id-".concat(e.id)},e.text))},r.state={data:u.c},r.defaultExpanded=["1"],r}return Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(s.a,{data:this.state.data,keygen:"id",defaultExpanded:this.defaultExpanded,onDrop:this.handleDrop,renderItem:this.renderItem})}}]),t}(l.Component)},1316:function(e,n){e.exports="/**\n * cn - 拖动\n *    -- 设置 onDrop 属性可以拖动节点，设置 dragSibling 限制兄弟节点之间拖动\n * en - Drag\n *    -- Set the onDrop property to drag nodes.\n */\nimport React, { Component } from 'react'\nimport { Tree } from 'shineout'\nimport tree from 'doc/data/tree'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { data: tree }\n    this.defaultExpanded = ['1']\n  }\n\n  handleDrop = (data, key, targetKey, position) => {\n    console.log(data, key, targetKey, position)\n    this.setState({ data })\n  }\n\n  renderItem = node => (\n    <div>\n      <span>node </span>\n      <span id={`node-id-${node.id}`}>{node.text}</span>\n    </div>\n  )\n\n  render() {\n    return (\n      <Tree\n        data={this.state.data}\n        keygen=\"id\"\n        defaultExpanded={this.defaultExpanded}\n        onDrop={this.handleDrop}\n        renderItem={this.renderItem}\n      />\n    )\n  }\n}\n"},1317:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return h});var a=t(4),r=t(5),o=t(6),d=t(7),i=t(2),l=t(0),c=t.n(l),s=t(140),u=t(562);function f(a){return function(){var e,n=Object(i.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var t=Object(i.a)(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return Object(d.a)(this,e)}}var h=function(e){Object(o.a)(t,e);var n=f(t);function t(e){var r;return Object(a.a)(this,t),(r=n.call(this,e)).handleDrop=function(e,n,t,a){console.log(e,n,t,a),r.setState({data:e})},r.renderItem=function(e){return c.a.createElement("div",null,c.a.createElement("span",null,"node "),c.a.createElement("span",{id:"node-id-".concat(e.id)},e.text))},r.state={data:u.c},r.defaultExpanded=["1"],r}return Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(s.a,{data:this.state.data,keygen:"id",defaultExpanded:this.defaultExpanded,onDrop:this.handleDrop,dragImageSelector:function(e){return"#node-id-".concat(e.id)},dragImageStyle:{color:"red"},renderItem:this.renderItem,dragHoverExpand:!0})}}]),t}(l.Component)},1318:function(e,n){e.exports="/**\n * cn - 设置拖动样式\n *    -- 可以通过 dragImageSelector, dragImageStyle, dragHoverExpand定义一些拖动的设置\n * en - Set the drag style\n *    -- Some drag settings can be defined by dragImageSelector, dragImageStyle, dragHoverExpand\n */\nimport React, { Component } from 'react'\nimport { Tree } from 'shineout'\nimport tree from 'doc/data/tree'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { data: tree }\n    this.defaultExpanded = ['1']\n  }\n\n  handleDrop = (data, key, targetKey, position) => {\n    console.log(data, key, targetKey, position)\n    this.setState({ data })\n  }\n\n  renderItem = node => (\n    <div>\n      <span>node </span>\n      <span id={`node-id-${node.id}`}>{node.text}</span>\n    </div>\n  )\n\n  render() {\n    return (\n      <Tree\n        data={this.state.data}\n        keygen=\"id\"\n        defaultExpanded={this.defaultExpanded}\n        onDrop={this.handleDrop}\n        dragImageSelector={d => `#node-id-${d.id}`}\n        dragImageStyle={{ color: 'red' }}\n        renderItem={this.renderItem}\n        dragHoverExpand\n      />\n    )\n  }\n}\n"},1319:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return m});var r=t(26),o=t(4),d=t(5),i=t(6),l=t(7),c=t(2),a=t(0),s=t.n(a),u=t(41),f=t(140);function h(a){return function(){var e,n=Object(c.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var t=Object(c.a)(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return Object(l.a)(this,e)}}var p=["0","1","2","3","4"].map(function(e){return{id:e}}),m=function(e){Object(i.a)(a,e);var t=h(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).loader=function(e){var a=e.split(",");setTimeout(function(){n.setState(Object(u.a)(function(e){var t=e.data;a.forEach(function(n,e){t=t.find(function(e){return e.id===n}),e<a.length-1&&(t=t.children)}),t.children=Object(r.a)(Array.from({length:Math.round(4*Math.random())},function(e,n){return n}).map(function(e){return{id:"".concat(t.id,"-").concat(e)}}))}))},500)},n.keyGenerator=function(e,n){return"".concat(n,",").concat(e.id).replace(/^,/,"")},n.handleChange=function(e){return n.setState({value:e})},n.renderItem=function(e){return"node ".concat(e.id)},n.state={data:p,value:[]},n}return Object(d.a)(a,[{key:"render",value:function(){return s.a.createElement(f.a,{data:this.state.data,keygen:this.keyGenerator,loader:this.loader,renderItem:this.renderItem,onChange:this.handleChange,value:this.state.value})}}]),a}(a.Component)},1320:function(e,n){e.exports="/**\n * cn - 动态加载\n *    -- 数据过大，需要动态加载时，可以设置 loader 函数，当展开未定义 children（undefined）的节点时，触发此函数\n * en - Lazy load\n *    -- Set the loader function to dynamic fetch data. This function is triggered when the undefined child node is expanded.\n */\nimport React, { Component } from 'react'\nimport immer from 'immer'\nimport { Tree } from 'shineout'\n\nconst initData = ['0', '1', '2', '3', '4'].map(i => ({ id: i }))\nconst createRange = () => Array.from({ length: Math.round(Math.random() * 4) }, (_, i) => i)\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { data: initData, value: [] }\n  }\n\n  loader = key => {\n    const path = key.split(',')\n\n    setTimeout(() => {\n      this.setState(\n        immer(draft => {\n          let { data } = draft\n          path.forEach((pid, i) => {\n            data = data.find(d => d.id === pid)\n            if (i < path.length - 1) data = data.children\n          })\n          data.children = [...createRange().map(i => ({ id: `${data.id}-${i}` }))]\n        })\n      )\n    }, 500)\n  }\n\n  keyGenerator = (node, parentKey) => `${parentKey},${node.id}`.replace(/^,/, '')\n\n  handleChange = value => this.setState({ value })\n\n  renderItem = node => `node ${node.id}`\n\n  render() {\n    return (\n      <Tree\n        data={this.state.data}\n        keygen={this.keyGenerator}\n        loader={this.loader}\n        renderItem={this.renderItem}\n        onChange={this.handleChange}\n        value={this.state.value}\n      />\n    )\n  }\n}\n"},1321:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return f});var r=t(4),o=t(5),d=t(6),i=t(7),l=t(2),a=t(0),c=t.n(a),s=t(562);function u(a){return function(){var e,n=Object(l.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var t=Object(l.a)(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return Object(i.a)(this,e)}}var f=function(e){Object(d.a)(a,e);var t=u(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).toggle=function(){n.setState({expand:!n.state.expand})},n.state={expand:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.expand;return c.a.createElement("div",null,"Current node count: ",s.a.length,"."," ",c.a.createElement("a",{onClick:this.toggle},e?"Collapse":"Expand"," Code"),c.a.createElement("pre",{style:{display:e?"block":"none"}},JSON.stringify(s.c,null,2)))}}]),a}(a.Component)},1322:function(e,n){e.exports="import React, { Component } from 'react'\nimport data, { allIds } from 'doc/data/tree'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { expand: false }\n  }\n\n  toggle = () => {\n    this.setState({ expand: !this.state.expand })\n  }\n\n  render() {\n    const { expand } = this.state\n    return (\n      <div>\n        Current node count: {allIds.length}.{' '}\n        <a onClick={this.toggle}>\n          {expand ? 'Collapse' : 'Expand'} Code\n        </a>\n        <pre style={{ display: expand ? 'block' : 'none' }}>{JSON.stringify(data, null, 2)}</pre>\n      </div>\n    )\n  }\n}\n"},300:function(e,n,t){"use strict";var a=t(21),r=t(59),o=t(72),u=t(558),d=t(4),i=t(5),l=t(1),c=t(23),s=t(6),f=t(7),h=t(2),p=t(0),m=t.n(p),g=t(14),y=t.n(g),b=t(17),x=t(22),v=t(8),k=t(60),E=t(181),C=t(9);function j(a){return function(){var e,n=Object(h.a)(a);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var t=Object(h.a)(this).constructor;e=Reflect.construct(n,arguments,t)}else e=n.apply(this,arguments);return Object(f.a)(this,e)}}var I=function(e){Object(s.a)(a,e);var t=j(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(l.a)(n)),n.handleUpdate=n.forceUpdate.bind(Object(l.a)(n)),n.handleRawChange=n.handleRawChange.bind(Object(l.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){Object(c.a)(Object(h.a)(a.prototype),"componentDidMount",this).call(this),this.props.datum.subscribe(v.a,this.handleUpdate)}},{key:"componentWillUnmount",value:function(){Object(c.a)(Object(h.a)(a.prototype),"componentWillUnmount",this).call(this),this.props.datum.unsubscribe(v.a,this.handleUpdate)}},{key:"getContent",value:function(e,n){var t=this.props.renderItem;return"string"==typeof t?e[t]:"function"==typeof t?t(e,n):""}},{key:"handleClick",value:function(e,n,t){var a=this.props,r=a.data;a.datum.set(r[t])}},{key:"handleRawChange",value:function(e){this.props.datum.set(e)}},{key:"render",value:function(){var t=this,e=this.props,n=e.block,a=e.data,r=e.datum,o=e.keygen,d=e.children,i=e.button,l=e.size,c=Object(C.b)(),s=y()(Object(k.a)("group",n&&"block",i&&"button","outline"===i&&"outline",i&&l,c&&"rtl"),this.props.className);return void 0===a?m.a.createElement("div",{className:s},m.a.createElement(u.a,{value:{onRawChange:this.handleRawChange,checked:r.check.bind(r)}},d)):m.a.createElement("div",{className:s},a.map(function(e,n){return m.a.createElement(E.a,{checked:r.check(e),disabled:r.disabled(e),key:Object(x.b)(e,o,n),htmlValue:n,index:n,onChange:t.handleClick},t.getContent(e,n))}),d)}}]),a}(b.b);I.defaultProps={renderItem:function(e){return e}};var O=I,R=Object(u.b)(E.a);R.Group=Object(a.compose)(r.a,o.a.hoc({limit:1,bindProps:["disabled","format","prediction"],pure:!1}))(O),R.displayName="ShineoutRadio",R.Group.displayName="ShineoutRadioGroup";n.a=R},558:function(e,n,t){"use strict";t.d(n,"a",function(){return i}),t.d(n,"b",function(){return l});var a=t(0),r=t.n(a),o=t(37),d=Object(o.a)(),i=d.Provider,l=function(t){return function(n){return r.a.createElement(d.Consumer,null,function(e){return r.a.createElement(t,Object.assign({},n,e))})}}}}]);