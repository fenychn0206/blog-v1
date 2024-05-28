---
title: 友链鱼塘
desc: 最新文章订阅
date: 2024-01-28 21:29:15
type: "banner"
cover: ''
leftend: 使用 友链朋友圈 订阅友链最新文章
---

<div class="title-h2-a">
    <div class="title-h2-a-left">
        <h2 style="padding-top: 0;margin:0.6rem 0 0.6rem;">🎣 钓鱼</h2>
        <a href="javascript:fetchRandomPost();" id="random-post-start" style="transition-duration: 0.3s; transform: rotate(63000deg); opacity: 1;" data-pjax-state="">
            <i class="solitude st-restart-line"></i>
        </a>
    </div>
    <div class="title-h2-a-right">
        <a href="/links/" data-pjax-state="">全部友链</a>
    </div>
</div>
<div id="random-post"></div>

<script>
var fdata = {
    apiurl: "http://yt.ohdragonboi.cn/", /* 填写你的api地址 */
    defaultFish: 100,
    hungryFish: 100,
}
</script>

<script type="text/javascript" src="https://cdn.cbd.int/solitude-source@1.0.5/js/moment/random_post.min.js"></script>

## 🐟 鱼塘

<div id="hexo-circle-of-friends-root"></div>
<script>
    let UserConfig = {
        private_api_url: 'http://yt.ohdragonboi.cn/', /* 填写你的api地址 */
        page_turning_number: 12, /* 点击加载更多时，一次最多加载几篇文章，默认10 */
        error_img: 'https://sdn.geekzu.org/avatar/57d8260dfb55501c37dde588e7c3852c', /* 头像加载失败时，默认头像地址 */
        sort_rule: 'created' /* 进入页面时第一次的排序规则 */
    }
</script>
<style>
.cf-article-group {
    margin: 0 -8px;
} 
#random-post {
  min-height: 32px;
  background: var(--efu-card-bg);
  border: var(--style-border-always);
  box-shadow: var(--efu-shadow-border);
  padding: 20px 30px;
  border-radius: 12px;
  margin-top: 8px;
}
.random-friends-post {
  text-decoration: none;
  border-bottom: 2px solid var(--efu-lighttext);
  color: var(--efu-fontcolor);
  font-weight: 700;
  padding: 0 4px;
}
.random-friends-post:hover {
  text-decoration: none;
  border-bottom: 2px solid var(--efu-none);
  color: var(--efu-white);
  background: var(--efu-main);
  border-radius: 4px;
  box-shadow: var(--efu-shadow-main);
}
.random-post-start {
  transition-duration: 0.3s;
}
.random-post-start:hover {
  color: var(--efu-hovertext);
}
#page .title-h2-a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
}
#page .title-h2-a a {
  margin-left: 0.5rem;
  color: var(--efu-secondtext);
  font-weight: 700;
}
#page .title-h2-a a:hover {
  color: var(--efu-main);
}
#page .title-h2-a .title-h2-a-left {
  display: flex;
  align-items: center;
}
#page .title-h2-a .title-h2-a-right {
  font-size: 14px;
  color: var(--efu-secondtext);
}
</style>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/zhheo/JS-Heo@master/mainColor/heoMainColor.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/zhheo/JS-Heo@master/moments5/app.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/zhheo/JS-Heo@master/moments5/bundle.js"></script>