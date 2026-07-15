var posts=["2026/07/15/hello-world/","2026/03/28/我的第一篇笔记/","2026/03/28/个人站搭建流程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };