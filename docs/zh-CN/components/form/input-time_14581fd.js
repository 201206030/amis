amis.define('docs/zh-CN/components/form/input-time.md', function(require, exports, module, define) {

  module.exports = {
    "title": "InputTime 时间",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "InputTime 时间",
    "icon": null,
    "order": 58,
    "html": "<div class=\"markdown-body\"><h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-time\",\n            \"name\": \"time\",\n            \"label\": \"时间\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%98%BE%E7%A4%BA%E6%A0%BC%E5%BC%8F\" href=\"#%E6%98%BE%E7%A4%BA%E6%A0%BC%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>显示格式</h2><p>选中任意时间，可以看到默认显示时间的格式是像<code>01:01</code>这样的格式，如果你想要自定义显示格式，那么可以配置<code>inputFormat</code>。</p>\n<p>例如你想显示<code>01时01分</code>这样的格式，查找 moment 文档可知配置格式应为 <code>HH时mm分</code>，即：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-time\",\n            \"name\": \"time\",\n            \"label\": \"时间\",\n            \"inputFormat\": \"HH时mm分\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>调整时间，观察显示格式</p>\n<h2><a class=\"anchor\" name=\"%E5%80%BC%E6%A0%BC%E5%BC%8F\" href=\"#%E5%80%BC%E6%A0%BC%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>值格式</h2><p>选中任意时间，可以看到默认表单项的值格式是像<code>1591862818</code>这样的时间戳格式。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-time\",\n            \"name\": \"time\",\n            \"label\": \"时间\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>如果你想要其他格式的日期值，那么可以配置<code>format</code>参数用于调整表单项的值格式。</p>\n<p>例如你调整值为<code>01:11</code>这样的格式，查找 moment 文档可知配置格式应为 <code>HH:mm</code>，即：</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-time\",\n            \"name\": \"time\",\n            \"label\": \"时间\",\n            \"format\": \"HH:mm\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>调整时间，观察数据域中表单项值的变化</p>\n<h2><a class=\"anchor\" name=\"%E6%98%BE%E7%A4%BA%E7%A7%92\" href=\"#%E6%98%BE%E7%A4%BA%E7%A7%92\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>显示秒</h2><p>默认显示的是时和分，要显示秒请参考以下配置</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-time\",\n            \"name\": \"time\",\n            \"label\": \"时间\",\n            \"format\": \"HH:mm:ss\",\n            \"timeFormat\": \"HH:mm:ss\",\n            \"inputFormat\": \"HH:mm:ss\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E9%BB%98%E8%AE%A4%E5%80%BC\" href=\"#%E9%BB%98%E8%AE%A4%E5%80%BC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>默认值</h2><p>可以设置<code>value</code>属性，设置日期选择器的默认值</p>\n<h3><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE\" href=\"#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本配置</h3><p>配置符合当前 <a href=\"./date#%E5%80%BC%E6%A0%BC%E5%BC%8F\">值格式</a> 的默认值。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-time\",\n            \"name\": \"time\",\n            \"label\": \"时间\",\n            \"value\": \"1591862818\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"%E7%9B%B8%E5%AF%B9%E5%80%BC\" href=\"#%E7%9B%B8%E5%AF%B9%E5%80%BC\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>相对值</h3><p><code>value</code> 还支持类似像<code>&quot;+1hours&quot;</code>这样的相对值，更加便捷的配置默认值</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-time\",\n            \"name\": \"time\",\n            \"label\": \"时间\",\n            \"value\": \"+1hours\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<p>上例中配置了<code>&quot;value&quot;: &quot;+1hours&quot;</code>，默认就会选中一小时后。</p>\n<p>支持的相对值关键字有：</p>\n<ul>\n<li><code>now</code>: 当前时间</li>\n<li><code>hour</code>或<code>hours</code>: 时</li>\n<li><code>minute</code>或<code>minutes</code>: 分</li>\n<li><code>second</code>或<code>seconds</code>: 秒</li>\n</ul>\n<h2><a class=\"anchor\" name=\"%E6%8E%A7%E5%88%B6%E8%BE%93%E5%85%A5%E8%8C%83%E5%9B%B4\" href=\"#%E6%8E%A7%E5%88%B6%E8%BE%93%E5%85%A5%E8%8C%83%E5%9B%B4\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>控制输入范围</h2><p>通过 <code>timeConstraints</code> 属性可以控制输入范围</p>\n<p>默认值是</p>\n<pre><code class=\"language-json\"><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"hours\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"min\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"max\"</span><span class=\"token operator\">:</span> <span class=\"token number\">23</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"step\"</span><span class=\"token operator\">:</span> <span class=\"token number\">1</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"minutes\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"min\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"max\"</span><span class=\"token operator\">:</span> <span class=\"token number\">59</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"step\"</span><span class=\"token operator\">:</span> <span class=\"token number\">1</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"seconds\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"min\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"max\"</span><span class=\"token operator\">:</span> <span class=\"token number\">59</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"step\"</span><span class=\"token operator\">:</span> <span class=\"token number\">1</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"milliseconds\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"min\"</span><span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"max\"</span><span class=\"token operator\">:</span> <span class=\"token number\">999</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"step\"</span><span class=\"token operator\">:</span> <span class=\"token number\">1</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>可以只修改其中的部分值，比如下面的示例将分钟每次加减改成了 15，小时的范围限制在 9 到 17</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"input-time\",\n            \"name\": \"time\",\n            \"label\": \"时间\",\n            \"timeConstraints\": {\n                \"hours\": {\n                    \"min\": 9,\n                    \"max\": 17\n                },\n                \"minutes\": {\n                    \"step\": 15\n                }\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8E%9F%E7%94%9F%E6%97%B6%E9%97%B4%E7%BB%84%E4%BB%B6\" href=\"#%E5%8E%9F%E7%94%9F%E6%97%B6%E9%97%B4%E7%BB%84%E4%BB%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>原生时间组件</h2><p>原生时间组件将直接使用浏览器的实现，最终展现效果和浏览器有关，而且只支持 <code>min</code>、<code>max</code>、<code>step</code> 这几个属性设置。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"native-time\",\n            \"name\": \"time\",\n            \"label\": \"时间\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>除了支持 <a href=\"./formitem#%E5%B1%9E%E6%80%A7%E8%A1%A8\">普通表单项属性表</a> 中的配置以外，还支持下面一些配置</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>value</td>\n<td><code>string</code></td>\n<td></td>\n<td><a href=\"./date#%E9%BB%98%E8%AE%A4%E5%80%BC\">默认值</a></td>\n</tr>\n<tr>\n<td>timeFormat</td>\n<td><code>string</code></td>\n<td><code>HH:mm</code></td>\n<td>时间选择器值格式，更多格式类型请参考 <a href=\"http://momentjs.com/\">moment</a></td>\n</tr>\n<tr>\n<td>format</td>\n<td><code>string</code></td>\n<td><code>X</code></td>\n<td>时间选择器值格式，更多格式类型请参考 <a href=\"http://momentjs.com/\">moment</a></td>\n</tr>\n<tr>\n<td>inputFormat</td>\n<td><code>string</code></td>\n<td><code>HH:mm</code></td>\n<td>时间选择器显示格式，即时间戳格式，更多格式类型请参考 <a href=\"http://momentjs.com/\">moment</a></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td><code>string</code></td>\n<td><code>&quot;请选择时间&quot;</code></td>\n<td>占位文本</td>\n</tr>\n<tr>\n<td>clearable</td>\n<td><code>boolean</code></td>\n<td><code>true</code></td>\n<td>是否可清除</td>\n</tr>\n<tr>\n<td>timeConstraints</td>\n<td><code>object</code></td>\n<td><code>true</code></td>\n<td></td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E4%BA%8B%E4%BB%B6%E8%A1%A8\" href=\"#%E4%BA%8B%E4%BB%B6%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>事件表</h2><p>当前组件会对外派发以下事件，可以通过<code>onEvent</code>来监听这些事件，并通过<code>actions</code>来配置执行的动作，在<code>actions</code>中可以通过<code>event.data.xxx</code>事件参数变量来获取事件产生的数据，详细请查看<a href=\"../../docs/concepts/event-action\">事件动作</a>。</p>\n<table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>事件参数</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>change</td>\n<td><code>event.data.value: string</code> 时间值</td>\n<td>时间值变化时触发</td>\n</tr>\n<tr>\n<td>focus</td>\n<td><code>event.data.value: string</code> 时间值</td>\n<td>输入框获取焦点(非内嵌模式)时触发</td>\n</tr>\n<tr>\n<td>blur</td>\n<td><code>event.data.value: string</code> 时间值</td>\n<td>输入框失去焦点(非内嵌模式)时触发</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E4%BD%9C%E8%A1%A8\" href=\"#%E5%8A%A8%E4%BD%9C%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动作表</h2><p>当前组件对外暴露以下特性动作，其他组件可以通过指定<code>actionType: 动作名称</code>、<code>componentId: 该组件id</code>来触发这些动作，动作配置可以通过<code>args: {动作配置项名称: xxx}</code>来配置具体的参数，详细请查看<a href=\"../../docs/concepts/event-action#触发其他组件的动作\">事件动作</a>。</p>\n<table>\n<thead>\n<tr>\n<th>动作名称</th>\n<th>动作配置</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>clear</td>\n<td>-</td>\n<td>清空</td>\n</tr>\n<tr>\n<td>reset</td>\n<td>-</td>\n<td>将值重置为<code>resetValue</code>，若没有配置<code>resetValue</code>，则清空</td>\n</tr>\n<tr>\n<td>setValue</td>\n<td><code>value: string</code> 更新的时间值</td>\n<td>更新数据，依赖格式<code>format</code>，例如：&#39;1648746120&#39;</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "显示格式",
          "fragment": "%E6%98%BE%E7%A4%BA%E6%A0%BC%E5%BC%8F",
          "fullPath": "#%E6%98%BE%E7%A4%BA%E6%A0%BC%E5%BC%8F",
          "level": 2
        },
        {
          "label": "值格式",
          "fragment": "%E5%80%BC%E6%A0%BC%E5%BC%8F",
          "fullPath": "#%E5%80%BC%E6%A0%BC%E5%BC%8F",
          "level": 2
        },
        {
          "label": "显示秒",
          "fragment": "%E6%98%BE%E7%A4%BA%E7%A7%92",
          "fullPath": "#%E6%98%BE%E7%A4%BA%E7%A7%92",
          "level": 2
        },
        {
          "label": "默认值",
          "fragment": "%E9%BB%98%E8%AE%A4%E5%80%BC",
          "fullPath": "#%E9%BB%98%E8%AE%A4%E5%80%BC",
          "level": 2,
          "children": [
            {
              "label": "基本配置",
              "fragment": "%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE",
              "fullPath": "#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE",
              "level": 3
            },
            {
              "label": "相对值",
              "fragment": "%E7%9B%B8%E5%AF%B9%E5%80%BC",
              "fullPath": "#%E7%9B%B8%E5%AF%B9%E5%80%BC",
              "level": 3
            }
          ]
        },
        {
          "label": "控制输入范围",
          "fragment": "%E6%8E%A7%E5%88%B6%E8%BE%93%E5%85%A5%E8%8C%83%E5%9B%B4",
          "fullPath": "#%E6%8E%A7%E5%88%B6%E8%BE%93%E5%85%A5%E8%8C%83%E5%9B%B4",
          "level": 2
        },
        {
          "label": "原生时间组件",
          "fragment": "%E5%8E%9F%E7%94%9F%E6%97%B6%E9%97%B4%E7%BB%84%E4%BB%B6",
          "fullPath": "#%E5%8E%9F%E7%94%9F%E6%97%B6%E9%97%B4%E7%BB%84%E4%BB%B6",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        },
        {
          "label": "事件表",
          "fragment": "%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "fullPath": "#%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "level": 2
        },
        {
          "label": "动作表",
          "fragment": "%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "fullPath": "#%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});