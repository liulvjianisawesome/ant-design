webpackJsonp([42,211],{1125:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\u3002"]],"en-US":[["p","The most basic usage."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/tree-select/demo/basic.md",id:"components-tree-select-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TreeSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> TreeNode <span class="token operator">=</span> TreeSelect<span class="token punctuation">.</span>TreeNode<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> undefined<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TreeSelect</span>\n        <span class="token attr-name">showSearch</span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n        <span class="token attr-name">dropdownStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> maxHeight<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">,</span> overflow<span class="token punctuation">:</span> <span class="token string">\'auto\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Please</span> <span class="token attr-name">select"</span>\n        <span class="token attr-name">allowClear</span>\n        <span class="token attr-name">treeDefaultExpandAll</span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TreeNode</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>parent</span> <span class="token attr-name">1"</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>parent</span> <span class="token attr-name">1"</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TreeNode</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>parent</span> <span class="token attr-name">1-0"</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>parent</span> <span class="token attr-name">1-0"</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>0-1-1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TreeNode</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>leaf1<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>my</span> <span class="token attr-name">leaf"</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>random<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TreeNode</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>leaf2<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>your</span> <span class="token attr-name">leaf"</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>random1<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TreeNode</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TreeNode</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>parent</span> <span class="token attr-name">1-1"</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>parent</span> <span class="token attr-name">1-1"</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>random2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TreeNode</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sss<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>b style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'#08c\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>sss<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">></span></span><span class="token punctuation">}</span> key<span class="token operator">=</span><span class="token string">"random3"</span> <span class="token operator">/</span><span class="token operator">></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TreeNode</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TreeNode</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>TreeSelect</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var p=s[t],e=Object.getOwnPropertyDescriptor(a,p);e&&e.configurable&&void 0===n[p]&&Object.defineProperty(n,p,e)}return n}function a(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function t(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function p(a,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);a.prototype=Object.create(s&&s.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(a,s):n(a,s))}var e=s(1),o=(s(2),s(3)),c=o.TreeSelect.TreeNode,l=function(n){function s(){for(var p,e,o,c=arguments,l=arguments.length,u=Array(l),i=0;i<l;i++)u[i]=arguments[i];return a(this,s),p=e=t(this,n.call.apply(n,[this].concat(u))),e.state={value:void 0},e.onChange=function(n){console.log(c),e.setState({value:n})},o=p,t(e,o)}return p(s,n),s.prototype.render=function(){return e.createElement(o.TreeSelect,{showSearch:!0,style:{width:300},value:this.state.value,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"Please select",allowClear:!0,treeDefaultExpandAll:!0,onChange:this.onChange},e.createElement(c,{value:"parent 1",title:"parent 1",key:"0-1"},e.createElement(c,{value:"parent 1-0",title:"parent 1-0",key:"0-1-1"},e.createElement(c,{value:"leaf1",title:"my leaf",key:"random"}),e.createElement(c,{value:"leaf2",title:"your leaf",key:"random1"})),e.createElement(c,{value:"parent 1-1",title:"parent 1-1",key:"random2"},e.createElement(c,{value:"sss",title:e.createElement("b",{style:{color:"#08c"}},"sss"),key:"random3"}))))},s}(e.Component);return e.createElement(l,null)}}},1126:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u591a\u9009\u548c\u52fe\u9009\u6846\u529f\u80fd\u3002"]],"en-US":[["p","Multiple and checkable."]]},meta:{order:2,title:{"zh-CN":"\u591a\u9009","en-US":"Multiple"},filename:"components/tree-select/demo/checkable.md",id:"components-tree-select-demo-checkable"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TreeSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> SHOW_PARENT <span class="token operator">=</span> TreeSelect<span class="token punctuation">.</span>SHOW_PARENT<span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  label<span class="token punctuation">:</span> <span class="token string">\'Node1\'</span><span class="token punctuation">,</span>\n  value<span class="token punctuation">:</span> <span class="token string">\'0-0\'</span><span class="token punctuation">,</span>\n  key<span class="token punctuation">:</span> <span class="token string">\'0-0\'</span><span class="token punctuation">,</span>\n  children<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'Child Node1\'</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'0-0-0\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'0-0-0\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  label<span class="token punctuation">:</span> <span class="token string">\'Node2\'</span><span class="token punctuation">,</span>\n  value<span class="token punctuation">:</span> <span class="token string">\'0-1\'</span><span class="token punctuation">,</span>\n  key<span class="token punctuation">:</span> <span class="token string">\'0-1\'</span><span class="token punctuation">,</span>\n  children<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'Child Node3\'</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'0-1-0\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'0-1-0\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'Child Node4\'</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'0-1-1\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'0-1-1\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'Child Node5\'</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'0-1-2\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'0-1-2\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'0-0-0\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onChange \'</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> tProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n      treeData<span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">,</span>\n      onChange<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">,</span>\n      multiple<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      treeCheckable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      showCheckedStrategy<span class="token punctuation">:</span> SHOW_PARENT<span class="token punctuation">,</span>\n      searchPlaceholder<span class="token punctuation">:</span> <span class="token string">\'Please select\'</span><span class="token punctuation">,</span>\n      style<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        width<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>TreeSelect <span class="token punctuation">{</span><span class="token operator">...</span>tProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var p=s[t],e=Object.getOwnPropertyDescriptor(a,p);e&&e.configurable&&void 0===n[p]&&Object.defineProperty(n,p,e)}return n}function a(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function t(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function p(a,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);a.prototype=Object.create(s&&s.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(a,s):n(a,s))}var e=s(1),o=(s(2),s(3)),c=o.TreeSelect.SHOW_PARENT,l=[{label:"Node1",value:"0-0",key:"0-0",children:[{label:"Child Node1",value:"0-0-0",key:"0-0-0"}]},{label:"Node2",value:"0-1",key:"0-1",children:[{label:"Child Node3",value:"0-1-0",key:"0-1-0"},{label:"Child Node4",value:"0-1-1",key:"0-1-1"},{label:"Child Node5",value:"0-1-2",key:"0-1-2"}]}],u=function(n){function s(){for(var p,e,o,c=arguments,l=arguments.length,u=Array(l),i=0;i<l;i++)u[i]=arguments[i];return a(this,s),p=e=t(this,n.call.apply(n,[this].concat(u))),e.state={value:["0-0-0"]},e.onChange=function(n){console.log("onChange ",n,c),e.setState({value:n})},o=p,t(e,o)}return p(s,n),s.prototype.render=function(){var n={treeData:l,value:this.state.value,onChange:this.onChange,multiple:!0,treeCheckable:!0,showCheckedStrategy:c,searchPlaceholder:"Please select",style:{width:300}};return e.createElement(o.TreeSelect,n)},s}(e.Component);return e.createElement(u,null)}}},1127:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u4f7f\u7528 ",["code","treeData"]," \u628a JSON \u6570\u636e\u76f4\u63a5\u751f\u6210\u6811\u7ed3\u6784\u3002"]],"en-US":[["p","The tree structure can be populated using ",["code","treeData"]," property. This is a quick and easy way to provide the tree content."]]},meta:{order:1,title:{"zh-CN":"\u4ece\u6570\u636e\u76f4\u63a5\u751f\u6210","en-US":"Generate form tree data"},filename:"components/tree-select/demo/treeData.md",id:"components-tree-select-demo-treeData"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> TreeSelect <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  label<span class="token punctuation">:</span> <span class="token string">\'Node1\'</span><span class="token punctuation">,</span>\n  value<span class="token punctuation">:</span> <span class="token string">\'0-0\'</span><span class="token punctuation">,</span>\n  key<span class="token punctuation">:</span> <span class="token string">\'0-0\'</span><span class="token punctuation">,</span>\n  children<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'Child Node1\'</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'0-0-1\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'0-0-1\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'Child Node2\'</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'0-0-2\'</span><span class="token punctuation">,</span>\n    key<span class="token punctuation">:</span> <span class="token string">\'0-0-2\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  label<span class="token punctuation">:</span> <span class="token string">\'Node2\'</span><span class="token punctuation">,</span>\n  value<span class="token punctuation">:</span> <span class="token string">\'0-1\'</span><span class="token punctuation">,</span>\n  key<span class="token punctuation">:</span> <span class="token string">\'0-1\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> undefined<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TreeSelect</span>\n        <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">300</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n        <span class="token attr-name">dropdownStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> maxHeight<span class="token punctuation">:</span> <span class="token number">400</span><span class="token punctuation">,</span> overflow<span class="token punctuation">:</span> <span class="token string">\'auto\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">treeData</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>treeData<span class="token punctuation">}</span></span>\n        <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Please</span> <span class="token attr-name">select"</span>\n        <span class="token attr-name">treeDefaultExpandAll</span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var p=s[t],e=Object.getOwnPropertyDescriptor(a,p);e&&e.configurable&&void 0===n[p]&&Object.defineProperty(n,p,e)}return n}function a(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function t(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function p(a,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);
a.prototype=Object.create(s&&s.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(a,s):n(a,s))}var e=s(1),o=(s(2),s(3)),c=[{label:"Node1",value:"0-0",key:"0-0",children:[{label:"Child Node1",value:"0-0-1",key:"0-0-1"},{label:"Child Node2",value:"0-0-2",key:"0-0-2"}]},{label:"Node2",value:"0-1",key:"0-1"}],l=function(n){function s(){for(var p,e,o,c=arguments,l=arguments.length,u=Array(l),i=0;i<l;i++)u[i]=arguments[i];return a(this,s),p=e=t(this,n.call.apply(n,[this].concat(u))),e.state={value:void 0},e.onChange=function(n){console.log(c),e.setState({value:n})},o=p,t(e,o)}return p(s,n),s.prototype.render=function(){return e.createElement(o.TreeSelect,{style:{width:300},value:this.state.value,dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:c,placeholder:"Please select",treeDefaultExpandAll:!0,onChange:this.onChange})},s}(e.Component);return e.createElement(l,null)}}},1258:function(n,a,s){n.exports={basic:s(1125),checkable:s(1126),treeData:s(1127)}}});