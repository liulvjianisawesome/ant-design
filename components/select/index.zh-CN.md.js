webpackJsonp([139,211],{1018:function(t,e){t.exports={content:["section",["p","\u7c7b\u4f3c Select2 \u7684\u9009\u62e9\u5668\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["ul",["li",["p","\u5f39\u51fa\u4e00\u4e2a\u4e0b\u62c9\u83dc\u5355\u7ed9\u7528\u6237\u9009\u62e9\u64cd\u4f5c\uff0c\u7528\u4e8e\u4ee3\u66ff\u539f\u751f\u7684\u9009\u62e9\u5668\uff0c\u6216\u8005\u9700\u8981\u4e00\u4e2a\u66f4\u4f18\u96c5\u7684\u591a\u9009\u5668\u65f6\u3002"]],["li",["p","\u5f53\u9009\u9879\u5c11\u65f6\uff08\u5c11\u4e8e 5 \u9879\uff09\uff0c\u5efa\u8bae\u76f4\u63a5\u5c06\u9009\u9879\u5e73\u94fa\uff0c\u4f7f\u7528 ",["a",{title:null,href:"/components/radio/"},"Radio"]," \u662f\u66f4\u597d\u7684\u9009\u62e9\u3002"]]]],meta:{category:"Components",subtitle:"\u9009\u62e9\u5668",type:"Data Entry",title:"Select",filename:"components/select/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f55\u65f6\u4f7f\u7528",title:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lucy<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>lucy<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Option</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Select</span><span class="token punctuation">></span></span>'},["code",'<Select>\n  <Option value="lucy">lucy</Option>\n</Select>']],["h3","Select props"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","value"],["td","\u6307\u5b9a\u5f53\u524d\u9009\u4e2d\u7684\u6761\u76ee"],["td","string","|","string[]"],["td","-"]],["tr",["td","defaultValue"],["td","\u6307\u5b9a\u9ed8\u8ba4\u9009\u4e2d\u7684\u6761\u76ee"],["td","string","|","string[]"],["td","-"]],["tr",["td","mode"],["td","\u8bbe\u7f6e Select \u7684\u6a21\u5f0f\uff082.9 \u4e4b\u540e\u652f\u6301\uff09"],["td","'multiple' ","|"," 'tags' ","|"," 'combobox'"],["td","-"]],["tr",["td","multiple"],["td","\u652f\u6301\u591a\u9009\uff082.9 \u4e4b\u540e\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528 ",["code","mode"],"\uff09"],["td","boolean"],["td","false"]],["tr",["td","tags"],["td","\u53ef\u4ee5\u628a\u968f\u610f\u8f93\u5165\u7684\u6761\u76ee\u4f5c\u4e3a tag\uff0c\u8f93\u5165\u9879\u4e0d\u9700\u8981\u4e0e\u4e0b\u62c9\u9009\u9879\u5339\u914d\uff082.9 \u4e4b\u540e\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528 ",["code","mode"],"\uff09"],["td","boolean"],["td","false"]],["tr",["td","combobox"],["td","\u8f93\u5165\u6846\u81ea\u52a8\u63d0\u793a\u6a21\u5f0f\uff082.9 \u4e4b\u540e\u5e9f\u5f03\uff0c\u8bf7\u4f7f\u7528 ",["code","mode"],"\uff09"],["td","boolean"],["td","false"]],["tr",["td","allowClear"],["td","\u652f\u6301\u6e05\u9664"],["td","boolean"],["td","false"]],["tr",["td","filterOption"],["td","\u662f\u5426\u6839\u636e\u8f93\u5165\u9879\u8fdb\u884c\u7b5b\u9009\u3002\u5f53\u5176\u4e3a\u4e00\u4e2a\u51fd\u6570\u65f6\uff0c\u4f1a\u63a5\u6536 ",["code","inputValue"]," ",["code","option"]," \u4e24\u4e2a\u53c2\u6570\uff0c\u5f53 ",["code","option"]," \u7b26\u5408\u7b5b\u9009\u6761\u4ef6\u65f6\uff0c\u5e94\u8fd4\u56de ",["code","true"],"\uff0c\u53cd\u4e4b\u5219\u8fd4\u56de ",["code","false"],"\u3002"],["td","boolean or function(inputValue, option)"],["td","true"]],["tr",["td","onSelect"],["td","\u88ab\u9009\u4e2d\u65f6\u8c03\u7528\uff0c\u53c2\u6570\u4e3a\u9009\u4e2d\u9879\u7684 value (\u6216 key) \u503c"],["td","function(value, option)"],["td","-"]],["tr",["td","onDeselect"],["td","\u53d6\u6d88\u9009\u4e2d\u65f6\u8c03\u7528\uff0c\u53c2\u6570\u4e3a\u9009\u4e2d\u9879\u7684 value (\u6216 key) \u503c\uff0c\u4ec5\u5728 multiple \u6216 tags \u6a21\u5f0f\u4e0b\u751f\u6548"],["td","function(value)"],["td","-"]],["tr",["td","onChange"],["td","\u9009\u4e2d option\uff0c\u6216 input \u7684 value \u53d8\u5316\uff08combobox \u6a21\u5f0f\u4e0b\uff09\u65f6\uff0c\u8c03\u7528\u6b64\u51fd\u6570"],["td","function(value)"],["td","-"]],["tr",["td","onSearch"],["td","\u6587\u672c\u6846\u503c\u53d8\u5316\u65f6\u56de\u8c03"],["td","function(value: string)"],["td"]],["tr",["td","onBlur"],["td","\u5931\u53bb\u7126\u70b9\u7684\u65f6\u56de\u8c03"],["td","function"],["td","-"]],["tr",["td","onFocus"],["td","\u83b7\u5f97\u7126\u70b9\u65f6\u56de\u8c03"],["td","function"],["td","-"]],["tr",["td","placeholder"],["td","\u9009\u62e9\u6846\u9ed8\u8ba4\u6587\u5b57"],["td","string"],["td","-"]],["tr",["td","notFoundContent"],["td","\u5f53\u4e0b\u62c9\u5217\u8868\u4e3a\u7a7a\u65f6\u663e\u793a\u7684\u5185\u5bb9"],["td","string"],["td","'Not Found'"]],["tr",["td","dropdownMatchSelectWidth"],["td","\u4e0b\u62c9\u83dc\u5355\u548c\u9009\u62e9\u5668\u540c\u5bbd"],["td","boolean"],["td","true"]],["tr",["td","optionFilterProp"],["td","\u641c\u7d22\u65f6\u8fc7\u6ee4\u5bf9\u5e94\u7684 option \u5c5e\u6027\uff0c\u5982\u8bbe\u7f6e\u4e3a children \u8868\u793a\u5bf9\u5185\u5d4c\u5185\u5bb9\u8fdb\u884c\u641c\u7d22"],["td","string"],["td","value"]],["tr",["td","optionLabelProp"],["td","\u56de\u586b\u5230\u9009\u62e9\u6846\u7684 Option \u7684\u5c5e\u6027\u503c\uff0c\u9ed8\u8ba4\u662f Option \u7684\u5b50\u5143\u7d20\u3002\u6bd4\u5982\u5728\u5b50\u5143\u7d20\u9700\u8981\u9ad8\u4eae\u6548\u679c\u65f6\uff0c\u6b64\u503c\u53ef\u4ee5\u8bbe\u4e3a ",["code","value"],"\u3002"],["td","string"],["td",["code","children"]," \uff08combobox \u6a21\u5f0f\u4e0b\u4e3a ",["code","value"],"\uff09"]],["tr",["td","size"],["td","\u9009\u62e9\u6846\u5927\u5c0f\uff0c\u53ef\u9009 ",["code","large"]," ",["code","small"]],["td","string"],["td","default"]],["tr",["td","showSearch"],["td","\u5728\u9009\u62e9\u6846\u4e2d\u663e\u793a\u641c\u7d22\u6846"],["td","boolean"],["td","false"]],["tr",["td","disabled"],["td","\u662f\u5426\u7981\u7528"],["td","boolean"],["td","false"]],["tr",["td","defaultActiveFirstOption"],["td","\u662f\u5426\u9ed8\u8ba4\u9ad8\u4eae\u7b2c\u4e00\u4e2a\u9009\u9879\u3002"],["td","boolean"],["td","true"]],["tr",["td","dropdownStyle"],["td","\u4e0b\u62c9\u83dc\u5355\u7684 style \u5c5e\u6027"],["td","object"],["td","-"]],["tr",["td","dropdownClassName"],["td","\u4e0b\u62c9\u83dc\u5355\u7684 className \u5c5e\u6027"],["td","string"],["td","-"]],["tr",["td","getPopupContainer"],["td","\u83dc\u5355\u6e32\u67d3\u7236\u8282\u70b9\u3002\u9ed8\u8ba4\u6e32\u67d3\u5230 body \u4e0a\uff0c\u5982\u679c\u4f60\u9047\u5230\u83dc\u5355\u6eda\u52a8\u5b9a\u4f4d\u95ee\u9898\uff0c\u8bd5\u8bd5\u4fee\u6539\u4e3a\u6eda\u52a8\u7684\u533a\u57df\uff0c\u5e76\u76f8\u5bf9\u5176\u5b9a\u4f4d\u3002",["a",{title:null,href:"http://codepen.io/anon/pen/xVBOVQ?editors=001"},"\u793a\u4f8b"]],["td","Function(triggerNode)"],["td","() => document.body"]],["tr",["td","labelInValue"],["td","\u662f\u5426\u628a\u6bcf\u4e2a\u9009\u9879\u7684 label \u5305\u88c5\u5230 value \u4e2d\uff0c\u4f1a\u628a Select \u7684 value \u7c7b\u578b\u4ece ",["code","string"]," \u53d8\u4e3a ",["code","{key: string, label: ReactNode}"]," \u7684\u683c\u5f0f"],["td","boolean"],["td","false"]],["tr",["td","tokenSeparators"],["td","\u5728 tags \u548c multiple \u6a21\u5f0f\u4e0b\u81ea\u52a8\u5206\u8bcd\u7684\u5206\u9694\u7b26"],["td","string[]"],["td"]]]],["h3","Option props"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","disabled"],["td","\u662f\u5426\u7981\u7528"],["td","boolean"],["td","false"]],["tr",["td","value"],["td","\u9ed8\u8ba4\u6839\u636e\u6b64\u5c5e\u6027\u503c\u8fdb\u884c\u7b5b\u9009"],["td","string"],["td","-"]],["tr",["td","key"],["td","\u548c value \u542b\u4e49\u4e00\u81f4\u3002\u5982\u679c React \u9700\u8981\u4f60\u8bbe\u7f6e\u6b64\u9879\uff0c\u6b64\u9879\u503c\u4e0e value \u7684\u503c\u76f8\u540c\uff0c\u7136\u540e\u53ef\u4ee5\u7701\u7565 value \u8bbe\u7f6e"],["td","string"],["td"]],["tr",["td","title"],["td","\u9009\u4e2d\u8be5 Option \u540e\uff0cSelect \u7684 title"],["td","string"],["td","-"]]]],["h3","OptGroup props"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","label"],["td","\u7ec4\u540d"],["td","string","|","React.Element"],["td","\u65e0"]],["tr",["td","key"],["td"],["td","string"],["td","-"]]]]]}}});