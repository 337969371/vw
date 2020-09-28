


// mask

(function(a, e, f, g, b, c, d) {
// 获取宽度



a.ClickiTrackerName = b;
a[b] = a[b] || function() {(a[b].queue = a[b].queue || []).push(arguments)};
a[b].start = +new Date; c = e.createElement(f); d = e.getElementsByTagName(f)[0];
c.async = 1; c.src = g; d.parentNode.insertBefore(c, d)
})(window, document, 'script', '//stm-cdn.cn.miaozhen.com/clicki.min.js?v='+Math.round(new Date().getTime()/1000/300), 'stm_clicki');
stm_clicki('create', 'dc-3926', 'auto');
stm_clicki('set','dimension1','');
stm_clicki('send', 'pageview', {'page': '/path', 'title': '标题'});
stm_clicki('del', 'dimension[0-9]{1-3}', true);
   


// tj

stm_clicki('require','heatmap', '//stm-cdn.cn.miaozhen.com/plugins/heatmap.js?v='+Math.round(new Date().getTime()/1000/1800));
stm_clicki('heatmap:on',5)