---
layout: post
title: Posts
---
<h2 class="posts-title">Posts</h2>

<p class="intro-text">Welcome to my posts. Sharing ideas through research and development.</p>

<ul class="posts-list">
  {% for post in site.posts %}
    <li class="post-item">
      <a href="{{ post.url }}" class="post-title">{{ post.title }}</a>
      <br>
      <small class="post-date">{{ post.date | date: "%b %d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>
