document.writeln('<aside>');
document.writeln('    <ul>');
document.writeln('        <li><a>小程序购课</a></li>');
document.writeln('        <li><a>微信公众号</a></li>');
document.writeln('        <li><a>电话咨询</a></li>');
document.writeln('        <li><a class="returnTop">返回顶部</a></li>');
document.writeln('    </ul>');
document.writeln('</aside>');
// 返回顶部
$(".returnTop").click(function(){
    console.log(123)
    $(window).scrollTop(0)
})